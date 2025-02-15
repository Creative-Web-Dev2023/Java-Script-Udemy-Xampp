"use strict";
/* Schleifen: while-Schleifen 
while(Bedingung){
    //...Code
} */

let x = 0; // <--Zellvariable
while (x < 5) {
    // x++;
    console.log(`while: ${x}`);
   x++;  // while:0, while:1, while:2, while:3, while:4 
}

//VORSICHT VOR ENDLOSSSCHLEIFEN
// let y =0;
// while(y< 5){
//     console.log("TEST");
// }                           // TEST wird unendlich ausgegeben, weil y immer 0 ist und die Bedingung immer erfüllt ist.Der Browser stürzt ab.


let y = 0;
while(y>=0 && y < 100){
    console.log("TEST");  // endlos Schleife
    y++;
}