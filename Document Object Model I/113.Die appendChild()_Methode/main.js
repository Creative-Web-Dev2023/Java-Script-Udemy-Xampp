"use strict";

let div = document.createElement("div"); // <div></div>
div.setAttribute("id", "meine_id"); // <div id="meine_id"></div>
div.setAttribute("class", "meine_classe"); // <div id="meine_id" class="meine_klasse"></div>
let text = document.createTextNode("Hallo Welt"); // <div id="meine_id" class="meine_klasse">Hallo Welt</div>

//appenchild() Methode: fügt ein Element als letztes Kindelement in ein ElternElements hinzu
//Syntax :eltenelement.appendChild(kindElement);
//existierendes KindElement wird entfernt und als letztes KindElements hinzugefügt

//Text zum div-Elem hinzugefügt
div.appendChild(text); // <div id="meine_id" class="meine_klasse">Hallo Welt</div>

//Section in Jumbotron selektiert
let jumbo = document.querySelector(".jumbotron > section"); // <div class="jumbotron"></div>
//div-Elem zur Section im Jumbotron hinzugefügt
jumbo.appendChild(div); // <div class="jumbotron"><div id="meine_id" class="meine_klasse">Hallo Welt</div></div>

// erstes Listenelement in der Navigation selektieren
//let li = document.querySelector("#navigation > ul > li"); // <li></li>

// ul in Navigation selektieren
//let ul = document.querySelector("#navigation > ul");
//das erste Listenelement der ul erneunt in ul eingefügt allerdings durch appendChild() Methode als letztes KindElement
//ul.appendChild(li); // <li><ul></ul></li>



let li =document.querySelector("#navigation > ul > li"); // <li></li>
let ul = document.querySelector("#navigation > ul"); // <ul></ul>
ul.appendChild(li); // <ul><li></li></ul>