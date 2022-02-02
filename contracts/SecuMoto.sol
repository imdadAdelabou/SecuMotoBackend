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

     struct Motorcycle {
        string chassId;
        /*--- image grey card .....*/
    }

    mapping(string => string[]) moto_users;
    mapping(string => User) users;
    mapping(string => Motorcycle) motors;
    mapping(string => string[]) user_motos;

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

    function createMoto(string memory _chassId, string memory _userCardId)public {
        Motorcycle memory myMoto = Motorcycle({
            chassId: _chassId
        });
        motors[_chassId] = myMoto;
        addMotoToUser(_userCardId, _chassId);
    }

    function getMoto(string memory _chassId) public view returns(Motorcycle memory) {
        return (motors[_chassId]);
    }

    function addMotoToUser(string memory _cardId, string memory _chassId) public{
        user_motos[_cardId].push(_chassId);
        moto_users[_chassId].push(_cardId);
    }

    function getMotosFromUser(string memory _userCardId) public view returns(string [] memory) {
        return (user_motos[_userCardId]);
    }
    
    function getUsersFromMoto(string memory _chassId)  public view returns(string [] memory) {
        return (moto_users[_chassId]);
    }
}