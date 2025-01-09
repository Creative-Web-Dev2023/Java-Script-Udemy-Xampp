"use strict";

const multiplizieren = function (a ,b = 10){
    console.log(a);
    console.log(b);
    console.log (a*b);
}

let z1 =34;
let z2 = 20;

multiplizieren(z1,z2 );

//Begrüßung

const begruessung = function(vorname= "Max", nachname = "Mustermann", alter =18){
    console.log(`Hallo ${vorname} ${nachname} du bist ${alter} Jahre alt `);
};

let vorname = "Gaby";
let nachname = "Schuster";
let alter = 45;

begruessung(vorname, nachname, alter);
begruessung();
begruessung(nachname, alter);