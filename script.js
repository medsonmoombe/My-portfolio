// pop-up menu mobile
const humburger = document.querySelector('.fa-bars');
const logo =document.querySelector('.logo');
const nav =document.querySelector('nav');
const closeBtn = document.querySelector('.close-btn');
const menuItems = document.querySelectorAll('.menu-item');
const menuMobile = document.querySelector('.menu-mobile');


/*add the reset menu function*/

function resetMobileMenu() {
    menuItems.forEach((item) => item.classList.remove('show'));
    nav.classList.remove('expand');
    logo.classList.remove('hidden');
    menuMobile.classList.remove('ul-list');
    humburger.style.display = 'block';
    closeBtn.classList.remove('.close-btn');
  }

  humburger.addEventListener('click', () => {
    menuItems.forEach((item) => item.classList.add('show'));
    nav.classList.add('expand');
    logo.classList.add('hidden');
    menuMobile.classList.add('ul-list');
    humburger.style.display = 'none';
    closeBtn.classList.add('close-btn');
  
    menuItems.forEach((item) => item.addEventListener('click', resetMobileMenu));
  });