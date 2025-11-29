let username;
let email;
let birthdate;
let password;

document.getElementById('userSubmit').onclick = function(event){
    username = document.getElementById("userInput").value;
    email = document.getElementById("emailInput").value;
    birthdate = document.getElementById("birthInput").value;
    password = document.getElementById("pinInput").value;

    const passwordIsValid = document.getElementById("pinInput").checkValidity();
    
    if(username && email && birthdate && passwordIsValid){
        document.getElementById("demo").innerText = 
        `Results:
        Username: ${username}
        Email: ${email}
        Date of Birth: ${birthdate}
        Password: ${password}`;
    } else {
        event.preventDefault();
    }
}

function togglePassword() {
    const input = document.getElementById("pinInput");
    const icon = document.getElementById("eyeIcon");

    if (input.type == "password") {
        input.type = "text";
        icon.setAttribute("name", "eye");     // open eye icon
    } else {
        input.type = "password";
        icon.setAttribute("name", "eye-off"); // closed eye icon
    }
}