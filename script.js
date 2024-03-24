const menu = document.querySelector('.menu__icon');
const close = document.querySelector('.close__icon');
const navbarList = document.querySelector('.navbar > ul');

document.addEventListener('DOMContentLoaded', function () {

    menu.addEventListener('click', function () {
        menu.classList.toggle('active');
        close.classList.toggle('active');
        navbarList.style.display = 'block'
        navbarList.classList.toggle('active__list');
    });

    close.addEventListener('click', function () {
        menu.classList.toggle('active');
        close.classList.toggle('active');
        navbarList.classList.toggle('active__list');
        navbarList.style.display = 'none'
    });
});

// Function to handle window resize
window.addEventListener('resize', function () {
    // If the window width exceeds 725px (desktop view), ensure the navbar list is shown
    if (window.innerWidth > 725) {
        navbarList.style.display = 'block';
    }
});


function openFinanceApp() {
    const url = "https://finance-app-inky.vercel.app/";
    window.open(url, '_blank');
}