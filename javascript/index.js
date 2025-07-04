let hamburger = document.querySelector('.hamburger');
let navLinks = document.querySelector('.nav-links');
let hamChecker = false;
let pages = document.querySelectorAll('.pages');



hamburger.addEventListener('click', (e)=>{
    if (hamChecker == false) {
        hamburger.style.transform = "rotate(-180deg)";
        navLinks.style.transform = 'translateX(0)';
        hamChecker = true;
    }
    else{
        hamburger.style.transform = "rotate(360deg)";
        navLinks.style.transform = 'translateX(100vw)';
        hamChecker = false;
    }
})


pages.forEach((page)=>{
    let activePage = page.getAttribute('href');
    let url = window.location.pathname;
    if (activePage == window.location.pathname) {
        page.style.color = '#CBEA7B';
    }
})