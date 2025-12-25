function login() {
  localStorage.setItem("loggedIn", "true");
  window.location.href = "index.html";
}

function logout() {
  localStorage.removeItem("loggedIn");
  window.location.href = "login.html";
}
