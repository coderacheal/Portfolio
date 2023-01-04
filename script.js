const hamburger = document.querySelector('.hamburger');
const hamburgerX = document.querySelector('.hamburger-X');
const  navUl = document.querySelector('.nav-ul');
const navLinks = document.querySelectorAll('.nav-items-a');
const projectBtn = document.querySelectorAll('.see-project-button');
const portfolioName = document.querySelectorAll('#portfolio-name')[0];


console.log(portfolioName)

hamburger.addEventListener("click", () => {
    const menuItems = navUl.classList.toggle('active');
    const togglebtn = hamburger.classList.toggle('active');
    
    if (togglebtn && menuItems) {
        portfolioName.style.display = 'none';
        hamburger.style.display ='none';
        hamburgerX.style.display = 'block';
        navUl.style.display = 'flex';
        hamburgerX.classList.toggle('active')
    }
})

hamburgerX.addEventListener('click', () => {
    const togglebtnX = hamburgerX.classList.toggle('active');
    portfolioName.style.display = 'flex';
    if (togglebtnX) {
        navUl.style.display = 'flex';
        
    }
    else {
        navUl.style.display = 'none';
        hamburger.style.display ='block';
        hamburgerX.style.display ='none';
        hamburger.classList.toggle('active')
        navUl.classList.toggle('active')
    }
   
})

navLinks.forEach(item => item.addEventListener("click", () => {
    portfolioName.style.display = 'flex';
    navUl.style.display = 'none'
    hamburger.classList.remove("active");
    hamburgerX.classList.remove("active");
    navUl.classList.remove('active');
    hamburger.style.display ='block';
    hamburgerX.style.display = 'none';
}))
