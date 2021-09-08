/**
* @type import('hardhat/config').HardhatUserConfig
*/

require('dotenv').config();
require("@nomiclabs/hardhat-ethers");

const { API_ROPSTEN, PRIVATE_KEY } = process.env;

module.exports = {
   defaultNetwork: "mainnet",
   networks: {
     localhost: {
       url: "http://127.0.0.1:8545"
     },
     hardhat: {
     },
     testnet: {
       url: "https://data-seed-prebsc-1-s1.binance.org:8545",
       chainId: 97,
       gasPrice: 20000000000,
       accounts: [`0x${PRIVATE_KEY}`]
     },
     mainnet: {
       url: "https://bsc-dataseed.binance.org/",
       chainId: 56,
       gasPrice: 20000000000,
       accounts: [`0x${PRIVATE_KEY}`]
     },
     ropsten: {
      url: API_ROPSTEN,
      accounts: [`0x${PRIVATE_KEY}`]
     }
   },
   solidity: {
   version: "0.8.4",
   settings: {
     optimizer: {
       enabled: true
     }
    }
   },
   paths: {
     sources: "./contracts",
     tests: "./test",
     cache: "./cache",
     artifacts: "./artifacts"
   },
   mocha: {
     timeout: 20000
   }
 };