import React from 'react';

function BuyProcess() {
    const alertPrice = () => {
        let amount = document.getElementById("amount");
        if ((amount.value < 0.1 || amount.value > 1) && (amount.value !== "" || amount.value !== null || amount.value !== undefined)) {
            alert("Price must be between 0.1 and 1");
            amount.value = "";
        }
    }
    return(
        <div>
            <div class="amount-input-container">
                <input type="number" name="amount" placeholder="Enter your amount" id="amount"/>
            </div>
            <div class="buy-button-container">
                <button onClick={alertPrice}>Buy</button>
            </div>
        </div>
    )
}

export default BuyProcess;