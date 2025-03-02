"use strict";

let string =" Lorem ipsum dolor sit amet ipsum. ";

//length= Anzahl der Zeichen in einem String
string.length; // 34
console.log(string.length);

// indexOf = gibt den Index des ersten Vorkommens eines angegebenen Wertes in einem String zurück
string.indexOf("ipsum"); // 7
console.log(string.indexOf("ipsum", 20));  // 27

// lastIndexOf = gibt den Index des letzten Vorkommens eines angegebenen Wertes in einem String zurück
string.lastIndexOf("ipsum"); // 27
console.log(string.lastIndexOf("ipsum",10)); 

//includes = gibt true zurück, wenn ein String einen anderen String enthält, andernfalls false
string.includes("ipsum"); // true
console.log(string.includes("ipsum", 10)); // false

//toLowerCase = gibt den Wert des String in Kleinbuchstaben zurück
string.toLowerCase(); // " lorem ipsum dolor sit amet ipsum. "  
console.log(string.toLowerCase());

//toUpperCase = gibt den Wert des String in Großbuchstaben zurück
string.toUpperCase(); // " LOREM IPSUM DOLOR SIT AMET IPSUM. "      
console.log(string.toUpperCase());

//trim = gibt den Wert des String ohne Leerzeichen am Anfang und am Ende zurück
string.trim(); // "Lorem ipsum dolor sit amet ipsum."
console.log(string.trim());

//repeat = gibt den Wert des String wiederholt zurück
string.repeat(2); // " Lorem ipsum dolor sit amet ipsum. Lorem ipsum dolor sit amet ipsum. "
console.log(string.repeat(2));

