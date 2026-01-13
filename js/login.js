document.addEventListener("DOMContentLoaded", function () {

  const roleSelect = document.getElementById("role");
  const passwordGroup = document.getElementById("passwordGroup");
  const form = document.getElementById("loginForm");

  roleSelect.addEventListener("change", function () {
    if (this.value === "admin") {
      passwordGroup.style.display = "block";
    } else {
      passwordGroup.style.display = "none";
      document.getElementById("password").value = "";
    }
  });

  form.addEventListener("submit", function (e) {
  e.preventDefault();

  document.getElementById("btnText").classList.add("d-none");
  document.getElementById("btnLoading").classList.remove("d-none");

  setTimeout(() => {
    login();

    document.getElementById("btnText").classList.remove("d-none");
    document.getElementById("btnLoading").classList.add("d-none");
  }, 600);
});


});

function login(){
  const role = document.getElementById("role").value;
  const pass = document.getElementById("password").value;

  if(role === "user"){
    sessionStorage.setItem("userLogin", "true");
    window.location.href = "pendaftaran.html";
  }
    else if (role === "admin") {
    if (pass === "admin2026") {
      sessionStorage.setItem("adminLogin", "true");
      window.location.href = "admin-psya-8f92.html";
    } else {
      const errorMsg = document.getElementById("errorMsg");
      const card = document.querySelector(".login-card");

      errorMsg.classList.remove("d-none");

      card.classList.add("shake");
      setTimeout(() => card.classList.remove("shake"), 300);
    }
  }
}

function showError(msg){
  const box = document.getElementById("errorBox");
  box.textContent = msg;
  box.classList.remove("d-none");

  setTimeout(() => {
    box.classList.add("d-none");
  }, 3000);
}
const togglePassword = document.getElementById("togglePassword");
const passwordInput = document.getElementById("password");

togglePassword.addEventListener("click", () => {
  const type = passwordInput.type === "password" ? "text" : "password";
  passwordInput.type = type;

  togglePassword.innerHTML =
    type === "password"
      ? '<i class="fas fa-eye"></i>'
      : '<i class="fas fa-eye-slash"></i>';
});
