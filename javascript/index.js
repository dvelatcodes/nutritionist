let hamburger = document.querySelector('.hamburger');
let navLinks = document.querySelector('.navigation-container');
let hamChecker = false;
let pages = document.querySelectorAll('.page');
let body = document.querySelector('body');
let goUp = document.querySelector('.go-up');



// function to toggle the nav screens for mobile view
hamburger.addEventListener('click', (e) => {
    if (hamChecker == false) {
        hamburger.style.transform = "rotate(-180deg)";
        navLinks.style.right = '0';
        body.style.overflowY = 'hidden'
        hamChecker = true;
    }
    else {
        hamburger.style.transform = "rotate(360deg)";
        navLinks.style.right = '-100vw';
        body.style.overflowY = 'scroll'
        hamChecker = false;
    }
})



// function to showcase active navigation link
pages.forEach((page) => {
    let activePage = page.getAttribute('href');
    let url = window.location.pathname;
    if (activePage == url) {
        if (url.match(/\/pages\/contact.html/)) {
            page.style.color = '#262626';
        }
        else {
            page.style.color = '#CBEA7B';
        }
    }
})


// navigate to the top of the page function

goUp.addEventListener('click', ()=>{
    window.scrollTo({ top: 0, behavior: 'smooth' });
})