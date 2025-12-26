function login(){
  const u = document.getElementById('user').value.trim();
  const p = document.getElementById('pass').value.trim();
  if(u && p){
    sessionStorage.setItem('auth','1');
    location.href='dashboard.html';
  }else{
    document.getElementById('error').textContent='Invalid credentials';
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
}
