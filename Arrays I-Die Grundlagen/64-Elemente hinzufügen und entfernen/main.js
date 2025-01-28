"use strict";

let personen=[
    "Sebi",
    "Ana",
    "Maria",
    "Mia",
    "Dennis"
];

personen[1]= "Pia";
console.log(personen[1]);
console.log(personen);

//push(); Fügt ein Elem. am Ende des Arrays hinzu(und gibt die neue Größe des Arrays zurück)
//destruktiv = zerstörerisch unser Array wird verändert

console.log(personen.push("Max"));
console.log(personen);

//pop(); Entfernt ein Elem. am Ende des Arrays hinzu(und gibt die neue Größe des Arrays zurück)
//destruktiv = zerstörerisch unser Array wird verändert
console.log(personen.pop());
console.log(personen);

//unshift():Fügt ein Elem. am Anfang des Arrays hinzu(und gibt die neue Größe des Arrays zurück)
//destruktiv = zerstörerisch unser Array wird verändert
console.log(personen.unshift("Max"));
console.log(personen);

//shift():Entfernt das erste Element des Arrays hinzu(und gibt die neue Größe des Arrays zurück)
//destruktiv = zerstörerisch unser Array wird verändert
console.log(personen.shift());
console.log(personen);
