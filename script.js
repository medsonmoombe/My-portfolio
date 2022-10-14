const mobileMenu = document.querySelector('#menu');
const listItem = document.querySelectorAll('.hidden-items');
const nav = document.querySelector('nav');
const navName = document.querySelector('#name');
const menuList = document.querySelector('nav ul');
const exitIcon = document.querySelector('.exit');
const envelope = document.querySelector('#envelope');
const projectsSection = document.querySelector('#projects');
const blurProjects = document.querySelectorAll('#projects > div');

/* Menu */

function resetMobileMenu() {
  listItem.forEach((item) => item.classList.remove('show'));
  nav.classList.remove('expand');
  navName.classList.remove('hidden');
  menuList.classList.remove('ul-list');
  mobileMenu.classList.remove('hidden');
  exitIcon.classList.remove('X');
  envelope.classList.remove('hidden');
}

mobileMenu.addEventListener('click', () => {
  listItem.forEach((item) => item.classList.add('show'));
  nav.classList.add('expand');
  navName.classList.add('hidden');
  menuList.classList.add('ul-list');
  mobileMenu.classList.add('hidden');
  exitIcon.classList.add('X');
  envelope.classList.add('hidden');

  listItem.forEach((item) => item.addEventListener('click', resetMobileMenu));
});

exitIcon.addEventListener('click', resetMobileMenu);

function resizeWindow() {
  if (window.innerWidth > 600) {
    resetMobileMenu();
  }
}

window.addEventListener('resize', resizeWindow);

/* Project section */

const projects = [
  {
    id: 'main-project-button',
    title: 'Musical Festival website',
    image: 'images/musical.png',
    description:
      "This a project about a music concert website i did during microverse end of html and css module one final capstone",
    technologies: ['css', 'html', 'bootstrap', 'javascript'],
    live_link: 'https://medsonmoombe.github.io/First-capstone-project/',
    source_link: 'https://github.com/medsonmoombe/First-capstone-project',
  },
  {
    id: 'mini-project-btn2',
    title: 'Leaderboard',
    image: 'images/lead.png',
    description:
      "This project is built with JavaScript, Webpack, HTML & CSS, Leaderboard api. When user clicks on Refresh button it hits the api and responds with the data, The user can also post data to the api",
    technologies: ['html', 'CSS', 'JavaScript'],
    live_link: 'https://medsonmoombe.github.io/leaderboad/dist/index.html',
    source_link: 'https://github.com/medsonmoombe/leaderboad',
  },
  {
    id: 'mini-project-btn3',
    title: 'Todo list',
    image: 'images/todo.png',
    description:
      "This is a website which allows users to add their to do tasks and mark them completed if they are done also allows users to delete, edit and clear all completed tasks.",
    technologies: ['html', 'css', 'JavaScript'],
    live_link: 'https://medsonmoombe.github.io/todo-list/dist/index.html',
    source_link: 'https://github.com/medsonmoombe/todo-list',
  },
  {
    id: 'mini-project-btn4',
    title: 'Awesome Books',
    image: 'images/awesome.png',
    description:
      "This a project i did at Microverse , a website which allows users to add books and also remove books.",
    technologies: ['html', 'CSS', 'JavaScript'],
    live_link: 'https://medsonmoombe.github.io/awesome-books-ES6-solo/',
    source_link: 'https://github.com/medsonmoombe/awesome-books-ES6-solo',
  },
  {
    id: 'mini-project-btn5',
    title: 'Leaderboard',
    image: 'images/ImgPlaceholder1.png',
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown",
    technologies: ['html', 'CSS', 'JavaScript'],
    live_link: 'https://medsonmoombe.github.io/My-portfolio/',
    source_link: 'https://github.com/medsonmoombe/My-portfolio',
  },
  {
    id: 'mini-project-btn6',
    title: 'Math magician',
    image: 'images/calc.png',
    description:
      "Math magicians is a website for all fans of mathematics. It is a Single Page App (SPA) that allows users to make simple calculations and read a random math-related quote.",
    technologies: ['CSS', 'JavaScript', 'React.js'],
    live_link: 'https://medsonmoombe.github.io/math_magician/',
    source_link: 'https://github.com/medsonmoombe/math_magician',
  },
  {
    id: 'mini-project-btn7',
    title: 'Movie website',
    image: 'images/js-group-project.png',
    description:
      "This our javascript capstone group project we did at microverse , it is a movie website which fetches movies from TVmaze API and displays them, we also used the microverse involvement API for addin…",
    technologies: ['html', 'Css', 'Javasript'],
    live_link: 'https://yayner2002.github.io/js-group-project',
    source_link: 'https://github.com/medsonmoombe/js-group-project',
  },
];

