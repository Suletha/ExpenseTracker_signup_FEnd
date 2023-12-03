// signup.js
document.querySelector('.signup.form .button').addEventListener('click', async function(event) {
    event.preventDefault();

    const signupForm = document.getElementById('signup');
    const signupDetails = {
        name: signupForm.name.value,
        email: signupForm.email.value,
        password: signupForm.password.value,
        confirm_password: signupForm['confirm-password'].value // Accessing field with hyphenated name
    };

    try {
        const response = await axios.post('http://localhost:3000/user/signup', signupDetails);

        if (response.status === 201) {
            // Signup successful, perform actions like redirecting to login page or showing a success message
            console.log('Signup successful');
            window.location.href = 'login.html'; // Redirect to login page after successful signup
        } else {
            throw new Error('Signup failed');
        }
    } catch (error) {
        console.error('Error during signup:', error);
        // Display an error message to the user or handle the error appropriately
    }
});
