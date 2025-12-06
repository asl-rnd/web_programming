function goHome() { location.href = "index.html"; }

// Signup
function signup() {
    let user = {
        name: document.getElementById("regName").value,
        email: document.getElementById("regEmail").value,
        password: document.getElementById("regPassword").value
    };
    localStorage.setItem("user", JSON.stringify(user));
    document.getElementById("signupMsg").innerText = "Signup successful! You can now login.";
    setTimeout(() => { location.href = "login.html"; }, 2000);
}


// Login
function login() {
    let user = JSON.parse(localStorage.getItem("user"));
    let email = document.getElementById("loginEmail").value;
    let pass = document.getElementById("loginPassword").value;

    if (user && user.email === email && user.password === pass) {
        sessionStorage.setItem("loggedIn", "true");
        sessionStorage.setItem("currentUser", JSON.stringify(user));
        location.href = "dashboard.html";
    } else {
        document.getElementById("loginMsg").innerText = "Invalid email or password.";
    }
}

// Dashboard
window.onload = () => {
    if (location.pathname.includes("dashboard.html")) {
        let user = JSON.parse(localStorage.getItem("user"));
        if (user) {
            document.getElementById("userName").value = user.name;
            document.getElementById("userEmail").value = user.email;
            document.getElementById("userPassword").value = user.password;
        }
    }
};

// Update Profile
function updateUser() {
    let user = {
        name: document.getElementById("userName").value,
        email: document.getElementById("userEmail").value,
        password: document.getElementById("userPassword").value
    }
    localStorage.setItem("user", JSON.stringify(user));
    document.getElementById("updateMsg").innerText = "Profile updated successfully.";
}

function logout() {
    sessionStorage.clear();
    location.href = "index.html";
}