function createDiv(buttonId) {
  const div = document.createElement('div');
  const liveSiteBtn = document.createElement('a');
  const sourceBtn = document.createElement('a');
  const projectExitBtn = document.createElement('button');
  const projectsTitle = document.createElement('h3');
  const projectsLanguages = document.createElement('div');
  const images = document.createElement('img');
  const paragraph = document.createElement('p');
  projectsTitle.innerText = `${projects[buttonId].title}`;
  projectsTitle.classList.toggle('popup-title');
  projectsLanguages.innerHTML = `<div>${projects[buttonId].technologies[0]}</div>
  <div>${projects[buttonId].technologies[1]}</div>
  <div>${projects[buttonId].technologies[2]}</div>`;
  projectsLanguages.classList.toggle('popup-languages');
  images.src = `${projects[buttonId].image}`;
  images.classList.toggle('popup-img');
  paragraph.innerText = `${projects[buttonId].description}`;
  paragraph.classList.toggle('popup-paragraph');

  liveSiteBtn.textContent = 'See Live';
  liveSiteBtn.href = `${projects[buttonId].live_link}`;
  sourceBtn.textContent = 'See Source';
  sourceBtn.href = `${projects[buttonId].source_link}`;
  liveSiteBtn.classList.add('popup-btn', 'live');
  sourceBtn.classList.add('popup-btn', 'popup-margin', 'source');
  projectExitBtn.style.backgroundImage = "URL('icons/Icon.png')";
  projectExitBtn.style.backgroundRepeat = 'no-repeat';
  projectExitBtn.style.backgroundSize = 'cover';
  projectExitBtn.classList.add('popup-exit');
  div.classList.toggle('popup');

  if (window.innerWidth < 900) {
    div.classList.toggle('mobile-width');
    projectsTitle.classList.toggle('mobile-title');
    projectsLanguages.classList.toggle('mobile-languages');
    images.classList.toggle('popup-mobile-img');
    paragraph.classList.toggle('popup-mobile-p');
    sourceBtn.classList.toggle('mobile-btn');
    liveSiteBtn.classList.toggle('mobile-btn');
  }

  div.appendChild(projectsTitle);
  div.appendChild(projectsLanguages);
  div.appendChild(images);
  div.appendChild(paragraph);
  div.appendChild(liveSiteBtn);
  div.appendChild(sourceBtn);
  div.appendChild(projectExitBtn);
  projectsSection.appendChild(div);

  projectExitBtn.addEventListener('click', () => {
    div.remove();
    document.body.classList.toggle('no-scroll');
    document.body.style.background = '#fff';
    blurProjects.forEach((project) => project.classList.toggle('blur'));
  });
}

const grid = document.getElementById('projects-grid');
function createProjectsContainer() {
  for (let i = 1; i < projects.length; i += 1) {
    const projectContainer = document.createElement('div');
    projectContainer.setAttribute('class', 'mini-projects');
    projectContainer.setAttribute('id', `mini-project${i}`);
    grid.appendChild(projectContainer);
  }
}
createProjectsContainer();

const workSectionDiv = document.querySelectorAll('.mini-projects');

let counter = 1;
function createElements(project) {
  project.innerHTML = `
          <img
            src=${projects[counter].image}
            alt="project"
            class="hidden"
            data-img="image"
          />
          <h3 class="mini-h3" data-title="title">
          ${projects[counter].title}
          </h3>
          <p class="mini-p" data-p="paragraph">
            A daily selection of privately personalized reads; no accounts or
            sign-ups required. has been the industry's standard
          </p>
          <div class="mini-languages-container" data-language="language-list">
            <div class="mini-box"><span>html</span></div>
            <div class="mini-box"><span>bootstrap</span></div>
            <div class="mini-box"><span>Ruby</span></div>
          </div>
          <button
            type="button"
            class="btn project-btn"
            id="mini-project-btn${counter + 1}"
          >
            See Project
          </button>`;
  counter += 1;
}

workSectionDiv.forEach(createElements);

const buttons = [...document.querySelectorAll('.project-btn')];

for (let i = 0; i < buttons.length; i += 1) {
  buttons[i].addEventListener('click', () => {
    createDiv(i);
    document.body.style.background = 'black';
    document.body.classList.toggle('no-scroll');
    blurProjects.forEach((project) => project.classList.toggle('blur'));
  });
}
// form validation

const form = document.getElementById('contact-form');
const email = document.getElementById('email');
const lowerCaseRegex = /[A-Z]/;

form.addEventListener('submit', (e) => {
  if (lowerCaseRegex.test(email.value.trim())) {
    e.preventDefault();
    const errorMessage = document.querySelector('small');
    errorMessage.classList.remove('hidden');
  }
});
