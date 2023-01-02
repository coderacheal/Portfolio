const hamburger = document.querySelector('.hamburger');
const  navUl = document.querySelector('.nav-ul');




hamburger.addEventListener("click", () => {
    const togglebtn = hamburger.classList.toggle('active');
    const menuItems = navUl.classList.toggle('active');
    if (togglebtn && menuItems) {
        navUl.style.display = 'flex';
        // console.log(true)
    }

    else {
        navUl.style.display = 'none';
        // console.log(false)
    }
    
   
})

// hamburger.addEventListener("click", () => {
//     if
// })

// document.querySelectorAll('.nav-items-a').forEach(n => n.addEventListener("click", () => {
//     hamburger.classList.remove("active");
//     navUl.classList.remove("active");
// }))



console.log(navUl.style.display);