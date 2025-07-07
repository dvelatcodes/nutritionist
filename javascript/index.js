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



// Get the current path
const currentPath = window.location.pathname;

// Loop through each link
pages.forEach((page) => {
    const href = new URL(page.href).pathname;
    const text = page.textContent.trim().toLowerCase();

    // Reset styles
    page.style.color = '';

    const isActive =
        href === currentPath || (currentPath === '/' && href.endsWith('/index.html'));

    if (isActive) {
        if (href === '/pages/contact.html') {
            page.style.color = '#000';
        } else {
            page.style.color = '#CBEA7B';
        }
    }
});



// navigate to the top of the page function

goUp.addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
})