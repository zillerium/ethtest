// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

contract NameRegistry {
    // Mapping to store the association between Ethereum addresses and names
    mapping(address => string) public addressToName;
    
    // Mapping to check if an address has already registered a name
    mapping(address => bool) public isRegistered;
    
    // Event to log the registration of a new name
    event NameRegistered(address indexed ethAddress, string name);

    // Function to register a name with an Ethereum address
    function registerName(string memory name) public returns (uint) {
        // Check if the name is not empty
        if (bytes(name).length == 0) {
            // Return code 404 for name not specified
            return 404;
        }
        
        // Check if the address is already registered
        if (isRegistered[msg.sender]) {
            // Return code 811 for duplicate attempt
            return 811;
        }
        
        addressToName[msg.sender] = name;
        isRegistered[msg.sender] = true;
        
        emit NameRegistered(msg.sender, name);
        
        // Return code 200 for success
        return 200;
    }
    
    // Function to fetch the name associated with an Ethereum address
    function getName(address userAddress) public view returns (string memory) {
        if (isRegistered[userAddress]) {
            return addressToName[userAddress];
        } else {
            return "not found";
        }
    }
}

