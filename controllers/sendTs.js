const { createAlchemyWeb3 } = require("@alch/alchemy-web3");

const alchWeb3 = createAlchemyWeb3("https://eth-rinkeby.alchemyapi.io/v2/m04kjilt2pPws-ussKPgZG5TPRouIZkA");

const senderAddress = "0x4E1a258687D67C5780219A614750B9FaFa744dd8";
const addressOfContract = "0x7B37FE34e48BDA6f438c7DCe07ea7321E6016A56";

const sendTx = async() => {
    const nonce = await alchWeb3.eth.getTransactionCount(senderAddress, 'latest');

    const transaction = {
        'to': senderAddress, // faucet address to return eth
        'value': 100,
        'gas': 30000,
        'maxFeePerGas': 10000000108,
        'nonce': nonce,
        'contractAddress': addressOfContract,
        // optional data field to send message or execute smart contract
    };

    const signedTx = await alchWeb3.eth.accounts.signTransaction(transaction, '6a094d6ae64eeb203e46e2ce2d74dde259a5bc9537c3fc2c5acd0ab7c32b23a7');
    alchWeb3.eth.sendSignedTransaction(signedTx.rawTransaction, function(error, hash) {
        if (!error) {
            console.log("🎉 The hash of your transaction is: ", hash, "\n Check Alchemy's Mempool to view the status of your transaction!");
        } else {
            console.log("❗Something went wrong while submitting your transaction:", error)
        }
    })
}

sendTx();