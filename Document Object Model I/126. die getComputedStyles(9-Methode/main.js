"use strict";

let jumbo =document.querySelector(".jumbotron");
let jumbo_style = getComputedStyle(jumbo); // Berechnet die CSS-Eigenschaften des Elements
console.log(jumbo_style); // Gibt alle CSS-Eigenschaften des Elements aus
console.log(jumbo_style.color); // Gibt die Farbe des Textes im Element aus
console.log(jumbo_style.width); // Gibt die Hintergrundfarbe des Elements aus
console.log(jumbo_style.backgroundColor); // Gibt die Hintergrundfarbe des Elements aus
console.log(jumbo_style.fontSize); // Gibt die Schriftgröße des Textes im Element aus
console.log(jumbo_style.fontFamily); // Gibt die Schriftfamilie des Textes im Element aus
console.log(jumbo_style.animation); // Gibt die Schriftstärke des Textes im Element aus