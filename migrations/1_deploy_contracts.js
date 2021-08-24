var MyGoldToken = artifacts.require("MyGoldToken");
var CrowSale = artifacts.require("CrowSale");

module.exports = function(deployer) {
  deployer.deploy(MyGoldToken, 100000000);
  deployer.deploy(CrowSale);
};
