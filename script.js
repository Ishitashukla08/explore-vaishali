const menuBtn = document.getElementById("menuBtn");
const navbar = document.getElementById("navbar");
const navLinks = document.querySelectorAll(".navbar a");

menuBtn.addEventListener("click", function () {

    navbar.classList.toggle("active");

    if (navbar.classList.contains("active")) {
        menuBtn.innerHTML = "&times;";
    } else {
        menuBtn.innerHTML = "&#9776;";
    }

});

navLinks.forEach(function(link){

    link.addEventListener("click", function(){

        navbar.classList.remove("active");
        menuBtn.innerHTML = "&#9776;";

    });

});

const themeBtn = document.getElementById("themeBtn");

themeBtn.addEventListener("click", function(){

    document.body.classList.toggle("dark");

    if(document.body.classList.contains("dark")){
        themeBtn.innerHTML = "☀️";
    }
    else{
        themeBtn.innerHTML = "🌙";
    }

});