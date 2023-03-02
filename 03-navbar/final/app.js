// classList - show/gets all classes of an element
// toggle - adds/removes a class
// contains - checks if an element contains a class'
// remove / add - removes or adds a class

const navToggle = document.querySelector('.nav-toggle');
const links = document.querySelector('.links');

navToggle.addEventListener('click', function () {
  //console.log(links.classList.contains("links"));
/*   if (links.classList.contains("show-links")) {
    links.classList.remove("show-links");
  }
  else {
    links.classList.add("show-links");
  } */
  links.classList.toggle("show-links")
})
