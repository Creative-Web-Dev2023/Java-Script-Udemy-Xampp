"use strict";

let x = 0;  // <--Zählvariable
while (x < 5){  // Bedingung
    console.log(x);
    x++;   // Anweisung für die Zählvariable
}

/*
for (Zählvariable; Bedingung; Anweisung){
    //...Code
} */

for (let i = 0; i < 5; i++){
    console.log(i);  // 0,1,2,3,4
}

for (let i = 0; i < 5; i++){
    if(i ==3){
        continue;
    } else if (i == 4){
        break;
    }
    console.log(i);  // 0,1,2
}
console.log("Ende");  // Ende

//VORSICHT for Endlosschleife
// for (let j = 0; j>=0; j++){
//     console.log(j);  // 0,1,2,3,4
// }

