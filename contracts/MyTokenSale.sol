// SPDX-License-Identifier: MIT
pragma solidity >0.5.0;

import "./CrowdSale.sol";
import "@openzeppelin/contracts/token/ERC20/IERC20.sol";

contract MyTokenSale is Crowdsale {

    constructor(uint256 rate, address payable wallet, IERC20 token) Crowdsale(rate, wallet, token) public {
        
    }

}