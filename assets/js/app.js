const menu = document.querySelector('#mobileMenu');
const menuLinks = document.querySelector('.navbarMenu');
const navLogo = document.querySelector('#navbarLogo');

// Display Mobile Menu
const mobileMenu = () => {
  menu.classList.toggle('is-active');
  menuLinks.classList.toggle('active');
};

menu.addEventListener('click', mobileMenu);

// Show active menu when scrolling
const highlightMenu = () => {
  const elem = document.querySelector('.highlight');
  const homeMenu = document.querySelector('#homePage');
  const aboutMenu = document.querySelector('#aboutPage');
  const skillsMenu = document.querySelector('#skillsPage');
  let scrollPos = window.scrollY;
  // console.log(scrollPos);

  // adds 'highlight' class to my menu items
  if (window.innerWidth > 960 && scrollPos < 400) {
    homeMenu.classList.add('highlight');
    aboutMenu.classList.remove('highlight');
    skillsMenu.classList.remove('highlight');
    return;
  } else if (window.innerWidth > 960 && scrollPos < 1300) {
    aboutMenu.classList.add('highlight');
    homeMenu.classList.remove('highlight');
    skillsMenu.classList.remove('highlight');
    return;
  } else if (window.innerWidth > 960 && scrollPos < 3500) {
    skillsMenu.classList.add('highlight');
    aboutMenu.classList.remove('highlight');
    homeMenu.classList.remove('highlight');
    return;
  }

  if ((elem && window.innerWIdth < 960 && scrollPos < 600) || elem) {
    elem.classList.remove('highlight');
  }
};

window.addEventListener('scroll', highlightMenu);
window.addEventListener('click', highlightMenu);

//  Close mobile Menu when clicking on a menu item
const hideMobileMenu = () => {
  const menuBars = document.querySelector('.is-active');
  if (window.innerWidth <= 768 && menuBars) {
    menu.classList.toggle('is-active');
    menuLinks.classList.remove('active');
  }
};

menuLinks.addEventListener('click', hideMobileMenu);
navLogo.addEventListener('click', hideMobileMenu);

// fetch github image
const githubImage = document.querySelector('.githubImage');

function getGithubUser() {
  const url = 'https://api.github.com/users/Lucas-Toscano';
  fetch(url).then(res=>res.json()).then(data=>{
    console.log(data)
  }).catch(e=>{
    console.log(e)
  });

  // if(data) {
  //   githubImage.src = data['avatar_url'];
  // }
}
getGithubUser();

