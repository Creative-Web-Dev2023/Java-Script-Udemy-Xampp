"use strict";

//this referenziert das Obj. in dessen Kontext es aufgerufen wird
let person_1 = {
    vorname: "Anna",
    nachname: "Musterfrau",
    alter: 24,
   meine_methode() { console.log(this); }
};
person_1.meine_methode(); 

//durch nutzung von this innerhalb einer Funktion "fällt das this aus dem Kontext"
//im strict mode ist es undefined
//im non-strict mode ist es das globale Objekt (window)
let person_2 = {
    vorname: "Anna",
    nachname: "Musterfrau",
    alter: 24,
    meine_methode() { 
        const meine_funktion =function() {console.log(this); }; 
        meine_funktion(); // undefined
    }
};
person_2.meine_methode();

//Pfeil-Funktionen erhalten den kontext zum Obj. in dem sie erstellt werden
let person_3 = {
    vorname: "Anna",
    nachname: "Musterfrau",
    alter: 24,
    meine_methode() { 
        const meine_funktion = ()=>console.log(this); 
        meine_funktion();
    }
};
person_3.meine_methode();

//Wann nutze ich normale und wann Pfeil-Funktionen?
   //auf globale Ebene in Code -->normale Funktionen
    //innerhalb von Objekten --> Pfeil-Funktionen
    //in Call-Backs --> Pfeil-Funktionen
    //in Event-Handlern --> Pfeil-Funktionen
    //allgemein immer bei this --> Pfeil-Funktionen
    