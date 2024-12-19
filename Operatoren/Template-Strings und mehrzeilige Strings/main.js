"use strict"

let vorname = "Max";
let nachname = "Mustermann" ;
let alter = 30;

let name = vorname + " " + nachname;
console.log(name);

let begruessung = `Hallo ${name}, wie geht es dir?`;
console.log(begruessung);

let zusammenfassung = ` ${vorname} ${nachname} ist ${alter} Jahre alt.`; // Template-String
console.log(zusammenfassung);

let mehrzeiligerString = `Hallo ${name},
Du bist ${alter} Jahre alt.
wie geht es dir?`;
console.log(mehrzeiligerString);

let konkatinierteTemplates = `Hallo ${name} ` + `Du bist ${alter} Jahre alt. ` + `wie geht es dir?;`
console.log(konkatinierteTemplates);
