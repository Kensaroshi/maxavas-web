/* Navigation */
function show(id) {
  document.querySelectorAll('.panel').forEach(p => p.classList.add('hidden'));
  document.getElementById(id).classList.remove('hidden');

  document.querySelectorAll('.sidebar button').forEach(b => b.classList.remove('active'));
  event.target.classList.add('active');
}

/* Theme */
function toggleTheme() {
  const html = document.documentElement;
  html.dataset.theme = html.dataset.theme === "dark" ? "light" : "dark";
}

/* Fake biometric unlock */
setTimeout(() => {
  unlock();
}, 1800);

function unlock() {
  document.getElementById("lock").classList.add("hidden");
  document.getElementById("app").classList.remove("hidden");
}

function lock() {
  document.getElementById("lock").classList.remove("hidden");
  document.getElementById("app").classList.add("hidden");
}

/* Fake transfer */
function confirmTransfer() {
  alert("Transfer completed successfully.\nReference: PRV-" + Math.floor(Math.random()*900000));
}
