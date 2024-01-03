// var emailArray = [];
// var passwordArray = [];

var emailArray = JSON.parse(localStorage.getItem('emailArray')) || [];
var passwordArray = JSON.parse(localStorage.getItem('passwordArray')) || [];

// Rest of the existing code...

function register() {
    event.preventDefault();

    var email = document.getElementById("re").value;
    var password = document.getElementById("rp").value;
    var passwordRetype = document.getElementById("rrp").value;

    if (email === "") {
        alert("Email required.");
        return;
    } else if (password === "") {
        alert("Password required.");
        return;
    } else if (passwordRetype === "") {
        alert("Password required.");
        return;
    } else if (password !== passwordRetype) {
        alert("Password don't match retype your Password.");
        return;
    } else if (emailArray.indexOf(email) === -1) {
        emailArray.push(email);
        passwordArray.push(password);

        // Update localStorage with the new data
        localStorage.setItem('emailArray', JSON.stringify(emailArray));
        localStorage.setItem('passwordArray', JSON.stringify(passwordArray));

        alert(email + "  Thanks for registration. \nTry to login Now");

        document.getElementById("re").value = "";
        document.getElementById("rp").value = "";
        document.getElementById("rrp").value = "";
        window.location.href = 'http://localhost:5146/User/login';
    } else {
        alert(email + " is already registered.");
        return;
    }
}


var loginBox = document.getElementById("login");
var regBox = document.getElementById("register");

var loginTab = document.getElementById("lt");
var regTab = document.getElementById("rt");

function regTabFun() {
    event.preventDefault();

    regBox.style.visibility = "visible";
    loginBox.style.visibility = "hidden";

    regTab.style.backgroundColor = "rgb(12, 132, 189)";
    loginTab.style.backgroundColor = "rgba(11, 177, 224, 0.82)";
}

function loginTabFun() {
    event.preventDefault();

    regBox.style.visibility = "hidden";
    loginBox.style.visibility = "visible";

    loginTab.style.backgroundColor = "rgb(12, 132, 189)";
    regTab.style.backgroundColor = "rgba(11, 177, 224, 0.82)";
}

// Initialize emailArray and passwordArray with data from localStorage

// Rest of the existing code...

function login() {
    event.preventDefault();

    var email = document.getElementById("se").value;
    var password = document.getElementById("sp").value;

    if (emailArray.indexOf(email) === -1) {
        if (email === "") {
            alert("Email required.");
            return;
        }
        alert("Email does not exist.");
        return;
    }

    var index = emailArray.indexOf(email);

    if (passwordArray[index] !== password) {
        if (password === "") {
            alert("Password required.");
            return;
        }
        alert("Password does not match.");
        return;
    }

    alert(email + " you are logged in now. \nWelcome to our website.");

    document.getElementById("se").value = "";
    document.getElementById("sp").value = "";

    window.location.href = 'http://localhost:5146/';
}
