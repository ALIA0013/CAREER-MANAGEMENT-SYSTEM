document.getElementById("login-form").addEventListener("submit", function(event) {
  event.preventDefault();
  var username = document.getElementById("username").value;
  var password = document.getElementById("password").value;

  // Check if username and password are correct
  if (username === "admin" && password === "admin") {
    // Redirect to dashboard
    window.location.href = "DS.html";
  } else {
    // Display error message
    document.getElementById("error-msg").innerText = "Invalid username or password";
  }
});

