//Adicionando link no "João Victor", link no meu nome

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

const imgHeader = document.querySelector(".header__logo-img-cont");
function themePhotografy() {
  setTimeout(() => {
    if (imgHeader.classList.contains("transparent-bg")){
      imgHeader.classList.remove('transparent-bg');

    } else {
      imgHeader.classList.add("transparent-bg");
    }
  }, 1000);
} 
setInterval(themePhotografy, 10000);





//mudanca de tema da pagina
const themeToggle = document.getElementById('theme-toggle');
themeToggle.addEventListener('click', () => {

  //TODO:    Alterar o tema
  const currentTheme = document.documentElement.getAttribute('data-theme');
  const newTheme = currentTheme === 'escuro' ? 'claro' : 'escuro';
  document.documentElement.setAttribute('data-theme', newTheme);


  //?       Função a qual foi feita para trocar a imagem do tema( O sol e a lua)
  otherImgTheme();

});
// ? sadfassadasdsadasdsa

function otherImgTheme() {

  const imgThemeElement = document.getElementById("img-theme");
  const currentTheme = document.documentElement.getAttribute('data-theme');
  const nightTheme = document.getElementById("img-theme-night");
  const dayTheme = document.getElementById("img-theme-day");

  if (currentTheme === "escuro") {
    imgThemeElement.src = nightTheme.src;
  }
  if (currentTheme === "claro") {
    imgThemeElement.src = dayTheme.src;
  }

}

//funcao que deixa padrao o tema claro primeiro
function setDefaultTheme() {
  const currentTheme = document.documentElement.getAttribute('data-theme');

  //? vericaremos se o data-theme fui atribuido ao documento
  if (!currentTheme) { //todo:       Como de inicio não é verdadeiro, o data theme 
    document.documentElement.setAttribute('data-theme', 'claro'); // 'claro' é o tema padrão, você pode alterar para 'escuro' se preferir
    const imgThemeElement = document.getElementById("img-theme");
    const dayTheme = document.getElementById("img-theme-day");
    imgThemeElement.src = dayTheme.src;
  }
}

setDefaultTheme();

