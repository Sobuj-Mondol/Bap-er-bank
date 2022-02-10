// handel deposite button event
document.getElementById('Diposite-submit').addEventListener('click', function(){
    let DipositeAmount = document.getElementById('Diposite-Amount');
    let DipositeInput = DipositeAmount.value;
    console.log(DipositeInput);

    let depositeTotal = document.getElementById('diposite-total');
    depositeTotal.innerText = DipositeInput;

    // clear the deposite input fild
    DipositeAmount.value = '';
})