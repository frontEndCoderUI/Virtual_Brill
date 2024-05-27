const VAServiceSectionElement = document.getElementById("va-service-section");
const ITSolutionSectionElement = document.getElementById("it-soln-section");
const AdminServiceSectionElement = document.getElementById(
  "admin-service-section"
);

window.addEventListener("scroll", function () {
  var navbar = document.querySelector(".navbar");
  if (window.scrollY > 0) {
    navbar.classList.add("fixed");
  } else {
    navbar.classList.remove("fixed");
  }
});

window.addEventListener("DOMContentLoaded", function () {
  const menuBtnEl = document.getElementById("menu-offcanvas");
  menuBtnEl.classList.remove("d-show");
  menuBtnEl.classList.add("d-none");

  const currentUrl = window.location.href;

  // Create a URL object
  const url = new URL(currentUrl);

  // Check if the 'type' parameter exists
  if (url.searchParams.has("type")) {
    const params = new URLSearchParams(window.location.search);
    const servType = params.get("type");
    if (servType === "it") {
      navToItSoln("va");
    } else if (servType === "admin") {
      navToAdminService("va");
    }
    // Remove the 'type' parameter
    url.searchParams.delete("type");

    // Update the browser's URL without reloading the page
    window.history.pushState({}, document.title, url.pathname + url.search);
  }
});

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

function navToProjectsPage() {
  window.location.href = "./projects.html";
}
function navToServicesPage() {
  window.location.href = "./services.html";
}
function navToAboutUsPage() {
  window.location.href = "./about.html";
}
function navToContactUsPage() {
  window.location.href = "./contactus.html";
}

// Service Page navigation
function navToVAssign(current) {
  VAServiceSectionElement.classList.remove("d-none");
  VAServiceSectionElement.classList.add("d-show");
  if (current == "it") {
    ITSolutionSectionElement.classList.remove("d-show");
    ITSolutionSectionElement.classList.add("d-none");
  } else {
    AdminServiceSectionElement.classList.remove("d-show");
    AdminServiceSectionElement.classList.add("d-none");
  }
}

function navToItSoln(current) {
  ITSolutionSectionElement.classList.remove("d-none");
  ITSolutionSectionElement.classList.add("d-show");
  if (current == "va") {
    VAServiceSectionElement.classList.remove("d-show");
    VAServiceSectionElement.classList.add("d-none");
  } else {
    AdminServiceSectionElement.classList.remove("d-show");
    AdminServiceSectionElement.classList.add("d-none");
  }
}

function navToAdminService(current) {
  AdminServiceSectionElement.classList.remove("d-none");
  AdminServiceSectionElement.classList.add("d-show");
  if (current == "va") {
    VAServiceSectionElement.classList.remove("d-show");
    VAServiceSectionElement.classList.add("d-none");
  } else {
    ITSolutionSectionElement.classList.remove("d-show");
    ITSolutionSectionElement.classList.add("d-none");
  }
}
