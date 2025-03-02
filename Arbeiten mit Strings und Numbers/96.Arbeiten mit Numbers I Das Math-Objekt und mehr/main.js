"use strict";

console.log(Math); 

//Kreisflächeberechnen von einem Kreis 
  //A=PI * r^2
  let a = Math.PI * Math.pow(12,2);
  console.log(a);

//Runden 
let aRound = Math.round(a);
console.log(aRound);    //452

//Abrunden  =
let aFloor = Math.floor(a);
console.log(aFloor);    //452

//Aufrunden
let aCeil = Math.ceil(a);
console.log(aCeil);     //453

//toFixed = bedeutet wie viele Nachkommastellen, gibt eine String zurück
let aFixed = a.toFixed(2);
console.log(aFixed);    //452.39

//STANDARD-METHODEN
 //Strings in Numbers umwandeln
//parseInt = gibt die ganze Zahl zurück
  let a_integer = parseInt(aFixed);
  console.log(a_integer); //452

//parseFloat = gibt die Kommazahl zurück
  let a_float = parseFloat(aFixed);
  console.log(a_float);   //452.39



