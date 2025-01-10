"use strict";
//Rückgabewert-
const multiplizieren = function (a, b) {
   return a * b;

}

let z1 = 24;
let z2 =100;

//  let ergebnis = multiplizieren (z1, z2); // 2400
// console.log(multiplizieren (z1, z2));

// let ergebnis2 = multiplizieren(multiplizieren (z1, z2),multiplizieren (z1, z2)); //2400*2400 = 57600
console.log(multiplizieren(multiplizieren (z1, z2),multiplizieren (z1, z2)));
