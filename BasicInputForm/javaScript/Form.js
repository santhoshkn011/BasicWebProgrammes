const text = document.querySelector('#text');
const textError = document.querySelector('.text-error');
text.addEventListener('input', function () {
    let nameRegex = RegExp('^[A-Z]{1}[a-zA-Z]{2,}$');
    if (nameRegex.test(text.value))
        textError.textContent = "";
    else textError.textContent = "Name is incorrect";
    });

const salary = document.querySelector('#salary');
const output = document.querySelector('.salary-output');
output.textContent = salary.value;
salary.addEventListener('input', function () {
output.textContent = salary.value;
        });

const email = document.querySelector('#email');
const emailError = document.querySelector('.email-error');
email.addEventListener('input', function () {
    let emailRegex = RegExp('^[a-zA-Z]+[a-zA-Z0-9]*[- . + _]?[a-zA-Z0-9]+[@]{1}[a-z0-9]+[.]{1}[a-z]+[.]?[a-z]+$');
    if (emailRegex.test(email.value))
        emailError.textContent = "";
    else emailError.textContent = "Incorrect Email Address.";
    });

const telephone = document.querySelector('#tel');
const telephoneError = document.querySelector('.tel-error');
telephone.addEventListener('input', function() {
        let telRegex = RegExp('^[1-9]{1,2}\\s{1}[0-9]{10}$');
        if (telRegex.test(telephone.value))
            telephoneError.textContent = "";
        else 
            telephoneError.textContent = "Incorrect Contact Details.";
    });

const password = document.querySelector('#pwd');
const passwordError = document.querySelector('.pwd-error');
password.addEventListener('input', function() {
    let passwordRegex = RegExp('^(?=.*[A-z])(?=.*[0-9])(?=.*[@#$%^&*()-+=])([a-zA-Z0-9@._-]).{8,}$')
    if (passwordRegex.test(password.value))
        passwordError.textContent = "";
     else
        passwordError.textContent = "Invalid Password";
    });

/*
Rule1 – minimum 8 Characters
Rule2 – Should have at least 1
Upper Case
Rule3 – Should have at least 1
numeric number in the password
Rule4 – Has exactly 1 Special
Character
- NOTE – All rules must be passed
*/