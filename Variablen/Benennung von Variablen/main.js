"use strict"

let variable = "Meine Variable";    

// Regel 1:keine Leerzeichen
// let mein name = "Mein Name"; // Syntax Error

// Regel 2: keine Sonderzeichen nur Buchstaben, Zahlen und Unterstrich
// let name! = "Mein Name"; // Syntax Error

// Regel 3: Variablennamen dürfen nicht mit einer Zahl beginnen
// let 9name = "Mein Name"; // Syntax Error

// Regel 4: groß und kleinschreibung ist erlaubt (case-sensitive)
let name = "Mein Name"; // 
let Name = "Peter Pan"; //

console.log(name);
console.log(Name);

// Regel 5: Keine Umlaute schreiben
let hängematte = "Ferien"; // erlaubt aber nicht empfohlen
let haengematte = "Ferien"; // empfohlen

// Regel 6: Unterstrich sind als einziges Sonderzeichen erlaubt, statt Leerzeichen _ oder Camel Case
let meinName = "Peter Pan"; // Camel Case
let mein_name = "Peter Pan"; // Snake Case einzige erlaubte Sonderzeichen

// Regel 7: Variablennamen dürfen keine reservierten Wörter sein
// let let = "Ruben"; // Syntax Error, weil let ein reserviertes Wort ist