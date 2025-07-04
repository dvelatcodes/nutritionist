let hamburger = document.querySelector('.hamburger');
let navLinks = document.querySelector('.navigation-container');
let hamChecker = false;
let pages = document.querySelectorAll('.pages');
let header = document.querySelector('header');



// function to toggle the nav screens for mobile view
hamburger.addEventListener('click', (e)=>{
    if (hamChecker == false) {
        hamburger.style.transform = "rotate(-180deg)";
        navLinks.style.right = '0';
        hamChecker = true;
    }
    else{
        hamburger.style.transform = "rotate(360deg)";
        navLinks.style.right = '-100vw';
        hamChecker = false;
    }
})



// function to showcase active navigation link
pages.forEach((page)=>{
    let activePage = page.getAttribute('href');
    let url = window.location.pathname;
    if (activePage == window.location.pathname) {
        page.style.color = '#CBEA7B';
    }
})