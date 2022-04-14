// pop-up menu mobile
const humburger = document.querySelector(".fa-bars");
const logo = document.querySelector(".logo");
const nav = document.querySelector("nav");
const closeBtn = document.querySelector(".close-btn");
const menuItems = document.querySelectorAll(".menu-item");
const menuMobile = document.querySelector(".menu-mobile");
const projectsSection = document.getElementById('modal-sec');
const blurProjects = document.querySelectorAll('#modal-sec > div');
const grid = document.getElementById('cardSection');

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

  {
     mobileImage:"./images/img-1.png",
    id: "see-project-mobile",
    title: "Professional Art Printing Data",
    deskImg: "./images/placeholder1.png",
    image: "./images/desk-1.png",
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

function createDiv(buttonClass) {
let section = document.createElement("section");
section.setAttribute("class", "modal");
projectsSection.appendChild(section);
let topContent = document.createElement("div");
topContent.setAttribute("class", "top-content");
let modalHeader =document.createElement("h1");
modalHeader.innerText = `${projects[buttonClass].title}`;
modalHeader.setAttribute("class", "modal-heading");
let closeModalBtn =document.createElement("button");
closeModalBtn.setAttribute("id", "modal-btn");
closeModalBtn.innerText = "x";
topContent.appendChild(modalHeader);
topContent.appendChild(closeModalBtn);



/*ul section */
let modalList = document.createElement("ul");
modalList.setAttribute("class", "modal-list");

let modalListItems = document.createElement("li");
modalList.innerHTML = `<li class="modal-list1">${projects[0].technologies[0]}</li>
<li class="modal-list1">${projects[1].technologies[1]}</li>
<li class="modal-list1">${projects[2].technologies[2]}</li>`;
modalList.appendChild(modalListItems);

// /*modal content*/

let modalContent =document.createElement("div");
modalContent.setAttribute("class","modal-content");
let modalImg=document.createElement("img");
// modalImg.src = `${projects[buttonClass].image}`;
modalImg.setAttribute("class", "modal-img");
modalImg.src = `${projects[buttonClass].image}`;
modalContent.appendChild(modalImg);
let modalText =document.createElement("div");
modalContent.appendChild(modalText);


modalText.setAttribute("class", "modal-text");
let modalPrg =document.createElement("p");
modalText.appendChild(modalPrg);
modalPrg.setAttribute("class","modal-paragraph");
modalPrg.innerText = `${projects[buttonClass].description}`;
let followBtnDiv =document.createElement("div");
followBtnDiv.setAttribute("class", "follow-btn");
modalText.appendChild(followBtnDiv);


let followBtn =document.createElement("button");
followBtn.setAttribute("class", "md-btn");
followBtn.setAttribute("id", "see-live-btn");
followBtn.textContent = 'See Live';
followBtnDiv.appendChild(followBtn);
 let followBtn2 = document.createElement("button");
 followBtn2.setAttribute("class", "md-btn");
 followBtn2.setAttribute("id", "see-source-btn");
 followBtn2.textContent = 'See source';
 followBtnDiv.appendChild(followBtn2);

 
//  if (window.innerWidth < 768) {
//   div.classList.toggle('mobile-width');
//   projectsTitle.classList.toggle('mobile-title');
//   projectsLanguages.classList.toggle('mobile-languages');
//   images.classList.toggle('popup-mobile-img');
//   paragraph.classList.toggle('popup-mobile-p');
//   sourceBtn.classList.toggle('mobile-btn');
//   liveSiteBtn.classList.toggle('mobile-btn');
// }



section.appendChild(topContent);
section.appendChild(modalContent);
section.appendChild(modalList);

 closeModalBtn.addEventListener("click", () => {
    section.remove();
    document.body.classList.toggle("no-scroll");
    document.body.style.background = "#fff";
    blurProjects.forEach((project) => project.classList.toggle("blur"));
  });

}


/*mini-project section*/
  const deskSec = document.createElement('section');
      deskSec.setAttribute('class', 'desk-cards');
     
      grid.appendChild(deskSec);


  function createCards() {
     if(window.innerWidth > 768) {
     const deskDup =document.createElement('div');
      for(let i =0; i < projects.length; i++) {
          deskDup.innerHTML = `
          <div class="desktop-card2">
              <img
              src= ${projects[i].image}
              alt="project" class="mobile-img2"/>
           <h6 class="Profesional-first">${projects[i].title}<br>Healthcare</h6>
           <p class="card-prg">
           ${projects[i].description1}
           </p>
    
            <ul class="tech-list2">
              <li class="card-lst2">html</li>
              <li class="card-lst3">bootstrap</li>
              <li class="card-lst4">Ruby</li>
              <button class=" proj-btn btn-2">see project</button>
            </ul>
           
        </div>`;
      deskSec.innerHTML +=deskDup.innerHTML;
      
        };

      
  } else{
    for(let i = 0; i < projects.length; i++) {
     const mobile = document.createElement('div');
     const mobileVersion =document.createElement('div');
      mobileVersion.setAttribute('class', 'mob-card1');
      grid.appendChild(mobileVersion);
      mobile.innerHTML = `
      <div class="card-1">
          <img
          src= ${projects[i].mobileImage}
          alt="project" class="mobile-img" />
    
          <h6 class="Profesional">Profesional Art Printing Data</h6>
            <p class="card-prg">
              ${projects[i].description1}
            </p>

        <ul class="tech-list2">
          <li class="card-lst2">html</li>
          <li class="card-lst3">bootstrap</li>
          <li class="card-lst4">Ruby</li>
        </ul>
    <button type="button" class="btn-2 proj-btn">See Project</button>
  </div>`;
     mobileVersion.innerHTML +=mobile.innerHTML;
    };
     
  }
  

  }

createCards();  

const buttons = [...document.querySelectorAll('.proj-btn')];

for (let i = 0; i < buttons.length; i += 1) {
  buttons[i].addEventListener('click', () => {
    createDiv(i);
    document.body.style.background = 'black';
    document.body.classList.toggle('no-scroll');
    blurProjects.forEach((project) => project.classList.toggle('blur'));
  });
}


