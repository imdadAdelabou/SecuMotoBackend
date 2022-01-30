// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

contract MyTest {
    string mood = "imdad boss le boss";

    function getMood() public view returns(string memory) {
        return mood;
    }

    function setMood(string memory _value) public {
        mood = _value;
    }
}