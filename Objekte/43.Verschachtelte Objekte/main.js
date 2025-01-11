"use strict";

"use strict";
/*
//Inhaber Objekt(Vorname, Nachname, Geschlecht, Alter)
let inhaber1 = {
    vorname: "Max",
    nachname: "Mustermann",
    geschlecht:"männlich",
    alter:23,
    
};
console.log(inhaber1);

let inhaber2 = {
    vorname:"Bernd",
    nachname:"Schuster",
    geschlecht:"männlich",
    alter:45,
}
console.log(inhaber2);
*/


//Konto Objekt(iban, bic, inhaber, kontostand, aktiv)
/* let iban ="DE89370400440532013000";
 let bic = "COBADEFFXXX";
  let kontostand = 1000;
let aktiv = true;*/

let konto1 = {
    iban: "DE89370400440532013000",
    bic: "COBADEFFXXX",
    inhaber: { vorname: "Max",
               nachname: "Mustermann",
               geschlecht:"männlich",
               alter:23,},
    kontostand: 1000,
    aktiv: true
};
console.log(konto1);

let konto2 = {
    iban: "DE81370400440532013001",
    bic: "COBADEFFXXX",
    inhaber:{ vorname:"Bernd",
            nachname:"Schuster",
             geschlecht:"männlich",
            alter:45,
             },
    kontostand: 2000,
    aktiv: true
};
console.log(konto2);

let autoObjekt = {
    marke:"Toyota",
    modell:"Corolla",
    kraftstoffart:"Diesel",
    kilometerstand:80001,
    ausstatung:{
        navigationsytsem:true,
        klimanlage:true,
        sitzheizung:false,
        tempomat:true,
        panaromadach:false,
    },
   zustand:"gebraucht",
   preis:15000,
}
console.log(autoObjekt);
