const hre = require("hardhat");

async function main() {
  const NAME = "AI MINT";
  const SYMBOL = "AIM";
  const COST = ethers.utils.parseUnits("0.002", "ether"); // 0.002 ETH

  const NFT = await hre.ethers.getContractFactory("NFT");
  const nft = await NFT.deploy(NAME, SYMBOL, COST);
  await nft.deployed();

  console.log(`Deployed NFT Contract at: ${nft.address}`);
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
