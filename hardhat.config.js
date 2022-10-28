// require("@nomicfoundation/hardhat-toolbox");
require("@nomiclabs/hardhat-waffle");
// import('hardhat/config').HardhatUserConfig;

module.exports = {
  solidity: "0.8.17",
  defaultNetwork: "goerli",
  networks: {
    hardhat: {},
    goerli: {
      url: "https://goerli.infura.io/v3/688f580d57964a7691abdab1992695af",
      accounts: ["b607b7c41a4709af49d8bccb86c70084dbfdf70a3b67b0c51070a25d990ccaab"]
    }
  },
  paths: {
    sources: "./contracts",
    tests: "./test",
    cache: "./cache",
    artifacts: "./artifacts"
  },
};
task("accounts" , "Prints the list of accounts" , async(taskArgs , hre) => {
  const accounts = await hre.ethers.getSigners();

  for (const account of accounts) {
    console.log(account);
    console.log(account.address ,":", ethers.utils.formatEther(await account.getBalance())) ;
  }
});
