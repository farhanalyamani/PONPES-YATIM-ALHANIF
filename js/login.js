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
    e.preventDefault(); // ⛔ stop reload
    login();
  });

});

function login(){
  const role = document.getElementById("role").value;
  const pass = document.getElementById("password").value;

  if(role === "user"){
    sessionStorage.setItem("userLogin", "true");
    window.location.href = "pendaftaran.html";
  }
  else if(role === "admin"){
    if(pass === "admin2026"){
      sessionStorage.setItem("adminLogin", "true");
      window.location.href = "admin-psya-8f92.html";
    } else {
      alert("❌ Password admin salah!");
    }
  }
}
