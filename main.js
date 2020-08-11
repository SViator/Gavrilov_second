const burgerToggle = document.querySelector('#burger-toggle');
const mobileNavContainer = document.querySelector('#mobile-nav');

burgerToggle.onclick = function () {
    burgerToggle.classList.toggle('burger-icon-active');
    mobileNavContainer.classList.toggle('mobile-nav--active');
}

