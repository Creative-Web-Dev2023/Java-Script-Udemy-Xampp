"use strict";

//call-by-value (dt.: Übergabe als Wert):gilt für primitive Datentypen(String, Number, Boolean);
//call-by-Reference (dt.: Übergabe als Verweis/Rückverweis): gilt für komplexe Datentypen (Objekte, Funktionen, Arrays)

let meineVariable ="Gabriela";
let meinObjekt = {
    zahl: 42        
};

const meineFunktion = function(v, o){
    v = "Denis",
    o.zahl = 50

}
meineFunktion(meineVariable, meinObjekt);
console.log(meineVariable); // call-by-Value  
console.log(meinObjekt.zahl); // cal_by-reference

let konto = {
    iban: "DE89370400440532013000",
    bic: "COBADEFFXXX",
    inhaber: { vorname: "Max",
               nachname: "Mustermann",
               geschlecht:"männlich",
               alter:23,},
    kontostand: 1000,
    aktiv: true
};

const einzahlen = function (k, e){
    // k.kontostand = k.kontostand + e; kurz unten geschrieben
    k.kontostand += e;
};

const abheben = function (k, a){
 //k.kontostand = k.kontostand - a; //kurz unten geschrieben
 k.kontostand -=a;
};

einzahlen(konto, 500);
console.log(konto.kontostand);
abheben (konto, 500);
console.log(konto.kontostand);