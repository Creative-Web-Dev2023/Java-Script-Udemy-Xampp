"use strict";

"use strict";
/* Schleifen: while-Schleifen 
while(Bedingung){
    //...Code
} */

// let x = 0; // <--Zellvariable
// while (x < 5) {
//     // x++;
//     console.log(`while: ${x}`);
//    x++;  // while:0, while:1, while:2, while:3, while:4 
// }

//VORSICHT VOR ENDLOSSSCHLEIFEN
// let y =0;
// while(y< 5){
//     console.log("TEST");
// }                           // TEST wird unendlich ausgegeben, weil y immer 0 ist und die Bedingung immer erfüllt ist.Der Browser stürzt ab.


// let y = 0;
// while(y>=0 && y < 100){
//     console.log("TEST");  // endlos Schleife
//     y++;
// }

let z = 0;
while(z < 10){
    z++;
    if(z == 5){
        continue;           // continue überspringt die aktuelle Iteration und fährt mit der nächsten fort
    } else if (z == 7){
        break;      
              }          // break beendet die Schleife
    console.log(z);
}   // 1,2,3,4,6
console.log("Ende"); // Ende



