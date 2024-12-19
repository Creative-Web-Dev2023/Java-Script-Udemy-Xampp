"use strict";

let vorname = "Gabriela";
let nachname = "Keller";
let alter = 45;

// let name = vorname + nachname;

let name = vorname +" "+ nachname;
console.log(name);

// let begruessung = "Hallo " + vorname + " " + nachname + "!";

let begruessung = "Hallo " + name + "!";
console.log(begruessung);


let zusammenFassung = name + " (" + alter + " Jahre)"; 
console.log(zusammenFassung);

let einzeilligeString = "Das ist ein einzeiliger String!";

let mehrZeiliggerString = "Ich will diesen String " + "\n \t in der nächsten Zeile weiter schreiben! " +"Und ich will " +"ihn noch weiter schreiben!";
console.log(mehrZeiliggerString);