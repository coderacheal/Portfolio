const desktopModalView = document.querySelector('.desktop-project-pop-up');
const mobileModalView = document.querySelector('.project-pop-up');
const theProjectButtons = document.querySelectorAll('.see-project-button');
const desktopProjectPopupScript = document.querySelector('.desktop-project-pop-up');
const allDesktopButtons = document.querySelectorAll('.hover-button');
const allMobileButtons = document.querySelectorAll('.see-project-button');
const btns = Array.from(allDesktopButtons);


const displayWorkArray =[
{
    id: '1',
    nameOfProject: 'Multi-post Stories',
    desktopNameOfProject: 'Professional Printing Data More',
    mobileDescription: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essent',
    technologiesAndTools: ['html', 'bootstrap', 'Ruby on Rails'],
    DesktopDescription: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releax map lapora verita.',
    featuredImage: 'images/project-popup.png',
    liveDemo: 'https://coderacheal.github.io/',
    sourceCode: 'https://github.com/coderacheal/Portfolio',
  },
  {
    id: '2',
    nameOfProject: 'Data DashBoard',
    desktopNameOfProject: 'Data DashBoard Healthcare',
    mobileDescription: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essent',
    technologiesAndTools: ['html', 'bootstrap', 'Ruby on Rails'],
    DesktopDescription: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releax map lapora verita.',
    featuredImage: 'images/dashboard-popup.jpg',
    liveDemo: 'https://coderacheal.github.io/',
    sourceCode: 'https://github.com/coderacheal/Portfolio',
},
  {
    id: '3',
    nameOfProject: 'Website Portfolio',
    desktopNameOfProject: 'Website Portfolio',
    mobileDescription: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essent',
    technologiesAndTools: ['html', 'bootstrap', 'Ruby on Rails'],
    DesktopDescription: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releax map lapora verita.',
    featuredImage: 'images/website.jpg',
    liveDemo: 'https://coderacheal.github.io/',
    sourceCode: 'https://github.com/coderacheal/Portfolio',
},
  {
    id: '4',
    nameOfProject: 'Profesional Art Printing ',
    desktopNameOfProject: 'Professional Printing Data More',
    mobileDescription: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essent',
    technologiesAndTools: ['html', 'bootstrap', 'Ruby on Rails'],
    DesktopDescription: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releax map lapora verita.',
    featuredImage: 'images/printing-resize.jpg',
    liveDemo: 'https://coderacheal.github.io/',
    sourceCode: 'https://github.com/coderacheal/Portfolio'
},
  {
    id: '5',
    nameOfProject: 'Data DashBoard',
    desktopNameOfProject: 'Data DashBoard Healthcare',
    mobileDescription: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essent',
    technologiesAndTools: ['html', 'bootstrap', 'Ruby on Rails'],
    DesktopDescription: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releax map lapora verita.',
    featuredImage: 'images/dashboard-popup.jpg',
    liveDemo: 'https://coderacheal.github.io/',
    sourceCode: 'https://github.com/coderacheal/Portfolio',
},
  {
    id: '6',
    nameOfProject: 'Website Portfolio',
    desktopNameOfProject: 'Website Portfolio',
    mobileDescription: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essent',
    technologiesAndTools: ['html', 'bootstrap', 'Ruby on Rails'],
    DesktopDescription: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releax map lapora verita.',
    featuredImage: 'images/website.jpg',
    liveDemo: 'https://coderacheal.github.io/',
    sourceCode: 'https://github.com/coderacheal/Portfolio',
}
]


