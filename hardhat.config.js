/**
* @type import('hardhat/config').HardhatUserConfig
*/
// import('hardhat/config').HardhatUserConfig
// require('dotenv').config();
 require("@nomiclabs/hardhat-ethers");

// const { API_URL, PRIVATE_KEY } = process.env;

// module.exports = {
//    solidity: "0.8.11",
//    defaultNetwork: "volta",
//    networks: {
//       hardhat: {},
//       volta: {
//          url: API_URL,
//          accounts: [`0x${PRIVATE_KEY}`],
//          gas: 210000000,
//          gasPrice: 800000000000,
//       }
//    },
// }

//require("@nomiclabs/hardhat-waffle");
require("dotenv").config();

module.exports = {
  solidity: "0.8.4",
  networks: {
    volta: {
      url: process.env.API_URL,
      accounts: [`0x${process.env.PRIVATE_KEY}`],
      gas: 210000000,
      gasPrice: 800000000000,
    },
  },
};