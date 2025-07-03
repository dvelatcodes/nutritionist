let hamburger = document.querySelector('.hamburger');
let hamChecker = false;



hamburger.addEventListener('click', (e)=>{
    if (hamChecker == false) {
        hamburger.style.transform = "rotate(-180deg)";
        hamChecker = true
    }
    else{
        hamburger.style.transform = "rotate(360deg)";
        hamChecker = false
    }
})