function validateSignUpAndRedirect() {

    const firstName = document.querySelector('.input-field[placeholder="First Name"]').value.trim();
    const lastName = document.querySelector('.input-field[placeholder="Last Name"]').value.trim();
    const email = document.querySelector('.input-field[placeholder="Email"]').value.trim();
    const password = document.querySelector('.input-field[placeholder="Password"]').value.trim();
    const registerCheck = document.getElementById('register-check').checked;

    if (firstName === '' || lastName === '' || email === '' || password === '') {
        alert('Please fill in all fields.');
        return false;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!email.match(emailRegex)) {
        alert('Please enter a valid email address.');
        return false;
    }

    if (!registerCheck) {
        alert('Please agree to the terms and conditions.');
        return false;
    }
    window.location.href = "http://www.w3schools.com";
    alert("Helloo Ajeel")
    return true;
}


// Attach the validation and redirect function to the form's onsubmit event

const signUpForm = document.getElementById("signup-form");
if (signUpForm) {
    signUpForm.addEventListener('submit', function (event) {
        if (!validateSignUpAndRedirect()) {
            event.preventDefault();
        }

    });

}
console.log(signUpForm);
