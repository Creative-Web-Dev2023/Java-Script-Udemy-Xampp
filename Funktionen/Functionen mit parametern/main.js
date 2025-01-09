"use strict";
/* Funktionsdeklaration 
const meineFunction = function (parameter1, parameter2) {
    auszuführende Code
};

meineFunction(p1, p2); // Aufruf der Funktion */

const log_die_zahl = function(a) {
    console.log(a);
};   
log_die_zahl(42); // 42const 

//begrüssung
const begruessung = function (vorname, nachname){
    console.log(`Hallo ${vorname} ${nachname}`)
};
let vor ="Max";
let nach = "Mustermann";
begruessung (vor, nach);


//Mathematik hausaufgabe
const mathe_magie = function (a,b){
    console.log(a + b);
    console.log(a - b);
    console.log(a * b);
    console.log(a / b);
    console.log(a % b);
}

let z1 = 24;
let z2 = 56;
let z3 = 34;
let z4 = 78;
let z5 = 32;

mathe_magie(z1, z5);
mathe_magie(z3, z2);
mathe_magie(z4, z3);
mathe_magie(z3, z1);
mathe_magie(z5, z4);