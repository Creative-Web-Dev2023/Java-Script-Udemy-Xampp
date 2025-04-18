"use strict";

let li = document.createElement("li");
li.setAttribute("id", "mein_listenelement");


let anker = document.createElement("a");
anker.setAttribute("id", "mein_ankerelement");
anker.setAttribute("href", "#");

let text = document.createTextNode("Element");

anker.appendChild(text); //text in den anker einfügen
li.appendChild(anker); //anker in die liste einfügen
// console.log(li);

let liste = document.querySelector("#navigation > ul");
liste.appendChild(li); //li in die liste einfügen