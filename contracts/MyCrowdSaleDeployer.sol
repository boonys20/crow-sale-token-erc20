// SDPX-License-Identifier: MIT
pragma solidity >0.5.0;

import "@openzeppelin/contracts/token/ERC20/ERC20Mintable.sol";
import "@openzeppelin/contracts/crowdsale/Crowdsale.sol";
import "./MyGoldToken.sol";
import "./CrowdSaleToken.sol";

contract MyCrowdSaleDeployer {
    
    constructor() public {

        // Create a mintable token
        ERC20Mintable token = new MyGoldToken();

        // create the crowdsale and tell it about the token
        Crowdsale crowdsale = new CrowdSaleToken(
            1,
            msg.sender,
            token
        );

        // transfer the minter role from this contract (the default)
        // to the crowsale, so it can mint tokens
        token.addMinter(address(crowdsale));
        token.renounceMinter();

    }


}
