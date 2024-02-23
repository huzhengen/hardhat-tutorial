require("@nomicfoundation/hardhat-toolbox");

let dotenv = require('dotenv')
dotenv.config({ path: "./.env" })

// 自己的私钥或助记词
const mnemonic = process.env.MNEMONIC
const scankey = process.env.ETHERSCAN_API_KEY
const PRIVATE_KEY1 = process.env.PRIVATEKEY

module.exports = {
  solidity: "0.8.24", // solidity的编译版本
  networks: {
    goerli: {
      url: "https://rpc.goerli.eth.gateway.fm",
      accounts: [PRIVATE_KEY1],
      // accounts: {
        // mnemonic: Mnemonic,
      // },
      chainId: 5,
    },

    mumbai: {
      url: "https://endpoints.omniatech.io/v1/matic/mumbai/public",
      accounts: {
        mnemonic: mnemonic,
      },
      chainId: 80001,
    },
  }
};
