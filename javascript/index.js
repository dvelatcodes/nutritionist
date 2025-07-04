let hamburger = document.querySelector('.hamburger');
let navLinks = document.querySelector('.nav-links');
let hamChecker = false;



hamburger.addEventListener('click', (e)=>{
    if (hamChecker == false) {
        hamburger.style.transform = "rotate(-180deg)";
        // navLinks.style.display = 'flex';
        navLinks.style.transform = 'translateX(0)'
        hamChecker = true
    }
    else{
        hamburger.style.transform = "rotate(360deg)";
        // navLinks.style.display = 'none';
        navLinks.style.transform = 'translateX(100vw)'
        hamChecker = false
    }
})