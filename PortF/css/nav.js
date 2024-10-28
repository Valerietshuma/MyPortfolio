

function toggleMenu() {
    const navMenu = document.getElementById('mainListDiv');
    navMenu.classList.toggle('show_list'); 
}


$('.navTrigger').click(function () {
    $(this).toggleClass('active');
    console.log("Clicked menu");
    $("#mainListDiv").toggleClass("show_list");
    $("#mainListDiv").fadeIn();
});
let lastScrollTop = 0; 
const nav = document.querySelector('.nav'); 

window.addEventListener('scroll', function() {
    const scrollTop = window.pageYOffset || document.documentElement.scrollTop;

    if (scrollTop > lastScrollTop) {
        // Scrolling down
        nav.classList.add('hidden'); // Hide nav
    } else {
        // Scrolling up
        nav.classList.remove('hidden'); // Show nav
    }
    lastScrollTop = scrollTop; // Update the last scroll position
});