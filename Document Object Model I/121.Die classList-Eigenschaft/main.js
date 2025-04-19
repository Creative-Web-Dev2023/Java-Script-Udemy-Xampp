"use strict";
let jumbo = document.querySelector(".jumbotron");
//console.log(jumbo);

let class_list = jumbo.classList;
//console.log(class_list); 

//Klasse hinzufügen
jumbo.classList.add("meine_Klasse");

//klasse entfernen
jumbo.classList.remove("jumbotron");

//klasse ersetzen
jumbo.classList.replace("meine_Klasse", "deine_Klasse");

//Vorhandensein von Klassen abfragen
jumbo.classList.contains("jumbotron"); //false
console.log(jumbo.classList.contains("jumbotron")); //false

//klasse toggeln = hinzufügen, wenn nicht vorhanden, entfernen, wenn vorhanden
jumbo.classList.toggle("auch_eine_klasse"); 
jumbo.classList.toggle("auch_eine_klasse"); //entfernt die Klasse wieder