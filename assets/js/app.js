function login(){
  if(user.value && pass.value){
    sessionStorage.setItem('auth','1');
    location.href='dashboard.html';
  }else error.textContent='Invalid credentials';
}

function logout(){
  sessionStorage.clear();
  location.href='index.html';
}

function show(id){
  document.querySelectorAll('.panel')
    .forEach(p=>p.classList.add('hidden'));
  document.getElementById(id).classList.remove('hidden');
}

if(location.pathname.includes('dashboard')){
  if(!sessionStorage.getItem('auth')) location.href='index.html';
  let bal = Number(sessionStorage.getItem('bal')) ||
            Math.floor(Math.random()*1200+4300);
  bal += Math.floor(Math.random()*120-60);
  sessionStorage.setItem('bal',bal);
  document.querySelector('.amount').textContent='$'+bal;
}
