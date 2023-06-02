// const Lottery = artifacts.require("./Lottery.sol");
// const IERC20 = artifacts.require("./IERC20.sol");
// const IUniswapV2Router = artifacts.require("./IUniswapV2Router.sol");
const TestUniswap = artifacts.require("./TestUniswap.sol");

module.exports = function (deployer) {
  // deployer.deploy(Lottery);
  // deployer.deploy(IERC20);
  // deployer.deploy(IUniswapV2Router);
  deployer.deploy(TestUniswap);
};
