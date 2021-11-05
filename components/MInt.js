import React, { useState } from "react";
import toastr from 'toastr';
import '../toastr.css';

const minMintAmount = 1;
const maxMintAmount = 20;
const perTokenAmountFTM = 0.015;
export default class Mint extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      mintAmount: minMintAmount,
      totalTokenAmountFTM: perTokenAmountFTM * minMintAmount,
      currentFTMBal: '-',
      mintedTokensCount: 0,
      remainingCount: 0,
      totalCount: 0,
      mintedPerc: 0,
      isSaleActive: false,
      mintStatus: 'start',
      isDateActive: false,
      mintedList: [],
      mintedNFT: [],
      nftSearchAccount: ''
    }
    toastr.options = {
      // positionClass: 'toast-top-full-width',
      hideDuration: 300,
      timeOut: 3000
    }
  }

  componentDidMount() {
    if (this.props.prop.isEnabled) {
      this.loadData();
      this.isSaleActive();
    }
    this.checkTime();
  }

  checkTime() {
    setInterval(() => {
      let isActive = false;
      let date = new Date();
      let cmpDate = new Date('2021-10-17');
      if (date.getTime() >= cmpDate.getTime()) {
        isActive = true;
      }
      this.setState({ isDateActive: isActive })
    }, 1000)
  }

  async getMintedNFT() {
    if(!this.props.prop.isDefaultEnabled){
      this.toastr.error("Unable to find connection. Please try again.")
      return;
    }
    await this.setState({ mintedList: [], mintedNFT: [] })
    let totalNFTs = await this.props.prop.web3InfuraInstance.methods.balanceOf(this.state.nftSearchAccount).call();
    if (totalNFTs > 0) {
      let list = [];
      this.getList(list, totalNFTs, 0);
    }
  }

  async getList(list, totalNFTs, index) {
    if (index <= totalNFTs - 1) {
      let temp = await this.props.prop.web3InfuraInstance.methods.tokenOfOwnerByIndex(this.state.nftSearchAccount, index).call();
      list.push(temp)

      this.getList(list, totalNFTs, index + 1);
    } else if (index > totalNFTs - 1) {
      //set in state
      this.setState({ mintedList: list })
      if (list && list.length > 0) {
        this.getObj([], 0, list.length, list)
      }
    }
  }

  async getObj(data, index, totalLength, list) {
    if (index <= totalLength - 1) {
      let url = await this.props.prop.web3InfuraInstance.methods.tokenURI(list[index]).call();
      fetch(url)
        .then(res => res.json())
        .then(
          (result) => {
            for (let attr of result?.attributes) {
              result[attr.trait_type] = attr.value;
            }
            result['id'] = list[index];
            data.push(result);
            this.getObj(data, index + 1, totalLength, list)
          },
          (error) => {
            this.getObj(data, index, totalLength, list)
          }
        )
    } else if (index > totalLength - 1) {
      this.setState({ mintedNFT: data })
    }
  }

  async loadData() {

    await this.callsABI();

    setTimeout(() => {
      if (this.props.prop.isEnabled) {
        this.loadData()
      }
    }, 5000)
  }

  async callsABI() {
    try {
      this.loadUserFTMBalance();
      this.mintedTokens();
      this.totalTokenToBeMinted();
      this.tokenRemainingToBeMinted();
    } catch (e) {
      console.error(e)
    }
  }

  async loadUserFTMBalance() {
    try {
      let currentFTMBal = await this.props.prop.web3.eth.getBalance(this.props.prop.account);
      this.setState({ currentFTMBal: currentFTMBal })
    } catch (e) {
      console.error(e)
    }
  }

  async isSaleActive() {
    try {
      let isSaleActive = await this.props.prop.mintWeb3Inst.methods.isSaleActive().call();
      this.setState({ isSaleActive: isSaleActive });
    } catch (e) {
      console.error(e);
    }
  }

  async mintedTokens() {
    try {
      let mintedTokensCount = await this.props.prop.mintWeb3Inst.methods.mintedTokens().call();
      await this.setState({ mintedTokensCount: mintedTokensCount });
      this.calcMintedPerc()
    } catch (e) {
      console.error(e);
    }
  }

  async totalTokenToBeMinted() {
    try {
      let totalCount = await this.props.prop.mintWeb3Inst.methods.TOTAL_TOKEN_TO_MINT().call();
      await this.setState({ totalCount: totalCount });
      this.calcMintedPerc()
    } catch (e) {
      console.error(e);
    }
  }

  async tokenRemainingToBeMinted() {
    try {
      let remainingCount = await this.props.prop.mintWeb3Inst.methods.tokenRemainingToBeMinted().call();
      await this.setState({ remainingCount: remainingCount });
      this.calcMintedPerc()
    } catch (e) {
      console.error(e);
    }
  }

  calcMintedPerc() {
    if (this.state.totalCount > 0 && this.state.mintedTokensCount >= 0) {
      let mintedPerc = (100 * Number(this.state.mintedTokensCount)) / Number(this.state.totalCount);
      this.setState({ mintedPerc: mintedPerc });
    }
  }

  setMaxAmount() {
    this.setState({ mintAmount: maxMintAmount, totalTokenAmountFTM: perTokenAmountFTM * maxMintAmount })
  }

  onPlusAmount() {
    if (this.state.mintAmount && this.state.mintAmount < maxMintAmount) {
      this.setState({ mintAmount: this.state.mintAmount + 1, totalTokenAmountFTM: (perTokenAmountFTM * (this.state.mintAmount + 1)) })
    }
  }

  onMinusAmount() {
    if (this.state.mintAmount && this.state.mintAmount > minMintAmount) {
      this.setState({ mintAmount: this.state.mintAmount - 1, totalTokenAmountFTM: (perTokenAmountFTM * (this.state.mintAmount - 1)) })
    }
  }

  async mintSubmit() {
    try {
      if (this.props.prop.isEnabled && !this.props.prop.isConnecting) {

        if (Number(this.state.mintAmount) <= 0 || Number(this.state.mintAmount) > 20) {
          toastr.error("Please select from 1-20 range.")
          return;
        }

        await this.setState({ mintStatus: 'inProgress' });
        const BN = this.props.prop.web3.utils.BN;
        let cost = new BN("50000000000000000000");
        let totalValue = new BN(this.state.mintAmount).mul(cost);
        if (Number(this.getFormatFrom(totalValue)) >= Number(this.state.currentFTMBal)) {
          await this.setState({ mintStatus: 'start' })
          toastr.error("Insufficient FTM balance.")
          return;
        }
        if (Number(this.state.remainingCount) < Number(this.state.mintAmount)) {
          await this.setState({ mintStatus: 'start' })
          toastr.error("Insufficient Token available to mint.");
          return;
        }

        if (this.state.isSaleActive) {
          await this.props.prop.mintWeb3Inst.methods.mintToken(Number(this.state.mintAmount)).send({
            from: this.props.prop.account,
            value: totalValue
          }).then(async (result) => {
            await this.setState({ mintStatus: 'start' })
            this.tokenRemainingToBeMinted();
            toastr.success("Your Token have been minted.")
          }).catch(async (error) => {
            await this.setState({ mintStatus: 'start' })
            toastr.error("Mint Failed");
          });
        } else {
          await this.setState({ mintStatus: 'start' })
          toastr.error('Sale not active!')
        }

      } else {
        toastr.info("Please connect you'r wallet.")
      }
    } catch (e) {
      toastr.error("Mint Failed due to some error.")
    }

  }

  getFormatTo(amount) {
    return this.props.prop.web3.utils.toWei((amount).toString(), "ether");
  }

  getFormatFrom(amount) {
    return this.props.prop.web3.utils.fromWei((amount).toString(), "ether");
  }

  getFormatedNumber(num, divideBy, fixUpto) {
    if (num == 0) {
      return 0
    }
    return this.getDecimals((num / divideBy).toFixed(fixUpto));
  }

  getDecimals(str) {
    if (str.endsWith('.000000')) {
      return Number(str.replace('.000000', ''));
    } else if (str.endsWith('.00000')) {
      return Number(str.replace('.00000', ''));
    } else if (str.endsWith('.0000')) {
      return Number(str.replace('.0000', ''));
    } else if (str.endsWith('.000')) {
      return Number(str.replace('.000', ''));
    } else if (str.endsWith('.00')) {
      return Number(str.replace('.00', ''));
    } else if (str.endsWith('.0')) {
      return Number(str.replace('.0', ''));
    } else {
      return Number(str)
    }
  }

  componentWillUnmount() {
  }

  isAnyTransactionInProgress() {
    if (this.state.mintStatus == 'inprogress') {
      return true;
    }
    return false;
  }

  getNFTsImgs() {
    if (this.state.mintedNFT && this.state.mintedNFT.length > 0) {
      return this.state.mintedNFT.map((e, key) => {
        return <div className="col-md-2"><a><img className="mb-4" style={{width:'100%'}} key={key} src={e.image} alt="" /></a></div>;
      })
    } else {
      return;
    }
  }

  handleAddressChange(event){
    this.setState({nftSearchAccount : event.target.value})
  }

  render() {
    return (
      <div>
        <div className="mint lusi">
          <div className="max-w-md py-20 text-center mx-auto  ">
            <h1 className="text-5xl font-bold">MINT</h1>
            <div className="mt-8">
              <button className="text-7xl font-bold cursor-pointer mr-4" onClick={() => { this.onMinusAmount() }}>-</button>
              <button className="text-8xl font-bold" style={{ width: '100px', cursor: 'auto' }}>{this.state.mintAmount}</button>
              <button className="text-7xl font-bold cursor-pointer ml-4" onClick={() => { this.onPlusAmount() }}>+</button>
            </div>
            <button
              type="button"
              className="mt-4 inline-flex items-center px-6 py-3 border border-gray-300 shadow-sm text-l font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
              onClick={() => this.setMaxAmount()}>
              Max
          </button>
            <h1 className="text-4xl mt-8 font-bold">SLOTHTOPIA</h1>
            <h3 className="text-2xl mt-4 font-bold">Max 20 mints</h3>
            <br />
            {this.props.prop.isEnabled ?
              <button disabled={!(this.props.prop.isEnabled && this.state.mintStatus == 'start')}
                // <button disabled={!(this.props.prop.isEnabled && this.state.mintStatus == 'start') || !this.state.isDateActive}
                type="button"
                className="mt-4 inline-flex items-center px-6 py-3 border border-gray-300 shadow-sm text-xl font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                onClick={() => this.mintSubmit()}>
                Mint
          </button> : <button
                type="button"
                className="mt-4 inline-flex items-center px-6 py-3 border border-gray-300 shadow-sm text-xl font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
              >
                Lets Go
          </button>
            }
          </div>

          {(this.isAnyTransactionInProgress()) ? (<div id="toast-container" className="toast-top-right">
            <div className="toast toast-info" aria-live="assertive">
              <div className="toast-message">Transaction is in progress.</div>
            </div>
          </div>) : ''}
        </div>

        <div className="mint lusi" style={{ backgroundImage: 'none', paddingBottom: '50px' }}>
          <div className="container">
          <div className="row">
            <div className="col-md-12" style={{ textAlign: '-webkit-center' }}>
              <div class="flex max-w-3xl pr-3 bg-sky bg-opacity-20 items-center flex-1 w-full">
                <input placeholder="ENTER YOUR WALLET ADDRESS TO SEE YOUR LUVPUGS" class="w-full  placeholder-white h-9 outline-none bg-sky w-full bg-opacity-0 px-2" value={this.state.nftSearchAccount} onChange={(e) => this.handleAddressChange(e)} />
                <span class="font-bold cursor-pointer text-3xl" onClick={() => { this.getMintedNFT() }}>&gt;</span>
              </div>
            </div>
          </div>
          <br/>
          <div className="row">
            {this.getNFTsImgs()}
          </div>
          </div>
        </div>
      </div>
    );
  }
}