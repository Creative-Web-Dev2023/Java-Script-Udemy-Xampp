"use strict";

//SET Methode= setzt ein Key-Value-Paar in die Map
let meineMap = new Map();
meineMap.set("Test", "Wert zu Eigenschaft Test");
meineMap.set(1, "Wert zu Eigenschaft 1");
meineMap.set([], "Wert zu Eigenschaft []");
meineMap.set(function(){}, "Wert zu Eigenschaft function(){}");
meineMap.set({}, "Wert zu Eigenschaft {}");
console.log(meineMap);     // Map(4) {"Test" => "Wert zu Eigenschaft Test", 1 => "Wert zu Eigenschaft 1", Array(0) => "Wert zu Eigenschaft []", ƒ => "Wert zu Eigenschaft {}"}

//Console.log: Map(4) {'Test' => 'Wert zu Eigenschaft Test', 1 => 'Wert zu Eigenschaft 1', Array(0) => 'Wert zu Eigenschaft []', ƒ => 'Wert zu Eigenschaft {}'}[[Entries]]0: {"Test" => "Wert zu Eigenschaft Test"}1: {1 => "Wert zu Eigenschaft 1"}
// 2: {Array(0) => "Wert zu Eigenschaft []"}
// 3: {function(){} => "Wert zu Eigenschaft {}"}size: 
// 4[[Prototype]]: Map

//GET Methode = gibt den Wert eines bestimmten Schlüssels zurück
meineMap.get("Test");       // "Wert zu Eigenschaft Test"
console.log(meineMap.get("Test"));        // Wert zu Eigenschaft Test
console.log(meineMap.get(1));             // Wert zu Eigenschaft 1
console.log(meineMap.get([]));             // undefined
console.log(meineMap.get(function(){}));  // undefined
console.log(meineMap.get({}));             // undefined

//HAS Methode = gibt true zurück, wenn ein Schlüssel in der Map vorhanden ist 
console.log(meineMap.has("Test"));        // true
console.log(meineMap.has(1));             // true
console.log(meineMap.has([]));             // false
console.log(meineMap.has(function(){}));  // false
console.log(meineMap.has({}));             // false

//DELETE Methode = löscht ein Key-Value-Paar aus der Map
meineMap.delete("Test");
console.log(meineMap);

//CLEAR Methode = löscht alle Key-Value-Paare aus der Map
meineMap.clear();
console.log(meineMap);      // Map(0) {}

//SIZE Methode = gibt die Anzahl der Key-Value-Paare in der Map zurück
console.log(meineMap.size);     // 0
