"use strict";

let personen = [  
    "Sebastian",
    "Marcel",
    "Maria",
    "Mia",
    "Marcel",
    "Dennis"
];

//includes():Sucht nach einem Element im Array und gibt true zurück, wenn es gefunden wurde, ansonsten false
//Syntax: includes(Suchwert, StartIndex )
// nicht destruktiv
console.log(personen.includes("Marcel")); // true 
console.log(personen.includes("Marcel", 2)); 

//indexOf(): Sucht nach einem Element im Array und gibt den Index des ersten Vorkommens zurück, ansonsten -1
//Syntax: indexOf(Suchwert, StartIndex )
// nicht destruktiv=> verändert das Array nicht

console.log(personen.indexOf("Marcel")); // 1
console.log(personen.indexOf("Marcel", 2)); 
console.log(personen.indexOf("Marcel", 3)); 


//lastIndexOf(): Sucht nach einem Element im Array und gibt den Index des letzten Vorkommens zurück, ansonsten -1
//Syntax: lastIndexOf(Suchwert, StartIndex )
// nicht destruktiv=> verändert das Array nicht, beginnt von hinten also von Denis

console.log(personen.lastIndexOf("Marcel")); 
console.log(personen.lastIndexOf("Marcel", 3)); 
console.log(personen.lastIndexOf("Marcel", 0)); //-1
