// pop-up menu mobile
const humburger = document.querySelector(".fa-bars");
const logo = document.querySelector(".logo");
const nav = document.querySelector("nav");
const closeBtn = document.querySelector(".close-btn");
const menuItems = document.querySelectorAll(".menu-item");
const menuMobile = document.querySelector(".menu-mobile");
const projectsSection = document.querySelector('modal');
const blur = document.querySelectorAll("#projects > div");

/* add the reset menu function */

function resetMobileMenu() {
  menuItems.forEach((item) => item.classList.remove("show"));
  nav.classList.remove("expand");
  logo.classList.remove("hidden");
  menuMobile.classList.remove("ul-list");
  humburger.style.display = "block";
  closeBtn.classList.remove(".close-btn");
}

/* Add event listner to humbergur button */

humburger.addEventListener("click", () => {
  menuItems.forEach((item) => item.classList.add("show"));
  nav.classList.add("expand");
  logo.classList.add("hidden");
  menuMobile.classList.add("ul-list");
  humburger.style.display = "none";
  closeBtn.classList.add("close-btn");

  menuItems.forEach((item) => item.addEventListener("click", resetMobileMenu));
});

/* Add th event listner to the close button */

closeBtn.addEventListener("click", resetMobileMenu);

/* project card section*/

const projects = [
  // {
  //   id: 'see-project-btn',
  //   title: 'Multi-Post Stories',
  //   image: 'images/placeholder1.png',
  //   description:
  //     "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown",
  //   technologies: ['css', 'html', 'bootstrap', 'Ruby'],
  //   live_link: 'https://medsonmoombe.github.io/My-Portfolio/',
  //   source_link: 'https://github.com/medsonmoombe/My-Portfolio',
  // },
  { mobileImage:"./images/img-1.png",
    id: "see-project-mobile",
    title: "Professional Art Printing Data",
    image: "images/desk-1.png",
    description1: "A daily selection of privately personalized reads no accounts or sign-ups required has been the industry's standard",
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown",
    technologies: ["html", "bootstrap", "Ruby"],
    live_link: "https://medsonmoombe.github.io/My-Portfolio/",
    source_link: "https://github.com/medsonmoombe/My-Portfolio",
  },
  { mobileImage:"./images/img-1.png",
    id: "see-project-mobile",
    title: "Data Dashboard Healthcare",
    image: "images/desk-3.png",
    description1: "A daily selection of privately personalized reads no accounts or sign-ups required has been the industry's standard",
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown",
    technologies: ["html", "bootstrap", "Ruby"],
    live_link: "https://medsonmoombe.github.io/My-Portfolio/",
    source_link: "https://github.com/medsonmoombe/My-Portfolio",
  },
  { mobileImage:"./images/img-1.png",
    id: "see-project-mobile",
    title: "Website Portfolio",
    image: "images/desk-3.png",
    description1: "A daily selection of privately personalized reads no accounts or sign-ups required has been the industry's standard",
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown",
    technologies: ["html", "bootstrap", "Ruby"],
    live_link: "https://medsonmoombe.github.io/My-Portfolio/",
    source_link: "https://github.com/medsonmoombe/My-Portfolio",
  },
  { mobileImage:"./images/img-1.png",
    id: "see-project-mobile",
    title: "Professional Art Printing Data",
    image: "images/desk-4.png",
    description1: "A daily selection of privately personalized reads no accounts or sign-ups required has been the industry's standard",
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown",
    technologies: ["html", "bootstrap", "Ruby"],
    live_link: "https://medsonmoombe.github.io/My-Portfolio/",
    source_link: "https://github.com/medsonmoombe/My-Portfolio",
  },
  { mobileImage:"./images/img-1.png",
    id: "see-project-mobile",
    title: "Data Dashboard Healthcare",
    image: "images/desk-1.png",
    description1: "A daily selection of privately personalized reads no accounts or sign-ups required has been the industry's standard",
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown",
    technologies: ["html", "bootstrap", "Ruby"],
    live_link: "https://medsonmoombe.github.io/My-Portfolio/",
    source_link: "https://github.com/medsonmoombe/My-Portfolio",
  },
  { mobileImage:"./images/img-1.png",
    id: "see-project-mobile",
    title: "Website Portfolio",
    image: "./images/desk-3.png",
    description1: "A daily selection of privately personalized reads no accounts or sign-ups required has been the industry's standard",
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown",
    technologies: ["html", "bootstrap", "Ruby"],
    live_link: "https://medsonmoombe.github.io/My-Portfolio/",
    source_link: "https://github.com/medsonmoombe/My-Portfolio",
  },
];

/*Creat popup div function*/

