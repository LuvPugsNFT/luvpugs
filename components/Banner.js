import React from "react";
import { Parallax } from "react-parallax";

export default class Banner extends React.Component {
  constructor(props) {
    super(props)
  }

  getShortAccountId() {
    let address = "" + (this.props.prop.account ? this.props.prop.account : '');
    return address.slice(0, 8) + "....." + address.slice(address.length - 3, address.length);
  }

  render() {
    return (
      <Parallax
        blur={0}
        bgImage="images/banner.png"
        bgImageAlt="the cat"
        strength={400}
      >
        <div className="banner">
          <div className="flex max-w-7xl pt-6 mx-auto justify-between">
            <h1 className="text-center text-2xl font-thin text-white py-4">
              Luv Pugs
          </h1>
            {this.props.prop.isEnabled ? <button
              type="button"
              className="inline-flex items-center px-6 py-3 border border-gray-300 shadow-sm text-base font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
              {this.getShortAccountId()}          </button> : <button
              type="button"
              className="inline-flex items-center px-6 py-3 border border-gray-300 shadow-sm text-base font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
              onClick={()=>{this.props.connect()}}>
              Connect          </button>
            }
          </div>
          <h1 className="text-center max-w-lg mx-auto text-7xl text-white mt-32 border-b pb-4 border-white">
            LuvPugs
        </h1>
          <p className="text-center text-white mt-4 lusi pb-44 text-xl">
            Mint Now
        </p>
        </div>
      </Parallax>
    );
  }
}
