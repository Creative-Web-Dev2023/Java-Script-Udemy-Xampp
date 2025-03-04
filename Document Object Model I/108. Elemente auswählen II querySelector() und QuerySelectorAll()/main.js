"use strict";

//QuerySelector = gibt das erste Element zurück, das mit einem angegebenen CSS-Selektor übereinstimmt
let qs1 =  document.querySelector("body > #navigation > ul");
console.log(qs1);

let qs2 = document.querySelector(".jumbotron ");
console.log(qs2);

let qs3 = document.querySelector("TEST");
console.log(qs3);

//QuerySelectorAll = gibt eine NodeList zurück, die alle Elemente enthält, die mit einem angegebenen CSS-Selektor übereinstimmen
let qs4 = document.querySelectorAll("body > #navigation > ul > li");
console.log(qs4);

let qs5 = document.querySelectorAll("test ");
console.log(qs5.length === 0);

let qs6 = document.querySelectorAll("");

