"use strict";

let person ={
    vorname: "Max",
    nachname: "Mustermann",
    alter: 23,
}

const personVerarbeiten = function(p){
    return {
        n :`${p.vorname}${p.nachname}`,
        z : `${p.vorname} ${p.nachname} (${p.alter}Jahre)`,
        b :`Hallo ${p.vorname} ${p.nachname}!`,
    }; 
  
    }
   
console.log(personVerarbeiten(person));