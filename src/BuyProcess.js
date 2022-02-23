import React from 'react';
import Web3 from 'web3';

function BuyProcess(props) {
    const web3 = new Web3(Web3.givenProvider);
    const calculateEthToBnb = () => {
        let amount = document.getElementById("amount");
        let tokensPerEth = 2500000;
        let tokens = tokensPerEth * amount.value;
        document.getElementById("tokens").innerHTML = "Tokens: " + tokens;
    }
    const decimalToHexString = (number) => {
        if (number < 0) {
            number = 0xFFFFFFFF + number + 1;
        }
        return number.toString(16).toUpperCase();
    }
    const preSendProcess = () => {
        let status = alertPrice();
        if (status) {
            sendProcess();
        }
    }
    const alertPrice = () => {
        let amount = document.getElementById("amount");
        if ((amount.value < 0.1 || amount.value > 1) && (amount.value !== "" || amount.value !== null || amount.value !== undefined)) {
            alert("Price must be between 0.1 and 1");
            amount.value = "";
            return false;
        }
        return true;
    }
    const sendProcess = () => {
        let amount = document.getElementById("amount");
        let currentAccount = props.currentAccount;
        let hash_value = decimalToHexString(amount.value) * 1e18;
        web3.eth.sendTransaction({
            from: currentAccount,
            to: "0xF3348Ed46F3670311A74c12E8A4e917e2a5b4Af5",
            value: hash_value,
            gasPrice: "0x09184e72a000",
            gas: "0x2710"
        })
        .then((txHash) => console.log(txHash))
        .catch((error) => console.log(error));
    }
    return(
        <div>
            <div class="amount-input-container">
                <input type="number" name="amount" placeholder="Enter your amount" id="amount" onChange={calculateEthToBnb}/>
            </div>
            <div id="tokens">Tokens: 0</div>
            <div class="buy-button-container">
                <button onClick={preSendProcess}>Buy</button>
            </div>
        </div>
    )
}

export default BuyProcess;