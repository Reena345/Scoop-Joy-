 
    const signupForm = document.getElementById("signupForm");

    signupForm.addEventListener("submit", function (e) {
      e.preventDefault();

      const email = document.getElementById("signupEmail").value;
      const password = document.getElementById("signupPassword").value;

      localStorage.setItem("signupEmail", email);
      localStorage.setItem("signupPassword", password);

      alert("Signup successful 🎉 Please login now!");
      window.location.href = "login.html";
    });
