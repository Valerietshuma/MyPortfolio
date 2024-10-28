function toggleMenu() {
    const navMenu = document.getElementById('mainListDiv');
    navMenu.classList.toggle('show_list'); // Toggle the class for showing/hiding the menu
}

// Optionally, if using jQuery:
$('.navTrigger').click(function () {
    $(this).toggleClass('active');
    console.log("Clicked menu");
    $("#mainListDiv").toggleClass("show_list");
    $("#mainListDiv").fadeIn();
});
let lastScrollTop = 0; // Keep track of the last scroll position
const nav = document.querySelector('.nav'); // Get the navigation element

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