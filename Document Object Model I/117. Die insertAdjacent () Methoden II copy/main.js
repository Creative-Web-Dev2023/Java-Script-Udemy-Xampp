"use strict";

let li = document.createElement("li");
li.setAttribute("id", "mein_listenelement");

let anker = document.createElement("a");
anker.setAttribute("id", "mein_ankerelement");
anker.setAttribute("href", "#");

let text_node = document.createTextNode("Element");
anker.appendChild(text_node); //text in den anker einfügen
 li.appendChild(anker); //anker in die liste einfügen
// console.log(li);

let liste = document.querySelector("#navigation > ul");// wird nicht oft gebraucht 


//INSERTADJACENTELEMENT()= ist eine Methode, die es ermöglicht, ein Element an einer bestimmten Position relativ zu einem 
     // anderen Element im DOM einzufügen.
//liste.insertAdjacentElement("beforebegin", li); //li in die liste einfügen
//liste.insertAdjacentElement("afterbegin", li); //li in die liste einfügen
//liste.insertAdjacentElement("beforeend", li); //li in die liste einfügen
//liste.insertAdjacentElement("afterend", li); //li in die liste einfügen

let dom_string ="<li id='mein_listenelement'> <a id='mein_ankerelement' href='#'>Element</a></li>";
//INSERTADJACENTHTML()= ist eine Methode, die es ermöglicht, HTML-Text an einer bestimmten Position relativ zu einem anderen Element im DOM einzufügen.
//liste.insertAdjacentHTML("beforebegin", dom_string); //li in die liste einfügen
//liste.insertAdjacentHTML("afterbegin", dom_string); //li in die liste einfügen
//liste.insertAdjacentHTML("beforeend", dom_string); //li in die liste einfügen 
//liste.insertAdjacentHTML("afterend", dom_string); //li in die liste einfügen

let text ="Lorem Ipsum dolor sit amet.";
//INSERTADJACENTTEXT()= ist eine Methode, die es ermöglicht, Text an einer bestimmten Position relativ zu einem anderen Element im DOM einzufügen.
//liste.insertAdjacentText("beforebegin", text); //li in die liste einfügen
//liste.insertAdjacentText("afterbegin", text); //li in die liste einfügen    
//liste.insertAdjacentText("beforeend", text); //li in die liste einfügen
liste.insertAdjacentText("afterend", text); //li in die liste einfügen

