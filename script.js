const hamburger = document.querySelector('.hamburger');
const  navUl = document.querySelector('.nav-ul');
const navLinks = document.querySelectorAll('.nav-items-a');


hamburger.addEventListener("click", () => {
    const togglebtn = hamburger.classList.toggle('active');
    const menuItems = navUl.classList.toggle('active');
    if (togglebtn && menuItems) {
        navUl.style.display = 'flex';
        console.log(true);
    }

    else {
        navUl.style.display = 'none';
        console.log(false);
    }
})

    navLinks.forEach(item => item.addEventListener("click", () => {
        // console.log(item)
        navUl.style.display = 'none'
        hamburger.classList.remove("active");
        navUl.classList.remove('active');
    }))