function createDiv(see_project_btn_id) {
  const div = document.createElement("div");
  const liveBtn = document.createElement("a");
  const sourceBtn = document.createElement("a");
  const exitBtn = document.createElement("button");
  const projectsTitle = document.createElement("h3");
  const projectsLanguages = document.createElement("div");
  const images = document.createElement("img");
  const paragraph = document.createElement("p");
  projectsTitle.innerText = `${projects[see_project_btn_id].title}`;
  projectsTitle.classList.toggle("popup-title");
  projectsLanguages.innerHTML = `<div>${projects[see_project_btn_id].technologies[0]}</div>
  <div>${projects[see_project_btn_id].technologies[1]}</div>
  <div>${projects[see_project_btn_id].technologies[2]}</div>`;
  projectsLanguages.classList.toggle("popup-languages");
  images.src = `${projects[see_project_btn_id].image}`;
  images.classList.toggle("popup-img");
  paragraph.innerText = `${projects[see_project_btn_id].description}`;
  paragraph.classList.toggle("popup-paragraph");

  liveBtn.textContent = "See Live";
  liveBtn.href = `${projects[see_project_btn_id].live_link}`;
  sourceBtn.textContent = "See Source";
  sourceBtn.href = `${projects[see_project_btn_id].source_link}`;
  liveBtn.classList.add("popup-btn", "live");
  sourceBtn.classList.add("popup-btn", "popup-margin", "source");
  exitBtn.style.backgroundImage = "URL('icons/Icon.png')";
  exitBtn.style.backgroundRepeat = "no-repeat";
  exitBtn.style.backgroundSize = "cover";
  exitBtn.classList.add("popup-exit");
  div.classList.toggle("popup");

  if (window.innerWidth < 768) {
    div.classList.toggle("mobile-width");
    projectsTitle.classList.toggle("mobile-title");
    projectsLanguages.classList.toggle("mobile-languages");
    images.classList.toggle("popup-mobile-img");
    paragraph.classList.toggle("popup-mobile-p");
    sourceBtn.classList.toggle("mobile-btn");
    liveBtn.classList.toggle("mobile-btn");
  }
  div.appendChild(projectsTitle);
  div.appendChild(projectsLanguages);
  div.appendChild(images);
  div.appendChild(paragraph);
  div.appendChild(liveBtn);
  div.appendChild(sourceBtn);
  div.appendChild(projectExitBtn);
  projectsSection.appendChild(div);
  console.log(projectsSection)

  exitBtn.addEventListener("click", () => {
    div.remove();
    document.body.classList.toggle("no-scroll");
    document.body.style.background = "#fff";
    blur.forEach((project) => project.classList.toggle("blur"));
  });
}

/*mini-project section*/

const grid = document.getElementById("cardSection");
let desktopVersion = document.createElement('div');
const mobileVersion = document.createElement('div');
grid.appendChild(desktopVersion);
grid.appendChild(mobileVersion);
function createProjectsContainer() {
  projects.forEach((project, index) => {
    desktopVersion = `
        <div class="desktop-card">
        <img
        src= ${project.image}
        alt="project"
        data-img="image" class="desk-img"
      />
      <h6 class="Profesional">${project.title}</h6>
      <p class="card-prg">
        ${project.description1}
      </p>

      <ul class="tech-list2">
        <li class="card-lst2">html</li>
        <li class="card-lst3">bootstrap</li>
        <li class="card-lst4">Ruby</li>
      </ul>

      <button type="button" id="${index}" class="btn-2">See Project</button>
      </div>
      </div>`;
      
        
        // grid += desktopVersion.innerHTML;
        // console.log(desktopVersion);

  });
    
     if(window.innerWidth < 768) {
    projects.forEach((project1, index) => {
      mobileVersion.innerHTML = `
      <div class="card-1">
          <img
          src= ${project1.mobileImage}
          alt="project"
          data-img="image" class="mobile-img"
        />
    
          <h6 class="Profesional">Profesional Art Printing Data</h6>
            <p class="card-prg">
              A daily selection of privately personalized reads; no accounts or
              sign-ups required. has been the industry's standard
            </p>

        <ul class="tech-list2">
          <li class="card-lst2">html</li>
          <li class="card-lst3">bootstrap</li>
          <li class="card-lst4">Ruby</li>
        </ul>
    <button type="button" class="btn-2" id="${index}">See Project</button>
  </div>`;
       mobileVersion.innerHTML += mobileVersion.innerHTML;
    });
  }


}
createProjectsContainer();
  
const workSectionDiv = document.getElementById("desktop-card");
const workSectionDiv1 = document.getElementById("cardOne");

