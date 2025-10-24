
document.addEventListener('DOMContentLoaded', function() {
  loadComponent("header", "/components/header.html" , () => {
    
    setNavLinks();
    // Modify button text based on the page
   
    setupMenu();  // Ensure hamburger menu works after header loads

  });

  loadComponent("footer", "/components/footer.html", () => {
     setNavLinks2();
  });
    
});

// Function to fetch and load components
function loadComponent(tag, file, callback = null){
  fetch(file)
      .then(response => response.text())
      .then(data => {
        document.getElementById(tag).innerHTML = data;
        if (callback) callback();  // Ensure the callback runs after loading
      })
      .catch(error => console.error(`Error loading ${file}:`,error));
}




// Function to handle navigation links and active class

function setNavLinks(){

  const navLinks = document.querySelectorAll('.js-nav__link');

  navLinks.forEach(link => {

    // handle navigation links

      const pageMap = {
        "Para Empresas": "/src/pages/empresas.html",
        "Para Personas": "/src/pages/index.html",
        "IPS": "/src/pages/ips.html",
        "Sobre nosotros": "/src/pages/nosotros.html",
      };

       // Add active class based on the current page
    if (window.location.pathname === pageMap[link.textContent.trim()]) {
      navLinks.forEach(l => l.classList.remove("active-link")); // Remove from all
      link.classList.add("active-link");
    }

    // Add event listener for clicks
    link.addEventListener("click", function (event) {
      event.preventDefault();
      const page = link.textContent.trim();

      if (pageMap[page]) {
        window.location.href = pageMap[page];
      };
    });
  });

};



function setNavLinks2(){

  const navLinks = document.querySelectorAll('.js-nav__link');

  navLinks.forEach(link => {

    // handle navigation links

      const pageMap = {
        "Para Empresas": "/src/pages/empresas.html",
        "Para Personas": "/src/pages/index.html",
        "IPS": "/src/pages/ips.html",
        "Sobre nosotros": "/src/pages/nosotros.html",
        "Protección de Datos": "/public/docs/Politica_tratamiento_datos.pdf"
      };

    // Add event listener for clicks
    link.addEventListener("click", function (event) {
      event.preventDefault();
      const page = link.textContent.trim();

      if (pageMap[page]) {
        window.location.href = pageMap[page];
      };
    });
  });

};




// menu

function setupMenu(){

  const navMenu = document.getElementById('nav-menu'),
        navToggle = document.getElementById('nav-toggle'),
        navClose = document.getElementById('nav-close');
  

    // menu show

  if(navToggle){
    navToggle.addEventListener('click', () =>{
      navMenu.classList.add('show-menu');
    })
  }

  // menu hidden

  if(navClose){
  navClose.addEventListener('click', () =>{
    navMenu.classList.remove('show-menu');
  })
  }

  
  const navLink = document.querySelectorAll('.nav__link');

  const linkAction = () =>{
  // const navMenu = document.getElementById('nav-menu'); no es necesario volverla a declarar.
    if (window.location.pathname.includes("index.html")){
      navMenu.classList.remove('show-menu');
    }
  }

  navLink.forEach(n => n.addEventListener('click', linkAction));

};



 