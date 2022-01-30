const { ethers } = require("hardhat");

async function main() {
    const nftContrat = await ethers.getContractFactory("SecuMoto");

    const deployedNftContract = await nftContrat.deploy();

    console.log("Contract Address:", deployedNftContract.address);
    console.log("==>>>>>>>>");
    console.log(deployedNftContract);
}

main().then(() => process.exit(0)).catch((err) => {
    console.log(err);
    process.exit(1);
});