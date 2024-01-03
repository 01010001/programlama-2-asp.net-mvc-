// Placeholder for user data (in a real application, you would use a server and database)
let users = [];

function signup() {
    const email = document.getElementById('signupEmail').value;
    const password = document.getElementById('signupPassword').value;

    // Check if the email is already taken
    if (users.some(user => user.email === email)) {
        alert('Email is already taken. Please use a different email.');
        return;
    }

    // Add the new user (in a real application, you would send this data to the server)
    users.push({ email, password });

    alert('Sign up successful! You can now login.');
}

function login() {
    const email = document.getElementById('loginEmail').value;
    const password = document.getElementById('loginPassword').value;

    // Check if the provided email and password match any user
    const user = users.find(user => user.email === email && user.password === password);

    if (user) {
        alert('Login successful!');
    } else {
        alert('Invalid email or password. Please try again.');
    }
}
