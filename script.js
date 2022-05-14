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
    title: 'Multi-Post Stories',
    image: 'images/ImgPlaceholder.png',
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown",
    technologies: ['css', 'html', 'bootstrap', 'Ruby'],
    live_link: 'https://medsonmoombe.github.io/My-portfolio/',
    source_link: 'https://github.com/medsonmoombe/My-portfolio',
  },
  {
    id: 'mini-project-btn1',
    title: 'Professional Art Printing Data',
    image: 'images/ImgPlaceholder1.png',
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown",
    technologies: ['html', 'bootstrap', 'Ruby'],
    live_link: 'https://medsonmoombe.github.io/My-portfolio/',
    source_link: 'https://github.com/medsonmoombe/My-portfolio',
  },
  {
    id: 'mini-project-btn2',
    title: 'Data Dashboard Healthcare',
    image: 'images/todo.png',
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown",
    technologies: ['html', 'bootstrap', 'Ruby'],
    live_link: 'https://medsonmoombe.github.io/todo-list/dist/index.html',
    source_link: 'https://github.com/medsonmoombe/todo-list',
  },
  {
    id: 'mini-project-btn3',
    title: 'Website Portfolio',
    image: 'images/ImgPlaceholder3.png',
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown",
    technologies: ['html', 'bootstrap', 'Ruby'],
    live_link: 'https://medsonmoombe.github.io/My-portfolio/',
    source_link: 'https://github.com/medsonmoombe/My-portfolio',
  },
  {
    id: 'mini-project-btn4',
    title: 'Professional Art Printing Data',
    image: 'images/ImgPlaceholder1.png',
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown",
    technologies: ['html', 'bootstrap', 'Ruby'],
    live_link: 'https://medsonmoombe.github.io/My-portfolio/',
    source_link: 'https://github.com/medsonmoombe/My-portfolio',
  },
  {
    id: 'mini-project-btn5',
    title: 'Data Dashboard Healthcare',
    image: 'images/todo.png',
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown",
    technologies: ['html', 'bootstrap', 'Ruby'],
    live_link: 'https://medsonmoombe.github.io/My-portfolio/',
    source_link: 'https://medsonmoombe.github.io/todo-list/dist/index.html',
  },
  {
    id: 'mini-project-btn6',
    title: 'Website Portfolio',
    image: 'images/ImgPlaceholder3.png',
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown",
    technologies: ['html', 'bootstrap', 'Ruby'],
    live_link: 'https://medsonmoombe.github.io/My-portfolio/',
    source_link: 'https://github.com/medsonmoombe/My-portfolio',
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

let counter = 0;
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
