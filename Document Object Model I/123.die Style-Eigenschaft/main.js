"use strict";

let jumbo = document.querySelector(".jumbotron");
console.log(jumbo.style); //bezieht sich auf die inline-Styles
//Inline-Styles auslesen
console.log(jumbo.style.backgroundColor); // gibt den Wert des Inline-Styles zurück

//Inline-Style beeinflussen oder verändern
jumbo.style.backgroundColor = "green"; //ändert den Inline-Style
jumbo.style.width = "85%"; //ändert den Inline-Style
jumbo.style.height = "90%"; //ändert den Inline-Style
jumbo.style.border = "5px solid red"; //ändert den Inline-Style
jumbo.style.fontSize = "2em"; //ändert den Inline-Style
