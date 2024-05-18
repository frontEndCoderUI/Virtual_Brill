window.addEventListener("scroll", function () {
  var navbar = document.querySelector(".navbar");
  if (window.scrollY > 0) {
    navbar.classList.add("fixed");
  } else {
    navbar.classList.remove("fixed");
  }
});

window.addEventListener("DOMContentLoaded", function(){
  const menuBtnEl = document.getElementById("menu-offcanvas");
  menuBtnEl.classList.remove("d-show");
  menuBtnEl.classList.add("d-none");
})

function openMenu() {
  const menuBtnEl = document.getElementById("menu-offcanvas");
  menuBtnEl.classList.add("d-show");
  menuBtnEl.classList.remove("d-none");
}
function closeMenu() {
  const menuBtnEl = document.getElementById("menu-offcanvas");
  menuBtnEl.classList.remove("d-show");
  menuBtnEl.classList.add("d-none");
}

// Service Page navigation 
function navToVAssign(){
  window.location.href = './virtual-assistance.html'
}

function navToItSoln(){
  window.location.href = './it-solutions.html'
}

function navToAdminService(){
  window.location.href = './admin-services.html'
}