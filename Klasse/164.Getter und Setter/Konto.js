"use strict";

class Konto{
   
    constructor (iban, inhaber, einzahlung){  // Initialisierung
        this.iban = iban;
        this.inhaber = [inhaber]; 
        this.saldo = einzahlung;
        this.aktiv = true;
        
    }
    einzahlen(einzahlung){
        this.saldo += einzahlung;
    }
    abheben(auszahlung){
        this.saldo -= auszahlung;
    }
    kontostand_abfragen(){
        return this.saldo;
    }
}

