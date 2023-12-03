document.addEventListener('DOMContentLoaded', () => {
    document.querySelector('.login.form .button').addEventListener('click', async function(event) {
      event.preventDefault();
  
      const loginForm = document.getElementById('login');
      const loginDetails = {
        email: loginForm.email.value,
        password: loginForm.password.value
      };
  
      try {
        const response = await axios.post('http://localhost:3000/user/login', loginDetails);
  
        if (response.status === 200) {
          // Login successful, redirect or show a success message
          console.log('Login successful');
          window.location.href = '../ExpTrac/exp_feature.html'; // Redirect to dashboard after successful login
        } else {
          throw new Error('Login failed');
        }
      } catch (error) {
        console.log(JSON.stringify(err))
        document.body.innerHTML += `<div style="color:red;">${err.message} <div>`;
        // Display an error message to the user or handle the error appropriately
      }
    });
  });
  