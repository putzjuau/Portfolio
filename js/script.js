const hamMenuBtn = document.querySelector('.header__main-ham-menu-cont')
const smallMenu = document.querySelector('.header__sm-menu')
const headerHamMenuBtn = document.querySelector('.header__main-ham-menu')
const headerHamMenuCloseBtn = document.querySelector('.header__main-ham-menu-close')
const headerSmallMenuLinks = document.querySelectorAll('.header__sm-menu-link')

hamMenuBtn.addEventListener('click', () => {
    if (smallMenu.classList.contains('header__sm-menu--active')) {
        smallMenu.classList.remove('header__sm-menu--active')
    } else {
        smallMenu.classList.add('header__sm-menu--active')
    }
    if (headerHamMenuBtn.classList.contains('d-none')) {
        headerHamMenuBtn.classList.remove('d-none')
        headerHamMenuCloseBtn.classList.add('d-none')
    } else {
        headerHamMenuBtn.classList.add('d-none')
        headerHamMenuCloseBtn.classList.remove('d-none')
    }
})
const headerLogoConatiner = document.querySelector('.header__logo-sub')
headerLogoConatiner.addEventListener('click', () => {
    location.href = 'https://putzjuau.github.io/Portfolio/'
})

const footerLink = document.querySelector('.link_footer')
footerLink.addEventListener('click', () => {
    location.href = 'https://putzjuau.github.io/Portfolio/'
})