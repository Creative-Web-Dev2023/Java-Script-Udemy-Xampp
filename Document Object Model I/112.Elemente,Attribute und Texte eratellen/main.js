"use strict";

// Erstellen von Elementen
let div = document.createElement("div");
// console.log(div); // <div></div>

//Attribut erstellem
let atribute= document.createAttribute("id"); // <div id=""></div>
atribute.value ="meine_id";
// console.log(atribute);// <id></id>

//Attribute zuweisen oder einem Element hinzufügen
div.setAttributeNode(atribute); // <div id="meine_id"></div>
// console.log(div);

// Attribute erstellen UND  hinzufügen
div.setAttribute("class", "meine_klasse"); // <div id="meine_id" class="meine_klasse"></div>
// console.log(div);

let text = document.createTextNode("Hallo Welt"); // <div id="meine_id" class="meine_klasse">Hallo Welt</div>
console.log(text); // #text: "Hallo Welt"
console.log(div); // <div id="meine_id" class="meine_klasse">Hallo Welt</div>
