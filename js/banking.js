// handel deposite button event
document.getElementById('Diposite-submit').addEventListener('click', function(){
    let DipositeAmount = document.getElementById('Diposite-Amount');
    let DipositeInput = DipositeAmount.value;
    console.log(DipositeInput);
    // update balance
    let depositeTotal = document.getElementById('diposite-total');
    let currentDepositeAmount = +depositeTotal.innerText + +DipositeInput
    depositeTotal.innerText = +currentDepositeAmount;
    // Total Balance
    let BalanceTotal = document.getElementById('Balance-Total');
    let currentBalanceAmount = +BalanceTotal.innerText + +DipositeInput
    BalanceTotal.innerText = +currentBalanceAmount;
    // clear the deposite input fild
    DipositeAmount.value = '';
})

document.getElementById('Withdraw-submit').addEventListener('click', function(){
    let WithdrawInput = document.getElementById('Withdraw-Amount');
    let newWithdraw = WithdrawInput.value;
    let newWithdrawAmount = +newWithdraw;
    console.log(newWithdrawAmount);
    // set withdraw total
    let withdrawTotal = document.getElementById('Withdraw-total');
    let currentWithdraw = withdrawTotal.innerText;
    let currentWithdrawTotal = +currentWithdraw;
    let newWithdrawTotal = currentWithdrawTotal + newWithdrawAmount;
    withdrawTotal.innerText = newWithdrawTotal;
    // clear the Withdraw input file
    WithdrawInput.value = '';
})