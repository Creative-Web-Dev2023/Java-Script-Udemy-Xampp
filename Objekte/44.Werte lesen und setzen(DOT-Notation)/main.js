"use strict";
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

//Werte auslesen (DOT-Notation)
let wert1= konto1.iban;
console.log(wert1);

let wert2= konto2.bic;
console.log(wert2);

let wert3 = konto1.inhaber.vorname;
console.log(wert3);
console.log(konto1.inhaber.nachname);
console.log(`${konto1.inhaber.vorname} ${konto1.inhaber.nachname} hat ${konto1.kontostand}€ auf seinem Konto`);

//Eigenschaften setzen (DOT-Notation)
konto1.abhebelimit = 500;
console.log(konto1);
console.log(konto1.abhebelimit);

//Werte setzen und verändern (DOT-Notation)
konto1.kontostand = 3500;
console.log(konto1.kontostand);

//Challenge zum selber machen
/*- autoObjekt. von der letze Lektion einfügen
  -fügt Eigenschaft PS hinzu
  -verändert das Modell auf "Yaris"
  -gebt Template string "Ein ... hat ...PS." aus 
   */
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
autoObjekt.ps = 150;
autoObjekt.modell="Yaris";
console.log(`Ein ${autoObjekt.marke} ${autoObjekt.modell} hat ${autoObjekt.ps}PS. `);
  
