"use strict";

let konto1 = {
    iban: "DE89370400440532013000",
    bic: "COBADEFFXXX",
    inhaber1: { vorname: "Max",
               nachname: "Mustermann",
               geschlecht:"männlich",
               alter:23,},
    kontostand: 1000,
    aktiv: true
};

let konto2 = {
    iban: "DE81370400440532013001",
    bic: "COBADEFFXXX",
    inhaber2:{ vorname:"Bernd",
            nachname:"Schuster",
             geschlecht:"männlich",
            alter:45,
             },
    kontostand: 2000,
    aktiv: true
};

// const kontostand_ausgeben = function(konto){
//  console.log(`${konto.inhaber.vorname} ${konto.inhaber.nachname} hat ${konto.kontostand} € auf dem Konto `)
// };
// kontostand_ausgeben(konto1);
// kontostand_ausgeben(konto2);

const geld_abheben = function(konto, betrag){
 konto.kontostand -= betrag;
 console.log(`Von dem Konto von ${konto.inhaber1.vorname} ${konto.inhaber1.nachname} wurden ${betrag}€ abgehoben.`);
};

geld_abheben(konto1, 245);
