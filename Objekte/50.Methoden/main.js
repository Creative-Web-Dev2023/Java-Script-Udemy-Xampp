"use strict";

// let konto = {
//   iban: "DE89370400440532013000",
//   bic: "COBADEFFXXX",
//   inhaber: {
//     vorname: "Max",
//     nachname: "Mustermann",
//     geschlecht: "männlich",
//     alter: 23,
//   },
//   kontostand: 1000,
//   aktiv: true,
//   einzahlen(e) {
//     // this.kontostand = this.kontostand + e; kurz unten geschrieben
//     this.kontostand += e;
//   },
//   abheben(a) {
//     //this.kontostand = this.kontostand - a; //kurz unten geschrieben
//     this.kontostand -= a;
//   },
// };

// konto.einzahlen(1000);
// console.log(konto.kontostand);

//Challenge:Methode in Objekt einbauen
let person ={
    vorname: "Max",
    nachname: "Mustermann",
    alter: 23,

    Verarbeiten(){
    return {
        n :`${this.vorname}${this.nachname}`,
        z : `${this.vorname} ${this.nachname} (${this.alter}Jahre)`,
        b :`Hallo ${this.vorname} ${this.nachname}!`,
    }; 
    }
}

console.log(person.Verarbeiten ());
