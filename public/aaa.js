document.addEventListener("DOMContentLoaded", () => {
  const signContainer = document.querySelector(".sign-container");
  const loginBox = document.querySelector(".login-box");
  const toggleSignup = document.getElementById("toggleSignup");
  const toggleLogin = document.getElementById("toggleLogin");

  // Toggle Signup/Login Views
  toggleSignup.addEventListener("click", (e) => {
      e.preventDefault();
      signContainer.classList.remove("hidden");
      loginBox.style.display = "none";
  });

  toggleLogin.addEventListener("click", (e) => {
      e.preventDefault();
      signContainer.classList.add("hidden");
      loginBox.style.display = "block";
  });

  // Login Form Submission
  document.getElementById("loginForm").addEventListener("submit", async function (e) {
      e.preventDefault();

      const email = document.getElementById("loginEmail").value;
      const password = document.getElementById("loginPassword").value;

      const response = await fetch("/login", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ email, password }),
      });

      const result = await response.json();
      alert(result.message);

      if (result.success) {
          window.location.href = result.redirectUrl || "/home";
      }
  });

  // Signup Form Submission
  document.getElementById("signupForm").addEventListener("submit", async function (e) {
      e.preventDefault();

      const email = document.getElementById("signupEmail").value;
      const password = document.getElementById("signupPassword").value;

      const response = await fetch("/signup", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ email, password }),
      });

      const result = await response.json();
      alert(result.message);

      if (result.success) {
          window.location.href = "/home";
      }
  });
});
