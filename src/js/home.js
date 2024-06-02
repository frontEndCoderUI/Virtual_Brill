const VADefineSection = document.getElementById("define-va");
const ITDefineSection = document.getElementById("define-it");
const AdminDefineSection = document.getElementById("define-admin");

const firstCarouselElement = document.querySelectorAll(".p1-c1");
const secondCarouselElement = document.querySelectorAll(".p1-c2");
const thirdCarouselElement = document.querySelectorAll(".p1-c3");
const fourthCarouselElement = document.querySelectorAll(".p1-c4");
const fifthCarouselElement = document.querySelectorAll(".p1-c5");
const sixtCarouselElement = document.querySelectorAll(".p1-c6");
const seventhCarouselElement = document.querySelectorAll(".p1-c7");
const eighthCarouselElement = document.querySelectorAll(".p1-c8");

// Define section navigation
function showDefineSection(current, navTo) {
  resetCarouselNav();
  if (current == "va") {
    VADefineSection.classList.remove("d-show");
    VADefineSection.classList.add("d-none");
    if (navTo == "it") {
      ITDefineSection.classList.remove("d-none");
      ITDefineSection.classList.add("d-show");
    } else if (navTo == "admin") {
      AdminDefineSection.classList.remove("d-none");
      AdminDefineSection.classList.add("d-show");
    }
  } else if (current == "it") {
    ITDefineSection.classList.remove("d-show");
    ITDefineSection.classList.add("d-none");
    if (navTo == "va") {
      VADefineSection.classList.remove("d-none");
      VADefineSection.classList.add("d-show");
    } else if (navTo == "admin") {
      AdminDefineSection.classList.add("d-show");
      AdminDefineSection.classList.remove("d-none");
    }
  } else {
    AdminDefineSection.classList.remove("d-show");
    AdminDefineSection.classList.add("d-none");
    if (navTo == "va") {
      VADefineSection.classList.remove("d-none");
      VADefineSection.classList.add("d-show");
    } else if (navTo == "it") {
      ITDefineSection.classList.remove("d-none");
      ITDefineSection.classList.add("d-show");
    }
  }
}

function resetCarouselNav() {
  firstCarouselElement.forEach(function (element) {
    element.classList.remove("d-none");
  });
  secondCarouselElement.forEach(function (element) {
    element.classList.add("d-none");
  });
  thirdCarouselElement.forEach(function (element) {
    element.classList.add("d-none");
  });
  fourthCarouselElement.forEach(function (element) {
    element.classList.add("d-none");
  });
  fifthCarouselElement.forEach(function (element) {
    element.classList.add("d-none");
  });
  sixtCarouselElement.forEach(function (element) {
    element.classList.add("d-none");
  });
  seventhCarouselElement.forEach(function (element) {
    element.classList.add("d-none");
  });
  eighthCarouselElement.forEach(function (element) {
    element.classList.add("d-none");
  });
}

// Carousel navigations
function navp1Prev(count) {
  if (count === 1) {
    firstCarouselElement.forEach(function (element) {
      element.classList.remove("d-none");
    });
    secondCarouselElement.forEach(function (element) {
      element.classList.add("d-none");
    });
  } else if (count === 2) {
    secondCarouselElement.forEach(function (element) {
      element.classList.remove("d-none");
    });
    thirdCarouselElement.forEach(function (element) {
      element.classList.add("d-none");
    });
  } else if (count === 3) {
    thirdCarouselElement.forEach(function (element) {
      element.classList.remove("d-none");
    });
    fourthCarouselElement.forEach(function (element) {
      element.classList.add("d-none");
    });
  } else if (count === 4) {
    fourthCarouselElement.forEach(function (element) {
      element.classList.remove("d-none");
    });
    fifthCarouselElement.forEach(function (element) {
      element.classList.add("d-none");
    });
  } else if (count === 5) {
    fifthCarouselElement.forEach(function (element) {
      element.classList.remove("d-none");
    });
    sixtCarouselElement.forEach(function (element) {
      element.classList.add("d-none");
    });
  } else if (count === 6) {
    sixtCarouselElement.forEach(function (element) {
      element.classList.remove("d-none");
    });
    seventhCarouselElement.forEach(function (element) {
      element.classList.add("d-none");
    });
  } else if (count === 7) {
    seventhCarouselElement.forEach(function (element) {
      element.classList.remove("d-none");
    });
    eighthCarouselElement.forEach(function (element) {
      element.classList.add("d-none");
    });
  }
}

function navp1Next(count) {
  if (count === 2) {
    firstCarouselElement.forEach(function (element) {
      element.classList.add("d-none");
    });

    secondCarouselElement.forEach(function (element) {
      element.classList.remove("d-none");
    });
  } else if (count === 3) {
    secondCarouselElement.forEach(function (element) {
      element.classList.add("d-none");
    });

    thirdCarouselElement.forEach(function (element) {
      element.classList.remove("d-none");
    });
  } else if (count === 4) {
    thirdCarouselElement.forEach(function (element) {
      element.classList.add("d-none");
    });

    fourthCarouselElement.forEach(function (element) {
      element.classList.remove("d-none");
    });
  } else if (count === 5) {
    fourthCarouselElement.forEach(function (element) {
      element.classList.add("d-none");
    });

    fifthCarouselElement.forEach(function (element) {
      element.classList.remove("d-none");
    });
  } else if (count === 6) {
    fifthCarouselElement.forEach(function (element) {
      element.classList.add("d-none");
    });

    sixtCarouselElement.forEach(function (element) {
      element.classList.remove("d-none");
    });
  } else if (count === 7) {
    sixtCarouselElement.forEach(function (element) {
      element.classList.add("d-none");
    });

    seventhCarouselElement.forEach(function (element) {
      element.classList.remove("d-none");
    });
  } else if (count === 8) {
    seventhCarouselElement.forEach(function (element) {
      element.classList.add("d-none");
    });

    eighthCarouselElement.forEach(function (element) {
      element.classList.remove("d-none");
    });
  }
}
