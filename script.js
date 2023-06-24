function initializeMap() {
  initMap();
}

const menuButton = document.querySelector('.menu-btn');
const menuItems = document.querySelector('.menu-items');

menuButton.addEventListener('click', () => {
  menuButton.classList.toggle('active');
  menuItems.style.display = menuItems.style.display === 'none' ? 'block' : 'none';
});


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

  function initMap() {
    const location = { lat: 40.7128, lng: -74.0060 }; // Replace with your desired location
    const map = new google.maps.Map(document.getElementById("map"), {
      zoom: 15,
      center: location,
    });
    const marker = new google.maps.Marker({
      position: location,
      map: map,
    });
  }  

  let lastScrollTop = 0;
  let homeBgImage = document.querySelector(".home-bg-image");
  let images = [
    "images/chef-stir-fry-wok-dramatic-260nw-1425674246.png",
    "images/homepage1.png",
    "images/orangeChicken.png"
  ];
  let currentIndex = 0;
  let timer;

  function showSlide(index) {
    homeBgImage.style.backgroundImage = `url(${images[index]})`;
    currentIndex = index;
  }
  
  function nextSlide() {
    const nextIndex = (currentIndex + 1) % images.length;
    showSlide(nextIndex);
  }
  
  function previousSlide() {
    const prevIndex = (currentIndex - 1 + images.length) % images.length;
    showSlide(prevIndex);
  }

  function autoSlide() {
    setInterval(() => {
      nextSlide();
    }, 5000);
  }
  
  autoSlide();
  
  window.nextSlide = nextSlide;
  window.previousSlide = previousSlide;

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

  function scrollToTop() {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  }

  const scrollToTopButton = document.querySelector(".scroll-to-top");
  scrollToTopButton.addEventListener("click", scrollToTop);
});

document.querySelector('.circular-button').addEventListener('click', () => {
  document.querySelector('.collapsed-sidebar').classList.add('open');
});

document.querySelector('.close-button').addEventListener('click', () => {
  document.querySelector('.collapsed-sidebar').classList.remove('open');
});
