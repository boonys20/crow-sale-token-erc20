// Add openzeppelin test helpers 
const { BN, constants, expectEvent, expectRevert } = require("openzeppelin-test-helpers");
const { expect } = require("chai");

const MyGoldToken = artifacts.require("MyGoldToken");

/*
 * uncomment accounts to access the test accounts made available by the
 * Ethereum client
 * See docs: https://www.trufflesuite.com/docs/truffle/testing/writing-tests-in-javascript
 */
contract("MyGoldToken", async (accounts) => {

    it("all token should be in my account", async () => {
      let instance = await MyGoldToken.deployed();
      let totalSupply = await instance.totalSupply();
      expect(await instance.balanceOf(accounts[0])).to.be.a.bignumber.equal(totalSupply);
    });

    it("should have 2000000 tokens in my account", async () => {
      let instance = await MyGoldToken.deployed();
      let totalSupply = await instance.totalSupply();
      expect(totalSupply).to.be.a.bignumber.equal(new BN(2000000));
    });



});
