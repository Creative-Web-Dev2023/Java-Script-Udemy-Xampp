"use strict";

"use strict";

// SYNTAX Bedingung ? Ausdruck_1 : Ausdruck_2
// Wenn die Bedingung wahr ist, wird Ausdruck_1 ausgewertet, andernfalls Ausdruck_2

// if(Bedingung) {
//     // Wenn die Bedingung wahr ist
//   Ausdruck_1;
// } else {
//     // Wenn die Bedingung falsch ist
//   Ausdruck_2;
// }

let meineZahl = 9;

// if(meineZahl > 10) {
//     console.log("Die Zahl ist größer als 10");
// }else {
//     console.log("Die Zahl ist kleiner oder gleich 10");
// }

console.log(meineZahl > 10 ? "Die Zahl ist größer als 10" : "Die Zahl ist kleiner oder gleich 10");

//INLINE IF
let geschlecht = 1;

    //VIEL ZU LANG
//  if (geschlecht) {
//     console.log("Hallo Frau Mustermann");
//  } else {
//     console.log("Hallo Herr Mustermann");
//  }
  //BESSER KÜRZER
console.log(`Hallo ${geschlecht ? "Frau" : "Herr"} Mustermann`);
// console.log(geschlecht ? "Frau" : "Herr");

  //RETURN STATEMENT und TERNARY OPERATOR

  let fuehrerschein = true;
     //ZU LANG
//   const fuehrerscheinPruefung = function(){ 
//    if (fuehrerschein) {
//        return ("Darf Auto fahren");
//    } else {
//       return ("Darf  nicht Auto fahren");
//    }
//   };
//   console.log(fuehrerscheinPruefung());
  
  //BESSER KÜRZER
const fuehrerscheinPruefung = function(){ 
    return fuehrerschein ? "Darf Auto fahren" : "Darf nicht Auto fahren";
}
console.log(fuehrerscheinPruefung());


// MEHR ALS EINE BEDINGUNG 
let erdbeschleunigung = 15.2;
let panik = false;

erdbeschleunigung > 9.81 ? (panik = true, erdbeschleunigung =9.81) : (panik = false, erdbeschleunigung = 9.81);
console.log(erdbeschleunigung);
console.log(panik);

//LÄNGERE IF ELSE KONTRUKTE MIT TERNARY OPERATOR
let farbe ="gelb";

// if (farbe === "rot") {
//     console.log("Ich mag rot");
// }else if (farbe === "blau") {
//     console.log("Blau finde ich auch gut");      
// }else if (farbe === "grün") {
//     console.log("Grün mag ich nicht");
// }else{
//     console.log(`Zur Farbe ${farbe}habe ich keine Meinung`);
// }

  // BESSER KÜRZER
console.log(farbe === "rot" ? "Ich mag rot" : farbe === "blau" ? "Blau finde ich auch gut" : farbe === "grün" ? "Grün mag ich nicht" : `Zur Farbe ${farbe} habe ich keine Meinung`);
