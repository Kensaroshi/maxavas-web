/* Navigation */
function show(id) {
  document.querySelectorAll('.panel').forEach(p => p.classList.add('hidden'));
  const panel = document.getElementById(id);
  panel.classList.remove('hidden');

  document.querySelectorAll('.sidebar button')
    .forEach(b => b.classList.remove('active'));

  event.target.classList.add('active');
}

/* Theme */
function toggleTheme() {
  const html = document.documentElement;
  html.dataset.theme = html.dataset.theme === "dark" ? "light" : "dark";
}

/* Fake Face ID session */
let faceIdTimer = null;

function unlock() {
  document.getElementById("lock").classList.add("hidden");
  document.getElementById("app").classList.remove("hidden");
}

function lock() {
  document.getElementById("lock").classList.remove("hidden");
  document.getElementById("app").classList.add("hidden");
  startFaceIdScan();
}

function startFaceIdScan() {
  clearTimeout(faceIdTimer);
  faceIdTimer = setTimeout(() => {
    unlock();
  }, 2200);
}

/* Init */
startFaceIdScan();

/* Fake transfer confirmation */
function confirmTransfer() {
  const ref = "PRV-" + Math.floor(100000 + Math.random() * 900000);
  alert(
    "Transfer completed successfully.\n" +
    "Reference: " + ref + "\n" +
    "Status: Settled"
  );
}
