document.getElementById('sub-btn').addEventListener('click', function(){
    const inputEmail = document.getElementById('email-feild')
    const email= inputEmail.value;
 
    const inputPassword= document.getElementById('password-feild')
    const password = inputPassword.value;
    if(email === 'alisobuj124@gmail.com' && password === '12367'){
      window.location.href =  'section.html';
    }
     else if(email !== 'alisobuj124@gmail.com'){
        alert('invalide email');
    }
else{
    alert('invalide password');
}
    
})