// SPDX-License-Identifier: MIT
pragma solidity >0.5.0;

import "@openzeppelin/contracts/crowdsale/Crowdsale.sol";
import "@openzeppelin/contracts/crowdsale/emission/MintedCrowdsale.sol";

contract CrowdSaleToken is Crowdsale, MintedCrowdsale {
    constructor(
        uint256 rate, // rate in TKNbits
        address payable wallet,
        IERC20 token
    ) public MintedCrowdsale() Crowdsale(rate, wallet, token) {}
}
