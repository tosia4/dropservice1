const footerYear = document.querySelector('.footer__year')
const navLink = document.querySelector('.nav-mobile__link')
const allNavItems = document.querySelectorAll('.nav-mobile__link')
const navBtn = document.querySelector('.hamburger');
const navMobile = document.querySelector('.nav-mobile')

const handleNav = () => {
    navBtn.classList.toggle('is-active');
    navMobile.classList.toggle('nav-mobile--active');
    document.body.classList.toggle('sticky-body');

    allNavItems.forEach(item => {
        item.addEventListener('click', () => {
            navMobile.classList.remove('nav-mobile--active');
            navBtn.classList.remove('is-active');
        })
    })
}

const handleCurrentYear = () => {
    const year = (new Date).getFullYear();
    footerYear.innerText = year;
}




navBtn.addEventListener('click', handleNav);
handleCurrentYear();
