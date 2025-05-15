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
