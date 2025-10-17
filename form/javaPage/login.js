
    const loginForm = document.getElementById("loginForm");

    loginForm.addEventListener("submit", function (e) {
      e.preventDefault();

      const email = document.getElementById("email").value;
      const password = document.getElementById("password").value;

      const storedEmail = localStorage.getItem("signupEmail");
      const storedPassword = localStorage.getItem("signupPassword");

      if (email === storedEmail && password === storedPassword) {
        alert("Login successful 🍦");
        window.location.href = "../index.html";
      } else {
        alert("Invalid email or password ❌");
      }
    });
