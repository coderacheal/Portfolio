const hamburger = document.querySelector('.hamburger');
const hamburgerX = document.querySelector('.hamburger-X');
const  navUl = document.querySelector('.nav-ul');
const navLinks = document.querySelectorAll('.nav-items-a');
const widthOf = document.querySelector('.mobile-nav');

let mywidth = widthOf.style.width;
if (mywidth > '200px') {
    console.log(true);
}

hamburger.addEventListener("click", () => {
    const menuItems = navUl.classList.toggle('active');
    const togglebtn = hamburger.classList.toggle('active');
    
    if (togglebtn && menuItems) {
        hamburger.style.display ='none';
        hamburgerX.style.display = 'block';
        navUl.style.display = 'flex';
        hamburgerX.classList.toggle('active')
    }

    else if (widthOf.style.width >= '768px') {
        hamburger.classList.toggle('active');
        hamburgerX.classList.toggle('active');
        hamburger.style.display = 'none';
        hamburgerX.style.display = 'none';
    }
})

hamburgerX.addEventListener('click', () => {
    const togglebtnX = hamburgerX.classList.toggle('active');
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
console.log(widthOf)


navLinks.forEach(item => item.addEventListener("click", () => {
    if (widthOf.style.width <= '768px') {
        navUl.style.display = 'none'
        hamburger.classList.remove("active");
        hamburgerX.classList.remove("active");
        navUl.classList.remove('active');
        hamburger.style.display ='block';
        hamburgerX.style.display = 'none';
    }
    
    
}))


