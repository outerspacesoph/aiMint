require("@nomicfoundation/hardhat-toolbox");
require("dotenv").config();

const LLAMA_NODE_URL = process.env.LLAMA_NODE_URL;
const AI_PRIVATE_KEY = process.env.AI_PRIVATE_KEY;
const GOERLI_RPC_URL = process.env.GOERLI_RPC_URL;
const GOERLI_PRIVATE_KEY = process.env.GOERLI_PRIVATE_KEY;
/** @type import('hardhat/config').HardhatUserConfig */

module.exports = {
  solidity: "0.8.17",
  networks: {
    goerli: {
      url: GOERLI_RPC_URL,
      accounts: [GOERLI_PRIVATE_KEY],
      chainId: 5,
    },
  },
};
