import React from "react";

export default class About extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:py-16 lg:px-8">
        <h1 className="border-b border-gray-300 text-2xl py-5">
          Mint your Luv Pugs!
      </h1>


        <h3 className="mt-10 text-center lusi">Luv Pugs NFT</h3>
        <p className="mt-10 text-center lusi text-gray-500">
          Copyright © 2021 Luv Pugs NFT - All Rights Reserved.
      </p>
      </div>
    );
  }
}