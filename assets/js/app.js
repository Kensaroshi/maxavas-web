function show(id) {
  document.querySelectorAll('.panel').forEach(p => p.classList.add('hidden'));
  document.getElementById(id).classList.remove('hidden');

  document.querySelectorAll('.sidebar button').forEach(b => b.classList.remove('active'));
  event.target.classList.add('active');
}

function logout() {
  alert("Session ended");
}
