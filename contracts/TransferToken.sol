//SPDX-License-Identifier: MIT

pragma solidity ^0.8.17;
import "hardhat/console.sol";

contract TransferEther {

    address public owner ;
    event Transaction(address indexed _from, address indexed _to, uint256 indexed _value);
    constructor() {
        owner = msg.sender;
    }

    function showOwner() public view  returns (address) {

        return owner;
        
    }

    function transferTo(address payable _to) public payable returns (bool success) {

       
        require(msg.value>0,"Value must be greater than 0");
        

        _to.transfer(msg.value);
        emit Transaction(msg.sender,_to,msg.value);

        success = true;


        
    }

    function getBalance(address _account) public view returns(uint256) {

        console.log("This is the address %s" , _account);
        return address(_account).balance;
    }
}