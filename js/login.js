document.getElementById('login-btn').addEventListener('click', function () {
    // get User email
    const emailField = document.getElementById('user-email');
    const userEmail = emailField.value;
    // get User Password
    const passwordField = document.getElementById('user-password');
    const userPassword = passwordField.value;
    // check email and password
    if (userEmail == 'saadmalik1238@gmail.com' && userPassword == 'nopassword') {
        window.location.href = 'banking.html';
    }
    else {
        console.log('Invalid User Name or Password');
    }
});
