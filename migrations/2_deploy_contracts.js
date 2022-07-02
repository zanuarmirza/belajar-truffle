const ConvertLib = artifacts.require("ConvertLib");
const MetaCoin = artifacts.require("MetaCoin");
const Concat = artifacts.require("ConcatString");
const VerifySignature = artifacts.require("VerifySignature");

module.exports = function(deployer) {
  deployer.deploy(MetaCoin);
  deployer.deploy(Concat);
  deployer.deploy(VerifySignature);
};
