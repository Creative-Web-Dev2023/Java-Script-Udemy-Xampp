"use strict";

let ul = document.querySelector("#navigation > ul");


// Child Elements = Elemente, die direkt unter einem anderen Element stehen
let childNodes = ul.childNodes;  // Gibt alle Elemente zurück, auch Text und Kommentare
let children = ul.children;  // Gibt nur die Elemente zurück
console.log(childNodes);  //  NodeList(3) #text, ul, #text, ul, #text
console.log(children);    //Html Collection [ul]

// firstChild = erstes Kind-Element
let firstChild = ul.firstChild;  // Gibt das erste Element zurück inkl. Text und Kommentare
let lastChild = ul.lastChild;  // Gibt das letzte Element zurück inkl. Text und Kommentare
console.log(firstChild);  // #text
console.log(lastChild);  // #text

// firstElementChild = erstes Kind-Element (ohne Text und Kommentare)
let firstElementChild = ul.firstElementChild;  // Gibt das erste Element zurück ohne Text und Kommentare
let lastElementChild = ul.lastElementChild;  // Gibt das letzte Element zurück ohne Text und Kommentare
console.log(firstElementChild);  // <ul>...</ul>
console.log(lastElementChild);  // <ul>...</ul>

//Siblings = Geschwister-Elemente (Elemente, die auf der gleichen Ebene stehen)
let nextSibling = ul.nextSibling;  // Gibt das nächste Element zurück inkl. Text und Kommentare
let previousSibling = ul.previousSibling;  // Gibt das vorherige Element zurück inkl. Text und Kommentare   
console.log(nextSibling);  // #text
console.log(previousSibling);  // #text

let nextElementSibling = ul.nextElementSibling;  // Gibt das nächste Element zurück ohne Text und Kommentare
let previousElementSibling = ul.previousElementSibling;  // Gibt das vorherige Element zurück ohne Text und Kommentare
console.log(nextElementSibling); // null
console.log(previousElementSibling);  // null

// Parent = Eltern-Element
let parent = ul.parentElement;  // Gibt das Eltern-Element zurück
console.log(parent);  // <nav id="navigation">...</nav> 

//Algeimeines navigieren
let anker =ul.querySelectorAll("li> a");
console.log(anker);

