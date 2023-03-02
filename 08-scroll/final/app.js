const navbar = document.querySelector('nav');
const topLink = document.querySelector('.top-link');

window.addEventListener('scroll', function () {
  const scrollHeight = window.pageYOffset;
  //console.log("userScroll: ", scrollHeight);
  const navHeight = nav.getBoundingClientRect().height;

  if (scrollHeight > navHeight) {
    navbar.classList.add("fixed-nav");
  }
  else {
    navbar.classList.remove("fixed-nav");
  }


});