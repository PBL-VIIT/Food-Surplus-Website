document.addEventListener('DOMContentLoaded', function() {
    const registrationForm = document.getElementById('registration-form');
    const loginForm = document.getElementById('login-form');

    registrationForm.addEventListener('submit', function(e) {
        e.preventDefault();
        // Implement registration logic here (e.g., send data to the backend).
        // You can use the Fetch API or libraries like Axios.
    });

    loginForm.addEventListener('submit', function(e) {
        e.preventDefault();
        // Implement login logic here (e.g., send data to the backend).
    });
});
