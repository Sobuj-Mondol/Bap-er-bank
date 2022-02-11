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
});

document.getElementById('Withdraw-submit').addEventListener('click', function(){
    let WithdrawInput = document.getElementById('Withdraw-Amount');
    let WithdrawAmountText = WithdrawInput.value;
    console.log(WithdrawAmountText);
    // update Withdraw Total
    let WithdrawTotal = document.getElementById('Withdraw-total');
    let WithdrawTotalText = WithdrawTotal.innerText;
    WithdrawTotal.innerText = WithdrawTotalText + WithdrawAmountText;
    WithdrawInput.value = '';
})