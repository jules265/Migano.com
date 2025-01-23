const loginForm = document.getElementById("loginForm");
const errorMessage = document.getElementById("errorMessage");

loginForm.addEventListener("submit", (e) => {
    e.preventDefault();

    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;

    // Retrieve user data from localStorage
    const userData = JSON.parse(localStorage.getItem("userData"));

    // Validate credentials
    if (userData && userData.email === email && userData.password === password) {
        alert("Login successful!");
        // Redirect to a dashboard or homepage
        window.location.href = "profile.html";
    } else {
        errorMessage.style.display = "block";
    }
});