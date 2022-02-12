document.getElementById('login-submit').addEventListener('click', function(){
    let emailFild = document.getElementById('user-email');
    let userEmail = emailFild.value;
    // get user password
    let passwordFild = document.getElementById('user-password');
    let userPassword = passwordFild.value;
    if(userEmail == 'sobuj@gmail.com' && userPassword == 12345){
        window.location.href = 'banking.html';
    }
    else{
        console.log('srroy sir your information not valid')
    }
})






let deposite_section=document.getElementById('deposite-btn').addEventListener('click',function(){
    let depositeText=document.getElementById('inputFildDeposite');
    let depositeAmaunt=parseFloat(depositeText.value);
    
    let depositAmaunt=document.getElementById('dpositeAmaunt');
    let priviusAmaunt= parseFloat(depositAmaunt.innerText);
    
    let totalDeposite=priviusAmaunt+depositeAmaunt;
    depositAmaunt.innerText= totalDeposite;
    
    
    let beforBlance=document.getElementById('priviusBlance');
    let totalMoney=parseFloat(beforBlance.innerText);
    let updateMoney=totalMoney+depositeAmaunt;
    beforBlance.innerText=updateMoney;
    depositeText.value='';
    
    
    })
    
    
    
    // draw section desine here
    let draw=document.getElementById('draw-btn').addEventListener('click', function (){
    
    let numberText=document.getElementById('inputFild');
    let inputText=numberText.value;
    let amaunt=parseFloat(inputText);
    console.log(amaunt);
    
    let priviusWidra=document.getElementById('priviusAmaunt');
    let privisTotal=priviusWidra.innerText;
    let cllacAmaunt=parseFloat(privisTotal)
    let total_amount=cllacAmaunt+amaunt;
    priviusWidra.innerText=total_amount;
    
    
    let priviousBlance=document.getElementById('priviusBlance');
    let totalMoneyText=priviousBlance.innerText;
    let totalMoneyAccount=parseFloat(totalMoneyText);
    let upDateBlance=totalMoneyAccount-amaunt;
    priviousBlance.innerText=upDateBlance;
    numberText.value='';