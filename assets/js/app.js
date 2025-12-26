function show(id, el) {
  document.querySelectorAll('.panel').forEach(p => p.classList.add('hidden'));
  document.getElementById(id).classList.remove('hidden');

  document.querySelectorAll('.sidebar button').forEach(b => b.classList.remove('active'));
  el.classList.add('active');
}

function logout() {
  location.reload();
}

function exportPDF() {
  alert("Statement exported successfully.");
}
