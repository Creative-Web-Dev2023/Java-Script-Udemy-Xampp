"use strict";

let nav = document.querySelector("#navigation");
nav.remove(); //entfernt das Element mit der ID navigation

let jumbo = document.querySelectorAll(".jumbotron");
//jumbo.remove(); //entfernt alle Elemente mit der Klasse jumbotron
jumbo.forEach(function(e){
    e.remove(); //entfernt alle Elemente mit der Klasse jumbotron
});
