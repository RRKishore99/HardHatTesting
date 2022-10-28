const {ethers} = require("hardhat");
const {expect, assert} = require("chai");
// const transferJson = require("artifacts/contracts/TransferToken.sol/TransferEther.json");
// const { Contract } = require("ethers");
// const { isCallTrace } = require("hardhat/internal/hardhat-network/stack-traces/message-trace");

describe("TransferToken", async function() {

    let data;
    let contractDetail;
    //if you wanted to use the same code for each it block use this
    beforeEach(async() => {
        const transferEther = await ethers.getContractFactory("TransferEther");
        const tranEther = await transferEther.deploy();
        await tranEther.deployed(); //This line keep it wait until the contract not get deployed

        data = tranEther;
        contractDetail = transferEther;

    });

    it("Should return the address of the Owner", async function() {
       

        // console.log("Contract details : ", await data.owner());
        

        // expect((await tranEther.showOwner()).to.equal());
        // expect(await data.showOwner());
        assert.equal(await data.showOwner() , `${await data.owner()}`);
        console.log(data.address);
        console.log(await data.showOwner());
    });

    it("Should Transfer the ethers to particular address", async function() {
        const addressOfUser = "0x8626f6940E2eb28930eFb4CeF49B2d1F2C9C1199";
       

        async function sendEther() {
         
            const transac = await data.transferTo(addressOfUser,{
                value : ethers.utils.parseEther('10')

            });
            await transac.wait();

        }
        sendEther();
        console.log(await data.getBalance(addressOfUser));
        // expect((ethers.utils.formatEther(await data.getBalance(addressOfUser))).to.equal(ethers.utils.formatEther(10010000000000000000000)));

        assert.equal(await data.getBalance(addressOfUser) , "10010000000000000000000");

       


    });

});