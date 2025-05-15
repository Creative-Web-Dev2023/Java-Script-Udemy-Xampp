"use strict";
  //NORMALE funktion
  
//const multiplizieren1 = function (a,b) { return a * b;}
   //REGEL 1: Wenn nur ein Parameter, dann Klammern weglassen
//const multiplizieren1 = (a,b) => {return a * b}; // Arrow Function
//const multiplizieren1 = (a,b) => a * b;
// testausgabe
console.log(multiplizieren(2,3)); // 6

//const begruessung = function(name){return`Hallo ${name}`;}; 
//const begruessung = (name) => `Hallo ${name}`; // Arrow Function
   //wenn nur ein einzelnen Parameter Klammern kommen weg 
// const begruessung = name => `Hallo ${name}`;
   //testausgabe
// console.log(begruessung("Max")); // Hallo Max

//const sinnDesLebens = function() {return 42;};
    //wenn keine Parameter dann function weg
const sinnDesLebens = () => 42; // Arrow Function
console.log(sinnDesLebens()); // 42

let einkaufsliste = ["Äpfel",
     "Bananen", 
     "Kirschen",
      "Datteln", 
      "Johanissbeeren",
      "Feigen",
      "Erdbeeren"];
 einkaufsliste.forEach(function(e) {
   console.log(e); // Äpfel, Bananen, Kirschen, Datteln, Johanissbeeren, Feigen, Erdbeeren
 });  
 einkaufsliste.forEach (e => console.log(e)); // Äpfel, Bananen, Kirschen, Datteln, Johanissbeeren, Feigen, Erdbeeren
