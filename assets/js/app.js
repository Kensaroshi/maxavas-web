let balance = 4982;
const balanceEl = document.getElementById("balance");
const activity = document.getElementById("activityList");

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

/* Smooth counter (Apple-style) */
function animateBalance(newValue) {
  const start = balance;
  const diff = newValue - start;
  let step = 0;

  const interval = setInterval(() => {
    step++;
    const value = Math.floor(start + diff * (step / 30));
    balanceEl.textContent = `$${value}`;
    if (step >= 30) {
      balance = newValue;
      clearInterval(interval);
    }
  }, 16);
}

/* Fake realtime transactions */
setInterval(() => {
  const delta = Math.floor(Math.random() * 400 + 80);
  const incoming = Math.random() > 0.4;
  const change = incoming ? delta : -delta;

  animateBalance(balance + change);

  const li = document.createElement("li");
  li.innerHTML = `
    <span>${incoming ? "Incoming transfer" : "Outgoing payment"}</span>
    <span>${incoming ? "+" : ""}${change}</span>
    <span>now</span>
  `;
  activity.prepend(li);

  if (activity.children.length > 6) activity.removeChild(activity.lastChild);
}, 4200);
