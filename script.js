document.addEventListener("DOMContentLoaded", () => {
    const navLinks = document.querySelectorAll("nav ul li a");
  
    navLinks.forEach((link) => {
      link.addEventListener("mouseenter", () => {
        link.style.transform = "scale(1.1)";
        link.style.transition = "transform 0.3s";
      });
  
      link.addEventListener("mouseleave", () => {
        link.style.transform = "scale(1)";
        link.style.transition = "transform 0.3s";
      });
    });
  });
  
  let lastScrollTop = 0;
  
  function manageHeaderVisibility() {
    const currentScrollTop = window.pageYOffset;
    const topBar = document.getElementById("top-bar");
    const header = document.querySelector("header");
    const homeSection = document.querySelector("#home");
    const homeSectionBottom = homeSection.offsetTop + homeSection.offsetHeight;
  
    if (currentScrollTop > lastScrollTop && currentScrollTop >= homeSectionBottom) {
        topBar.style.display = "none";
        header.style.transform = "translateY(-100%)";
        header.style.transition = "transform 0.3s";
    } else {
        topBar.style.display = "flex";
        header.style.transform = "translateY(0)";
        header.style.transition = "transform 0.3s";
    }
  
    const menuSection = document.querySelector("#menu");
    const menuSectionTop = menuSection.offsetTop;
  
    if (currentScrollTop >= menuSectionTop) {
        if (!header.classList.contains("sticky")) {
            header.classList.add("sticky");
            header.style.transform = "translateY(0)";
            header.style.transition = "transform 0.3s";
        }
    } else {
        header.classList.remove("sticky");
    }
    
  
    lastScrollTop = currentScrollTop;
  }
  
  window.addEventListener("scroll", manageHeaderVisibility);
  