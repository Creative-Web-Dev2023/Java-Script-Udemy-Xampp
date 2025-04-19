"use strict";

let jumbo = document.querySelector(".jumbotron");
let classes = jumbo.className;
console.log(classes);

//Wert setzen und modifizieren
jumbo.className ="meine_klasse";

//Mini-Übung: Ändere die Klasse der Navigation
//document.querySelector("#navigation > ul > li:first-of-type> a").className = "";
//document.querySelector("#navigation > ul > li:nth-of-type(3)> a").className = "active";

jumbo.className += " lorem";
jumbo.className = jumbo.className.replace("meine", "deine");
jumbo.className = jumbo.className.replace(" lorem", "");