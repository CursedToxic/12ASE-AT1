document.getElementById("userSubmit").addEventListener("click", function () {
    // Getting input values
    const username = document.getElementById("userInput").value.trim();
    const email = document.getElementById("userEmail").value.trim();
    const dob = document.getElementById("userDOB").value.trim();
    const password = document.getElementById("userPassword").value.trim();

    // Error elements
    const userErr = document.getElementById("userError");
    const emailErr = document.getElementById("emailError");
    const dobErr = document.getElementById("dobError");
    const passErr = document.getElementById("passwordError");

    // Clear previous errors
    userErr.textContent = "";
    emailErr.textContent = "";
    dobErr.textContent = "";
    passErr.textContent = "";

    let valid = true;

    // Email validation
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!emailPattern.test(email)) {
        emailErr.textContent = "Enter a valid email address.";
        valid = false;
    }

    // Password validation (8+ characters, alphanumeric)
    const passwordPattern = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/;

    if (!passwordPattern.test(password)) {
        passErr.textContent = "Must be 8+ characters and contain letters & numbers.";
        valid = false;
    }

    // Date validation
    const dobDate = new Date(dob);
    const today = new Date();

    if (isNaN(dobDate.getTime())) {
        dobErr.textContent = "Enter a valid date.";
        valid = false;
    } else if (dobDate > today) {
        dobErr.textContent = "Date of birth cannot be in the future.";
        valid = false;
    }

    // Optional: Username check (not specified but often required)
    if (username.length === 0) {
        userErr.textContent = "Username cannot be empty.";
        valid = false;
    }

    if (valid) {
        alert("Login successful!");
    }
});
