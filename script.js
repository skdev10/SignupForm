

document.getElementById('signupForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent the form from submitting and refreshing the page
  
    // Get form data
    const username = document.getElementById('username').value;
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    const confirmPassword = document.getElementById('confirmPassword').value;
  
    // Check if passwords match
    if (password !== confirmPassword) {
      Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: 'Passwords do not match!',
      });
      return;
    }
  
    // Create a user object
    const userData = {
      username: username,
      email: email,
      password: password
    };
  
    // Store user data in localStorage
    localStorage.setItem('user', JSON.stringify(userData));
  
    // Clear the form fields
    document.getElementById('signupForm').reset();
  
    // Show success message using SweetAlert
    Swal.fire({
      icon: 'success',
      title: 'Sign up successful!',
      text: 'You have successfully signed up.',
    });
  });
  