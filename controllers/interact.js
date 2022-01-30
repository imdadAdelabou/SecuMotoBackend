require("dotenv").config()
const ethers = require("ethers");
const { network } = require("hardhat");
const API_KEY = process.env.ALCHEMY_API_KEY;
const RINKEBY_PRIVATE_KEY = process.env.RINKEBY_PRIVATE_KEY;
const CONTRACT_ADDRESS = process.env.CONTRACT_ADDRESS;
const SENDER_ADDRESS = process.env.SENDER_ADDRESS;
const abiHardHat = require("../artifacts/contracts/SecuMoto.sol/SecuMoto.json");

const alchemyProvider = new ethers.providers.AlchemyProvider("rinkeby", API_KEY);
const signer = new ethers.Wallet(RINKEBY_PRIVATE_KEY, alchemyProvider);
const secuMotoContract = new ethers.Contract(CONTRACT_ADDRESS, abiHardHat.abi, signer);

exports.createUser = async(firstName, lastName, cardId, birthDate, phoneNumber) => {
    try {
        const tx = await secuMotoContract.createUser(firstName, lastName, cardId, birthDate, phoneNumber);
        await tx.wait();
        console.log("Transaction  " + tx);
        return true;
    } catch (e) {
        console.log(e);
        throw e;

    }
}

exports.getUser = async(cardId) => {
    console.log("Get the current user");
    try {
        const user = await secuMotoContract.getUser(cardId);
        console.log("User Data ===>>>> " + user);
        return user;
    } catch (e) {
        throw e;
    }
}