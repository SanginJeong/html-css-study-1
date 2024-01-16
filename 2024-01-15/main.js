const hamburger = document.querySelector('.hamburger');
const nav_area = document.querySelector('.nav_area');

hamburger.addEventListener('click',()=>{
  nav_area.classList.toggle('active');
})