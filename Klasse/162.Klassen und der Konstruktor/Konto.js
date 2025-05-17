"use strict";

class Konto{
   
    constructor (iban, inhaber, einzahlung){  // Initialisierung
        this.iban = iban;
        this.inhaber = [inhaber]; 
        this.saldo = einzahlung;
        this.aktiv = true;
        
    }
}

// class Tiere{
//     constructor(name,color,art){
//         this.name = name;
//         this.color= color;
//         this.art = [art];
//         this.lebendig = true;
//     }
// }