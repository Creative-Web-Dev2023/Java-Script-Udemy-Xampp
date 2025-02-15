"use strict";

let personen = [
    "Peter",
    "Anna",
    "Marc",
    "Maximilian",
    "Mia"
];

for (let i = 0; i < personen.length; i++){
    console.log(`Hallo ${personen[i]}!`); // Ausgabe: Hallo Peter, Hallo Anna, Hallo Marc, Hallo Maximilian, Hallo Mia
}

for (let i = personen.length - 1; i >= 0; i--){
    console.log(`Tschuss${personen[i]}!`); // Ausgabe: Tschuss Mia, Tschuss Maximilian, Tschuss Marc, Tschuss Anna, Tschuss Peter
}



