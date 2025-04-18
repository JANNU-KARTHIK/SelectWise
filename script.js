function togglePassword() {
  const password = document.getElementById("password");
  const toggleIcon = document.getElementById("toggle");

  // Toggle password visibility
  if (password.type === "password") {
    password.type = "text"; // Show password
    toggleIcon.textContent = "🙈";
  } else {
    password.type = "password"; // Hide password
    toggleIcon.textContent = "👁️";
  }
}

// Handle login form submission and redirect to homepage
const loginForm = document.getElementById("loginForm");
if (loginForm) {
  loginForm.addEventListener("submit", function (event) {
    event.preventDefault();

    const username = document.querySelector('input[type="text"]').value;
    const password = document.getElementById("password").value;

    if (username && password) {
      window.location.href = "home.html"; // Redirect to homepage
    } else {
      alert("Please fill in both fields.");
    }
  });
}

// Handle forgot password form submission
const forgotForm = document.querySelector(".forgot-password-form");
if (forgotForm) {
  forgotForm.addEventListener("submit", function (event) {
    event.preventDefault();

    const email = document.getElementById("email").value;

    if (email) {
      document.getElementById("alertMessage").textContent =
        "A link to change your password has been sent to your email. Please click the link to reset your password.";
      document.getElementById("customAlert").style.display = "flex";
    } else {
      alert("Please enter a valid email address.");
    }
  });
}

// Close the custom alert modal
function closeAlert() {
  document.getElementById("customAlert").style.display = "none";
}
