const correctUsername = "julian 14";
const correctPassword = "julian14";

function authenticate() {
    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;
    const message = document.getElementById("auth-message");

    if (username === correctUsername && password === correctPassword) {
        document.querySelector(".auth-form").classList.add("hidden");
        document.querySelector(".password-generator").classList.remove("hidden");
        message.textContent = "";
    } else {
        message.textContent = "Usuario o contraseña incorrectos";
    }
}

function generatePassword() {
    const length = 12;
    const upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    const lowerCase = "abcdefghijklmnopqrstuvwxyz";
    const numbers = "0123456789";
    const specialChars = "!@#$%^&*()_+[]{}|;:',.<>?/";
    const allChars = upperCase + lowerCase + numbers + specialChars;
    
    let password = "";
    password += upperCase.charAt(Math.floor(Math.random() * upperCase.length));
    password += lowerCase.charAt(Math.floor(Math.random() * lowerCase.length));
    password += numbers.charAt(Math.floor(Math.random() * numbers.length));
    password += specialChars.charAt(Math.floor(Math.random() * specialChars.length));
    
    for (let i = 4; i < length; i++) {
        password += allChars.charAt(Math.floor(Math.random() * allChars.length));
    }
    
    password = password.split('').sort(() => Math.random() - 0.5).join('');
    
    document.getElementById("generated-password").value = password;
}

function copyPassword() {
    const passwordField = document.getElementById("generated-password");
    passwordField.select();
    document.execCommand("copy");
}
