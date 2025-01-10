"use strict";
//Gültigkeitsbereich ist der bereich in dem man zugriff auf eine variable hat.
// Globale Variablen: wird immer ausserhalb alle Codeblöcke definiert,ist überall zugänglich

//Codeblöcke=alles zwischen diese {}steht 
//Lokale Variable=wird immer innerhalb eines Codeblöcks definiert und nur in diesem und in 
//Codeblöcke die darin enthalten sind verfügbar

//Globalen Gültigkeitsbereich: variable_1
   //Lokaler Gültigkeitsbereich 1:variable_2
      //Lokaler Gültigkeitsbereich 1.1:variable_3
   //Lokaler Gültigkeitsbereich 2:variable_4 


let variable_1 = "Variable 1";

const meine_funktion = function(){
    let variable_2 = "Variable 2";

   
    if(true){
        let variable_3 = "Variable 3 ";
        console.log(variable_1);
        console.log(variable_2);
        console.log(variable_3);
       }

    console.log(variable_1);
    console.log(variable_2);
    console.log(variable_3);
}
meine_funktion();

console.log(variable_1);
console.log(variable_2);
console.log(variable_3);

if(true){
  let variable_4 ="Variable 4";
}