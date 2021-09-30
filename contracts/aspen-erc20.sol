pragma solidity ^0.8.0;

import "./ERC20.sol";
import "./extensions/ERC20Capped.sol";



/**
 * @title SimpleToken
 * @dev Very simple ERC20 Token example, where all tokens are pre-assigned to the creator.
 * Note they can later distribute these tokens as they wish using `transfer` and other
 * `ERC20` functions.
 */
contract AspenToken is ERC20Capped {
    
   address public owner;
   
   
    modifier onlyOwner() {
    require(msg.sender == owner);
    _;
}

    /**
     * @dev Constructor that gives msg.sender all of existing tokens.
     */
    constructor () ERC20('Aspen','ASPEN')  ERC20Capped(45000000000000000000000000) {
        ERC20._mint(msg.sender, 15000000000000000000000000);
        owner = msg.sender;
    }
    
    function mintAspenTokens(address _to, uint256 _amount) public onlyOwner {
        _mint(_to,_amount);
    }
   
}