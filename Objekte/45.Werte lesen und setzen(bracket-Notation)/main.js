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

//Werte auslesen (Bracket-Notation)
let wert1 = konto1["iban"];
console.log(wert1);
let wert2 = konto2["inhaber"]["geschlecht"];
console.log(wert2);

//Eigenschaften setzen (Bracket-Notation)
konto2["abhebelimit"] =1000;
console.log(konto2["abhebelimit"]);

//Werte setzen bzw. verändern(Bracket-Notation)
konto1["kontostand"]=3000;
console.log(konto1["kontostand"]);

//Warum sollten wir die Bracket-Notation jemals verwenden?
let eigenschaft ="iban";
let wert3 = konto1[eigenschaft];
console.log(wert3);

//Challenge zum selber machen
/*- autoObjekt. von der letze Lektion einfügen
  -fügt Eigenschaft PS hinzu
  -verändert das Modell auf "Yaris"
  -gebt Template string "Ein ... hat ...PS." aus 
  -einer der Werte soll über einen String in einer Variablen ausgelesen werden
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
//-fügt Eigenschaft PS hinzu
autoObjekt["ps"] = 150;
console.log(autoObjekt["ps"]);
// -verändert das Modell auf "Yaris"
autoObjekt["modell"]="Yaris";
console.log(autoObjekt["modell"]);
//-gebt Template string "Ein ... hat ...PS." aus 
console.log(`Ein ${autoObjekt["marke"]} ${autoObjekt["modell"]} hat ${autoObjekt["ps"]}PS `);
// WICHTIG die "" nicht vergessen bei marke modell und ps!!!
//  -einer der Werte soll über einen String in einer Variablen ausgelesen werden
let eigenschaft2 = "ps";
let wert4 = autoObjekt[eigenschaft2];
console.log(wert4);




  
