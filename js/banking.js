function getInputValue(inputIn) {
    const inputField = document.getElementById(inputIn);
    const newAmountText = inputField.value;
    const newAmount = parseFloat(newAmountText);
    // clear the deposit input field
    inputField.value = '';

    return newAmount;
};

function updateTotalField(totalFieldId, newAmount) {
    // debugger;
    const depositTotal = document.getElementById(totalFieldId);
    const previousText = depositTotal.innerText;
    const previousAmount = parseFloat(previousText);
    const newTotal = previousAmount + newAmount;
    depositTotal.innerText = newTotal;
};

function getCurrentBalance() {
    const balanceTotal = document.getElementById('total-balance');
    const balanceTotalText = balanceTotal.innerText;
    const previousBalanceTotal = parseFloat(balanceTotalText);
    return previousBalanceTotal;
}

function updateBalance(newAmount, isAdd) {
    const balanceTotal = document.getElementById('total-balance');
    // const balanceTotalText = balanceTotal.innerText;
    // const previousBalanceTotal = parseFloat(balanceTotalText);
    const previousBalanceTotal = getCurrentBalance();
    if (isAdd == true) {
        const newBalanceTotal = previousBalanceTotal + newAmount;
        balanceTotal.innerText = newBalanceTotal;
    }
    else {
        const newBalanceTotal = previousBalanceTotal - newAmount;
        balanceTotal.innerText = newBalanceTotal;
    }
};

// deposit part
document.getElementById('deposit-btn').addEventListener('click', function () {

    const newDepositAmount = getInputValue('deposit-amount');

    if (newDepositAmount > 0) {
        updateTotalField('deposit-total-amount', newDepositAmount);

        updateBalance(newDepositAmount, true);
    }

});

// Withdraw part
document.getElementById('withdraw-btn').addEventListener('click', function () {

    const newWithdrawAmount = getInputValue('withdraw-amount');
    const currentBalance = getCurrentBalance();

    if (newWithdrawAmount > 0 && newWithdrawAmount < currentBalance) {
        updateTotalField('withdraw-total-amount', newWithdrawAmount);

        updateBalance(newWithdrawAmount, false);
    }
    if (newWithdrawAmount > currentBalance) {
        console.log('You Can not withdraw more than you have');
    }

});