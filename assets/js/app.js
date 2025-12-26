function login(){
  const u = user.value.trim();
  const p = pass.value.trim();
  if(u && p){
    sessionStorage.setItem('auth','1');
    location.href='dashboard.html';
  } else {
    error.textContent = 'Invalid credentials';
  }
}

function logout(){
  sessionStorage.removeItem('auth');
  location.href='index.html';
}

if(location.pathname.includes('dashboard')){
  if(!sessionStorage.getItem('auth')){
    location.href='index.html';
  }

  const el = document.querySelector('.amount');
  if(el){
    el.textContent = '$' + Math.floor(Math.random()*1200 + 4300);
  }
}
