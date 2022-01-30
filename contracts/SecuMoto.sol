// SPDX-License-Identifier: MIT

pragma solidity ^0.8.0;

contract SecuMoto {
     struct User {
        string fisrtName;
        string lastName;
        string cardId;
        string birthDate;
        string phoneNumber;
    }

    mapping(string => User) users;

    function createUser(string memory _fisrtName, string memory _lastName, string memory _cardId,
        string memory _birthDate, string memory _phoneNumber) public {
        User memory myUser = User({
            fisrtName: _fisrtName,
            lastName: _lastName,
            cardId: _cardId,
            birthDate: _birthDate,
            phoneNumber: _phoneNumber
        });
        users[_cardId] = myUser;
    }
    
    function getUser(string memory _cardId) public view returns(User memory) {
        return (users[_cardId]);
    }
}