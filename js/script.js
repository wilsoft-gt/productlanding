function whatcolor(color) {
    toChange = document.getElementById('colors');
    if (color == 'gold') {
        toChange.src = 'IMG/gold.png';
        console.log('gold');       
    } else if (color == 'platinum') {
        toChange.src = 'IMG/plateado.png';
        console.log('platinum');       
    } else if (color == 'blueSteel') {
        toChange.src = 'IMG/azul.png';
        console.log('blueSteel');       
    } else if (color == 'brownLeather') {
        toChange.src = 'IMG/brown leather.png';
        console.log('brownLeather');       
    } else if (color == 'blackLeather') {
        toChange.src = 'IMG/black leather.png';
        console.log('blackLeather');       
    }
}

var media = window.matchMedia("(max-width: 769px)");

function mostrar() {
    if (media.matches) {
        document.getElementById("menu-button-m").style.display = "none";
        document.getElementById("menu-button-o").style.display = "initial";
        document.getElementById("nav-menu").style.display = "flex";    
    }
}

function ocultar() {
    if (media.matches) {
        document.getElementById("menu-button-m").style.display = "initial";
        document.getElementById("menu-button-o").style.display = "none";
        document.getElementById("nav-menu").style.display = "none";    
    }
}

/* function myFunction(x) {
    if (x.matches) { // If media query matches
        function mostrar() {
            document.getElementById("menu-button-m").style.display = "none";
            document.getElementById("menu-button-o").style.display = "initial";
            document.getElementById("nav-menu").style.display = "flex";    
        }
        
        function ocultar() {
            document.getElementById("menu-button-m").style.display = "initial";
            document.getElementById("menu-button-o").style.display = "none";
            document.getElementById("nav-menu").style.display = "none"; 
    } else {
        console.log('NO phone');
    }
  }
   */