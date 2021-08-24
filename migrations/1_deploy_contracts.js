//var MyGoldToken = artifacts.require("MyGoldToken");
var MyCrowdSaleDeployer = artifacts.require("MyCrowdSaleDeployer");

module.exports = function(deployer) {
  //deployer.deploy(MyGoldToken, 100000000);
  deployer.deploy(MyCrowdSaleDeployer);
};
