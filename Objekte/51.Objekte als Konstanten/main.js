"use strict";

const person ={
    vornamen:"Max",
    nachnamen:"Mustermann",
    alter: 22
}
person.vorname = "Peter";
person.haarfarbe="braun";
delete person.haarfarbe;
console.log(person);

