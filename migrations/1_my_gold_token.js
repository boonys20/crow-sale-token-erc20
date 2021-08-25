var MyGoldToken = artifacts.require("MyGoldToken");
var MyTokenSale = artifacts.require("MyTokenSale");

module.exports = async function(deployer) {
  let addr = await web3.eth.getAccounts();
  await deployer.deploy(MyGoldToken, 2000000);
  await deployer.deploy(MyTokenSale, 1, addr[0], MyGoldToken.address);
  let instance = await MyGoldToken.deployed();
  instance.transfer(MyTokenSale.address, 1000000);
};
