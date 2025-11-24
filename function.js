let username;
let password;
let email;
let birthdate;

document.getElementById('userSubmit').onclick = function(){
    username = document.getElementById('userInput').value;
    email = document.getElementById('userEmail');
    password = document.getElementById('userPassword');
    if (password.value == 'password' && username == 'admin' && email.value == "test@example.com"){
        window.alert('Login Successful');
        document.getElementById('userLogin').textContent = `Welcome, ${username}`;
    }
    else {
        window.alert('Test Input: Invalid Details, Please Try Again.');
    }
}