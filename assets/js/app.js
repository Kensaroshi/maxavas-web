function show(id) {
  document.querySelectorAll('.panel').forEach(p => p.classList.add('hidden'));
  document.getElementById(id).classList.remove('hidden');

  document.querySelectorAll('.sidebar button').forEach(b => b.classList.remove('active'));
  event.target.classList.add('active');
}

function toggleTheme() {
  const html = document.documentElement;
  html.dataset.theme = html.dataset.theme === "dark" ? "light" : "dark";
}

/* Fake session */
function unlock() {
  document.getElementById("lock").classList.add("hidden");
  document.getElementById("app").classList.remove("hidden");
}

function lock() {
  document.getElementById("lock").classList.remove("hidden");
  document.getElementById("app").classList.add("hidden");
}
