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