const mainNav = document.querySelector('.main-header__nav');
const mobileNavBtn = document.querySelector('.main-header__mobile-btn');

if (mainNav && mobileNavBtn) {
    mobileNavBtn.addEventListener('click', function () {
        mainNav.classList.toggle('open');
        mobileNavBtn.classList.toggle('open');
    })
}
