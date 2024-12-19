"use strict"

console.log (42 == 42); // gleich gleich true boolean
console.log (42 == 43);// gleich gleich false boolean
console.log('---------------------------------');
console.log (42 != 42); // ungleich false boolean
console.log (42 != 43); // ungleich true boolean
console.log('---------------------------------');
console.log (42 > 42); // größer als false boolean
console.log (42 > 43); // größer als false boolean
console.log (42 > 41); // größer als true boolean
console.log('---------------------------------');
console.log (42 < 42); // kleiner als false boolean
console.log (42 < 43); // kleiner als true boolean
console.log (42 < 41); // kleiner als false boolean
console.log('---------------------------------');
console.log (42 >= 42); // größer gleich true boolean
console.log (42 >= 43); // größer gleich false boolean
console.log (42 >= 41); // größer gleich true boolean
console.log('---------------------------------');
console.log (42 <= 42); // kleiner gleich true boolean
console.log (42 <= 43); // kleiner gleich true boolean
console.log (42 <= 41); // kleiner gleich false boolean

console.log("42" === 42); // false weil 42 ist string und 42 ist number (strikt gleich)
console.log("42" !== 42); // true weil 42 ist string und 42 ist number (strikt ungleich)
