"use strict";

let mein_array =[
    "Peter",
    "Mia",
    "Marc"
];

let mein_objekt ={
    name:"Max",
    vorname:"Mustermann",
    altaer:36
};

console.log(mein_array);
console.log(mein_objekt);

for (let eigenschaft in mein_array){
    console.log(eigenschaft);
}

for (let eigenschaft in mein_objekt){
    //console.log(mein_objekt[eigenschaft]);
    console.log(eigenschaft);
}

for(let wert of mein_array){
    console.log(wert);
}

//Geht nicht da einfacje Objekte nicht iterierbar sind
/*for (let wert of mein_objekt){
    console.log(wert);
}*/