// pop-up menu mobile
const humburger = document.querySelector('.fa-bars');
const logo = document.querySelector('.logo');
const nav = document.querySelector('nav');
const closeBtn = document.querySelector('.close-btn');
const menuItems = document.querySelectorAll('.menu-item');
const menuMobile = document.querySelector('.menu-mobile');

/* add the reset menu function */

function resetMobileMenu() {
  menuItems.forEach((item) => item.classList.remove('show'));
  nav.classList.remove('expand');
  logo.classList.remove('hidden');
  menuMobile.classList.remove('ul-list');
  humburger.style.display = 'block';
  closeBtn.classList.remove('.close-btn');
}

/* Add event listner to humbergur button */

humburger.addEventListener('click', () => {
  menuItems.forEach((item) => item.classList.add('show'));
  nav.classList.add('expand');
  logo.classList.add('hidden');
  menuMobile.classList.add('ul-list');
  humburger.style.display = 'none';
  closeBtn.classList.add('close-btn');

  menuItems.forEach((item) => item.addEventListener('click', resetMobileMenu));
});

/* Add th event listner to the close button */

closeBtn.addEventListener('click', resetMobileMenu);



/* project card section*/


const projects = [
  {
    id: 'see-project-btn',
    title: 'Multi-Post Stories',
    image: 'images/placeholder1.png',
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown",
    technologies: ['css', 'html', 'bootstrap', 'Ruby'],
    live_link: 'https://medsonmoombe.github.io/My-Portfolio/',
    source_link: 'https://github.com/medsonmoombe/My-Portfolio',
  },
  {
    id: 'see-project-mobile',
    title: 'Professional Art Printing Data',
    image: 'images/desk-1.png',
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown",
    technologies: ['html', 'bootstrap', 'Ruby'],
    live_link: 'https://medsonmoombe.github.io/My-Portfolio/',
    source_link: 'https://github.com/medsonmoombe/My-Portfolio',
  },
  {
    id: 'see-project-mobile',
    title: 'Data Dashboard Healthcare',
    image: 'images/desk-3.png',
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown",
    technologies: ['html', 'bootstrap', 'Ruby'],
    live_link: 'https://medsonmoombe.github.io/My-Portfolio/',
    source_link:'https://github.com/medsonmoombe/My-Portfolio',
  },
  {
    id: 'see-project-mobile',
    title: 'Website Portfolio',
    image: 'images/desk-3.png',
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown",
    technologies: ['html', 'bootstrap', 'Ruby'],
    live_link: 'https://medsonmoombe.github.io/My-Portfolio/',
    source_link: 'https://github.com/medsonmoombe/My-Portfolio',
  },
  {
    id: 'see-project-mobile',
    title: 'Professional Art Printing Data',
    image: 'images/desk-4.png',
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown",
    technologies: ['html', 'bootstrap', 'Ruby'],
    live_link: 'https://medsonmoombe.github.io/My-Portfolio/',
    source_link:'https://github.com/medsonmoombe/My-Portfolio',
  },
  {
    id: 'see-project-mobile',
    title: 'Data Dashboard Healthcare',
    image: 'images/desk-1.png',
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown",
    technologies: ['html', 'bootstrap', 'Ruby'],
    live_link: 'https://medsonmoombe.github.io/My-Portfolio/',
    source_link: 'https://github.com/medsonmoombe/My-Portfolio',
  },
  {
    id: 'see-project-mobile',
    title: 'Website Portfolio',
    image: 'images/desk-3.png',
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown",
    technologies: ['html', 'bootstrap', 'Ruby'],
    live_link: 'https://medsonmoombe.github.io/My-Portfolio/',
    source_link: 'https://github.com/medsonmoombe/My-Portfolio',
  },
];