function desktop(index) {
    desktopProjectPopupScript.style.display = 'flex';
        desktopModalView.innerHTML = `
            <div  class="desktop-project-popup-floating">
                <div class="desktop-pop-up-title-div">
                    <div class="title-alignment-div">
                        <h1>${displayWorkArray[index].desktopNameOfProject}</h1>
                        <img class="desktop-hamburger-X-popup" src="images/Icon.png" alt="close icon">
                    </div>
                    <div class="desktop-popup-stack-buttons-div">
                        <ul class="desktop-popup-stack-buttons-ul">
                            <li class="desktop-project-1-buttons-li"><a href="#"><button class="desktop-popup-stack-buttons">${displayWorkArray[index].technologiesAndTools[0]}</button></a></li>
                            <li class="desktop-project-1-buttons-li"><a href="#"><button class="desktop-popup-stack-buttons">${displayWorkArray[index].technologiesAndTools[1]}</button></a></li>
                            <li class="desktop-project-1-buttons-li"><a href="#"><button class="desktop-popup-stack-buttons">${displayWorkArray[index].technologiesAndTools[2]}</button></a></li>
                        </ul>
                    </div>
                </div>
                <div class="desktop-image-and-description-div">
                    <img class='desktop-pop-up-image' src=${displayWorkArray[index].featuredImage} alt="project-screenshot">
                    <div>
                        <div class="desktop-popup-description-div">
                            <p class="desktop-popup-description">${displayWorkArray[index].DesktopDescription}</p>
                        </div>
                        <div class="desktop-popup-see-project-button-div">
                            <a href= ${displayWorkArray[index].liveDemo} class="desktop-popup-link"> <button class="desktop-popup-see-project-button">See Live <img src="images/Icon - Export.png" alt="link-icon"> </button></a>
                            <a href= ${displayWorkArray[index].sourceCode} class="desktop-popup-link"><button class="desktop-popup-see-project-button">See Source <img src="images/see-source.png" alt="github icon"></button></a>
                        </div>
                    </div>
                </div>
            </div>`
    }


function mobile(index) {
    // desktopProjectPopupScript.style.display = 'none';
    mobileModalView.style.display = 'flex';
    mobileModalView.innerHTML = `
    <div class="project-popup-floating">
        <div class="pop-up-title-div">
            <h2 class="popup title">${displayWorkArray[index].nameOfProject}</h2>
            <div class="hamburger-X-popup">
                <span class="bar-x-popup"></span>
                <span class="bar-x-popup"></span>
            </div>
        </div>
        <div class="popup-stack-buttons-div">
            <ul class="popup-stack-buttons-ul">
                <li class="project-1-buttons-li"><a href="#"><button class="popup-stack-buttons">${displayWorkArray[index].technologiesAndTools[0]}</button></a></li>
                <li class="project-1-buttons-li"><a href="#"><button class="popup-stack-buttons">${displayWorkArray[index].technologiesAndTools[1]}</button></a></li>
                <li class="project-1-buttons-li"><a href="#"><button class="popup-stack-buttons">${displayWorkArray[index].technologiesAndTools[2]}</button></a></li>
            </ul>
        </div>
        <img class='pop-up-image' src=${displayWorkArray[index].featuredImage} alt="project-screenshot">
        <div class="popup-description-div">
            <p class="popup-description" > ${displayWorkArray[index].mobileDescription} </p>
        </div>
        <div class="popup-see-project-button-div">
            <a href="${displayWorkArray[index].liveDemo}" class="popup-hyperlink-buttons"><button class="popup-see-project-button">See Live <img src="images/Icon - Export.png" alt="link-icon"></button></a>
            <a href="${displayWorkArray[index].sourceCode}" class="popup-hyperlink-buttons"><button class="popup-see-project-button">See Source <img src="images/see-source.png" alt="github icon"></button></a>
        </div>
    </div>
    `
    desktopProjectPopupScript.style.display = 'none';
}

document.addEventListener('click', (event) => {
    if (event.target.id === 'close-popUp') {
        desktopProjectPopupScript.style.display = 'none';
    }
  });


const desktopHamburgerXPopupScript = document.querySelector(".desktop-close-button-of-popup");

desktopHamburgerXPopupScript.addEventListener("click", () => {
    desktopProjectPopupScript.style.display = 'none';
  
})

mobileModalView.addEventListener("click", () => {
    mobileModalView.style.display = 'none';
  
})

for (let i = 0; i < btns.length; i += 1) {
    btns[i].addEventListener('click', () => {
      mobile(i);
    });
    btns[i].addEventListener('click', () => {
      desktop(i);
    });
  }

