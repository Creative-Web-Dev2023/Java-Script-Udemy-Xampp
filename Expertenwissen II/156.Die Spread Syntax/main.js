"use strict";

// Für Functionen

 let meineZahlen = [44, 51, 36];

 const addieren = function(a, b, c) {
    console.log(a + b + c);
 }
    // addieren(meineZahlen[0], meineZahlen[1], meineZahlen[2]);

    // BESSER KÜRZER
     addieren(...meineZahlen);

// FÜR ARRAYS
 let kleinesArray =["apfel", "banane", "kiwi"];
//   let grossesArray = [ kleinesArray[0],kleinesArray[1],kleinesArray[2],  "orange", "weintraube"]; 
   // BESSER KÜRZER
 let grossesArray = [...kleinesArray, "orange", "weintraube"];
 let sehrGrossesArray = [...kleinesArray,"Kartoffel", ...grossesArray, "Melone"];
 console.log(grossesArray);
  console.log(sehrGrossesArray);
    
//FÜR OBJEKTE
let kleinesObjekt = {
    name: "Ein Objekt",
    groesse: 2,
    objekt:true,
}
let grossesObjekt = {
    betreff:"Spread Syntax",
    datum:new Date(),
    ...kleinesObjekt,
}
console.log(grossesObjekt);

//für Instanzen von Objekten
let datumsWerte =[2025, 11, 25];
//let Datum = new Date(datumsWerte[0], datumsWerte[1], datumsWerte[2]);
let Datum = new Date(...datumsWerte);
console.log(Datum);