// Admin and User credentials for demo
const adminCredentials = { username: "admin", password: "admin123" };
const userCredentials = { username: "user", password: "user123" };

document.getElementById("loginForm").addEventListener("submit", function (event) {
    event.preventDefault();  // Prevent the form from submitting normally

    // Get user input
    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;

    // Check credentials for admin
    if (username === adminCredentials.username && password === adminCredentials.password) {
        window.location.href = "../admin/admin.html";  // Redirect to admin page
    }
    // Check credentials for user
    else if (username === userCredentials.username && password === userCredentials.password) {
        window.location.href = "../user/home.html";  // Redirect to an empty user page
    } else {
        // Display error if the credentials do not match
        document.getElementById("error-message").textContent = "Invalid username or password. Please try again.";
    }
});
