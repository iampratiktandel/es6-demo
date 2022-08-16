const container = document.getElementById('container');
const menu = document.getElementById('menu');

localStorage.setItem('isAuthenticated', false);
// const isAuthenticated = localStorage.getItem('isAuthenticated', false);

function onLogin() {
  localStorage.setItem('isAuthenticated', true);
  container.classList.remove(['d-none']);
  menu.classList.add(['d-none']);
}

function onLogout() {
  localStorage.setItem('isAuthenticated', false);
  menu.classList.remove(['d-none']);
  container.classList.add(['d-none']);
}

sessionStorage.setItem('sessionExpiry', Math.random());