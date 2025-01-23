const registerForm = document.getElementById("registerForm");
const errorMessage = document.getElementById("errorMessage");

registerForm.addEventListener("submit", (e) => {
    e.preventDefault();

    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;
    const confirmPassword = document.getElementById("confirmPassword").value;

    // Validate passwords match
    if (password !== confirmPassword) {
        errorMessage.style.display = "block";
        return;
    } else {
        errorMessage.style.display = "none";
    }

    // Save user data to localStorage
    const userData = { name, email, password };
    localStorage.setItem("userData", JSON.stringify(userData));

    // Redirect to login page
    window.location.href = "login.html";
});