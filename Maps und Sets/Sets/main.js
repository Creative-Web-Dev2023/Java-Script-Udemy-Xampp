"use strict";

let meinSet = new Set();


//ADD Methode fügt Elemente hinzu
meinSet.add("Test");
meinSet.add("Test");
meinSet.add(1);
meinSet.add([]);
meinSet.add([]);
meinSet.add(function(){});
meinSet.add(function(){});
meinSet.add({});
meinSet.add({});
console.log(meinSet); // Set(5) { 'Test', 1, [], [Function], {} }

// HAS Methode prüft ob ein Element vorhanden ist
console.log(meinSet.has("Test"));    // true
console.log(meinSet.has("Beispiel"));       
console.log(meinSet.has(1));         // true
console.log(meinSet.has([]));     
console.log(meinSet.has(function(){})); 
console.log(meinSet.has({}));   

// DELETE Methode löscht ein Element
meinSet.delete("Test");
console.log(meinSet); // Set(4) { 1, [], [Function], {} }

// CLEAR Methode löscht alle Elemente
meinSet.clear();
console.log(meinSet); // Set(0) {}

// SIZE Methode gibt die Anzahl der Elemente zurück
console.log(meinSet.size); // 0






