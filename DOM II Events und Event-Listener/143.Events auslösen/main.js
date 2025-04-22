"use strict";

let link = document.querySelector("a.active");
let input = document.querySelector("input[type='text']");
let formular = document.querySelector("form");

//click-Event auslösen
 setTimeout(() => link.click(), 3000);
 // Fokus auf das Eingabefeld setzen bedeutet dass die Umrandung von Input_feld blau wird
 setTimeout(() => input.focus(), 5000); 
 //blur auf das Eingabefeld setzen bedeutet Fokus entfernen
setTimeout(() => input.blur(), 9000);
//reset-Event auslösen bedeutet dass der Reset-Button gedrückt wird
setTimeout(() => formular.reset(), 12000);
// submit-Event auslösen bedeutet dass der Submit-Button gedrückt wird
setTimeout(() => formular.submit(), 15000);