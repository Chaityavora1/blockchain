const hre = require("hardhat");
// deploy.js

async function main() {
  const MyContract = await ethers.getContractFactory("MyContract");
  const myContract = await upgrades.deployProxy(MyContract, [/* constructor arguments if any */]);
  await myContract.deployed();

  console.log("MyContract deployed to:", myContract.address);
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
