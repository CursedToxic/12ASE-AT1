let username;
let password;

document.getElementById('userSubmit').onclick = function(){
    username = document.getElementById('userInput').value;
    password = document.getElementById('userPassword');
    if (password.value == 'password' && username == 'admin'){
        window.alert('Login Successful');
        document.getElementById('userLogin').textContent = `Welcome, ${username}`;
    }
    else {
        window.alert('Test Input: Invalid Username or Password');
    }
}