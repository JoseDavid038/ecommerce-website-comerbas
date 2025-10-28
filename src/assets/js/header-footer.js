
document.addEventListener('DOMContentLoaded', function() {
  loadComponent("header", "/components/header2.html" , () => {
   
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



function setNavLinks2(){

  const navLinks = document.querySelectorAll('.js-nav__link');

  navLinks.forEach(link => {

    // handle navigation links

      const pageMap = {
        "Para Empresas": "https://comerbas.com/empresas.html",
        "Para Personas": "https://comerbas.com/index.html",
        "Sobre Nosotros": "https://comerbas.com/nosotros.html",
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



 