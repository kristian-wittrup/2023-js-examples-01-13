const toggleBtn = document.querySelector('.sidebar-toggle');
const closeBtn = document.querySelector('.close-btn');
const sidebar = document.querySelector('.sidebar');
const helperClass = document.querySelector('.helper');

toggleBtn.addEventListener('click', function () {
  sidebar.classList.toggle("show-sidebar")
  helperClass.classList.toggle("helper-overlay")
})

closeBtn.addEventListener('click', function () {
  sidebar.classList.remove("show-sidebar")
  helperClass.classList.toggle("helper-overlay")

})

helperClass.addEventListener('click', function () {
  helperClass.classList.remove("helper-overlay")
  sidebar.classList.remove("show-sidebar")
})