"use strict";

class Konto{
   
    constructor (iban, inhaber, einzahlung){
      // Initialisierung
      this._iban = iban; //_ ist ein private Attribut
      this._inhaber = [inhaber]; // _ ist ein private Attribut
      this._saldo = einzahlung;
      this._aktiv = true;
    }
     einzahlen(einzahlung){ //set fällt weg 
        this.saldo += einzahlung;
    }
     abheben(auszahlung){
        this.saldo -= auszahlung;
    }
     kontostand_abfragen(){// get fällt weg
       return this.saldo;
     }
}

