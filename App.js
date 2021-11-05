import React from 'react';
import Web3 from 'web3';
import toastr from 'toastr';
import './toastr.css';
import './App.css';
import About from './components/About';
import Banner from './components/Banner';
import CountdownTimer from './components/Countdown';
import Mint from './components/MInt';


import { LIST_ADDRESS_MINT_RINKBY, LIST_ADDRESS_MINT_MAIN, LIST_ABI_MINT, MAINNET_HTTP_ETH } from './config';

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      web3: null,
      networkType: null,
      chainId: null,
      account: null,
      isEnabled: false,
      isConnecting: false,
      LIST_ADDRESS_MINT: null,
      mintWeb3Inst: null,
      canShow: true,
      web3InfuraInstance: null, 
      isDefaultEnabled: false
    }
    toastr.options = {
      // positionClass: 'toast-top-full-width',
      hideDuration: 300,
      timeOut: 3000
    }
  }

  componentDidMount() {
    this.connectToDefaultWallet()
  }


  async connectToDefaultWallet() {
    try {
      const web3Infura = new Web3(new Web3.providers.HttpProvider(MAINNET_HTTP_ETH));
      const web3InfuraInstance = new web3Infura.eth.Contract(LIST_ABI_MINT, LIST_ADDRESS_MINT_MAIN);
      await this.setState({ web3InfuraInstance: web3InfuraInstance, isDefaultEnabled: true })
      this.changesReflactor();
    } catch (e) {
      console.error(e)
    }
  }

  async connectToMetaMaskNetwork() {
    if (this.state.isConnecting) {
      return;
    }
    this.setState({ isConnecting: true });
    try {
      if (window.ethereum) {
        await window.ethereum.enable().then((err, res) => {
        });
        this.state.web3 = new Web3(window.ethereum);
        window.ethereum.on('networkChanged', (chainId) => {
          // handle the new network
          // document.location.reload();
          this.setConfig();
        });
        window.ethereum.on('chainChanged', (chainId) => {
          // handle the new network
          // document.location.reload();
          this.setConfig();
        });
        window.ethereum.on('accountsChanged', (chainId) => {
          // handle the new network
          document.location.reload();
        });
        window.ethereum.on('disconnect', (chainId) => {
          document.location.reload();
        });
        try {
          await this.setConfig();
        } catch (e) {
          // User has denied account access to DApp...
          await this.setState({ isEnabled: false });
        }
      } else if (window.web3 && window.web3.currentProvider) {
        window.web3.on('networkChanged', (chainId) => {
          // handle the new network
          // document.location.reload();
          this.setConfig();
        });
        window.web3.on('chainChanged', (chainId) => {
          // handle the new network
          // document.location.reload();
          this.setConfig();
        });
        window.web3.on('accountsChanged', (chainId) => {
          // handle the new network
          document.location.reload();
        });
        window.web3.on('disconnect', (chainId) => {
          document.location.reload();
        });
        this.state.web3 = new Web3(window.web3.currentProvider);
        try {
          await this.setConfig();
        } catch (e) {
          // User has denied account access to DApp...
          await this.setState({ isEnabled: false, isConnecting: false });
          this.changesReflactor();
        }
      } else {
        await this.setState({ isEnabled: false, isConnecting: false });
        this.changesReflactor();
      }
    } catch (e) {
      await this.setState({ isEnabled: false, isConnecting: false });
      this.changesReflactor();
    }
  }

  async setConfig() {
    const Id = await this.state.web3.eth.net.getNetworkType();
    const chainId = await this.state.web3.eth.getChainId();
    const accounts = await this.state.web3.eth.getAccounts();
    this.state.web3.eth.defaultAccount = accounts[0];
    this.configNetwork(Id, chainId, accounts[0]);
  }

  async configNetwork(Id, chainId, account) {
    if (chainId != 250 && chainId != 4002) {
      toastr.info('Wrong network choosen.');
      await this.setState({
        isEnabled: false,
        isConnecting: false,
      });
      this.changesReflactor();
      return;
    } else if (chainId == 250 || chainId == 4002) {
      let LIST_ADDRESS_MINT = null;
      if (chainId == 250) {
        LIST_ADDRESS_MINT = LIST_ADDRESS_MINT_MAIN;
      } else if (chainId == 4002) {
        LIST_ADDRESS_MINT = LIST_ADDRESS_MINT_RINKBY;
      }
      let mintWeb3Inst = new this.state.web3.eth.Contract(LIST_ABI_MINT, LIST_ADDRESS_MINT);
      await this.setState({
        isEnabled: true,
        isConnecting: false,
        networkType: Id,
        chainId: chainId,
        account: account,
        LIST_ADDRESS_MINT: LIST_ADDRESS_MINT,
        mintWeb3Inst: mintWeb3Inst
      });

      this.changesReflactor();
    } else {
    }
  }

  async changesReflactor() {
    await this.setState({ canShow: false });
    await this.setState({ canShow: true });
  }

  render() {
    return (
      this.state.canShow ? (
        <div className="">
          <Banner prop={this.state} connect={() => { this.connectToMetaMaskNetwork() }} />
          <CountdownTimer />
          <Mint prop={this.state} />
          <About />
        </div>
      ) : ''
    );
  }
}

export default App;
