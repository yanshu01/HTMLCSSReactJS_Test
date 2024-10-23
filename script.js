document.addEventListener('DOMContentLoaded', function() {
    const registrationForm = document.getElementById('registration-form');
    registrationForm.addEventListener('submit', function(event) {
        event.preventDefault(); 

        const firstName = document.getElementById('first-name').value;
        const lastName = document.getElementById('last-name').value;
        const email = document.getElementById('email').value;
        const phoneNumber = document.getElementById('phone-number').value;
        const password = document.getElementById('password').value;

        // Basic validation
        if (!firstName || !lastName || !email || !phoneNumber || !password) {
            alert('Please fill in all fields.');
            return;
        }

        // Create an object in the specified format
        const userData = {
            first_name: firstName,
            last_name: lastName,
            phone_number: phoneNumber,
            email: email,
            password: password
        };

        console.log(userData); // Log the user data in the desired format

        // Display success message
        alert('Registration successful!');

        // Optionally, clear the form
        registrationForm.reset();
    });
});
