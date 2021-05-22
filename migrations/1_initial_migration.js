const Pension = artifacts.require("Pension");

module.exports = function (deployer) {
  deployer.deploy(Pension);
};
