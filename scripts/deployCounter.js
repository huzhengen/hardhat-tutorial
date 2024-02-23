const { ethers } = require("hardhat");

async function main () {

  const Counter = await ethers.getContractFactory("Counter");
  console.log('Counter: ',  Counter);
  
  const counter = await Counter.deploy();
  console.log('counter little: ',  counter);
  
   await counter.waitForDeployment();
  // await counter.deployed();

  // console.log("Counter address:", counter.address);
  console.log("Counter address:", await counter.getAddress());
}

main();