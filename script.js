const generateBtn = document.getElementById('generate-btn');
const copyBtn = document.getElementById('copy-btn');
const passwordField = document.getElementById('password');
const lengthInput = document.getElementById('length');
const lowercaseCheckbox = document.getElementById('lowercase');
const uppercaseCheckbox = document.getElementById('uppercase');
const numbersCheckbox = document.getElementById('numbers');
const specialCheckbox = document.getElementById('special');

const lowerChars = 'abcdefghijklmnopqrstuvwxyz';
const upperChars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
const numberChars = '0123456789';
const specialChars = '!@#$%^&*()_+[]{}|;:,.<>?';

function generatePassword() {
    let charSet = '';
    let password = '';

    if (lowercaseCheckbox.checked) charSet += lowerChars;
    if (uppercaseCheckbox.checked) charSet += upperChars;
    if (numbersCheckbox.checked) charSet += numberChars;
    if (specialCheckbox.checked) charSet += specialChars;

    const passwordLength = lengthInput.value;
    for (let i = 0; i < passwordLength; i++) {
        password += charSet.charAt(Math.floor(Math.random() * charSet.length));
    }

    passwordField.value = password;
    animatePassword();
}

function animatePassword() {
    passwordField.classList.add('animate');
    setTimeout(() => passwordField.classList.remove('animate'), 500);
}

function copyPassword() {
    passwordField.select();
    document.execCommand('copy');
    alert('Password copied to clipboard!');
}

generateBtn.addEventListener('click', generatePassword);
copyBtn.addEventListener('click', copyPassword);
