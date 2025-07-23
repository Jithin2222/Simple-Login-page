const container = document.getElementById('container');
const registerBtn = document.getElementById('register');
const loginBtn = document.getElementById('login');

registerBtn.addEventListener('click', ()=>{
    container.classList.add('active');
});
loginBtn.addEventListener('click', ()=>{
    container.classList.remove('active');
});

document.addEventListener('DOMContentLoaded', function () {
    const signUpForm = document.getElementById('signUpForm');
    const signInForm = document.getElementById('signInForm');

    signUpForm.addEventListener('submit', function (event) {
        event.preventDefault();

        const formData = {
            name: document.getElementById('signUpName').value,
            email: document.getElementById('signUpEmail').value,
            password: document.getElementById('signUpPassword').value
        };

        fetch('http://localhost:3000/register', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(formData)
        })
        .then(response => response.json())
        .then(data => {
            console.log('Registration successful:', data.message);
            // Optionally handle success UI updates or redirection
        })
        .catch(error => {
            console.error('Error registering user:', error);
            // Handle error UI updates or display error message
        });
    });

    signInForm.addEventListener('submit', function (event) {
        event.preventDefault();

        const formData = {
            email: document.getElementById('signInEmail').value,
            password: document.getElementById('signInPassword').value
        };

        fetch('http://localhost:3000/login', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(formData)
        })
        .then(response => response.json())
        .then(data => {
            console.log('Login successful:', data.message);
            // Optionally handle success UI updates or redirection
        })
        .catch(error => {
            console.error('Error logging in:', error);
            // Handle error UI updates or display error message
        });
    });
});
