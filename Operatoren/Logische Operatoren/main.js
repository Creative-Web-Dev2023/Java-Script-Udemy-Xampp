"use strict"

// logische "und" &&
// logische "oder" ||
// logische "nicht" !


// logische "und" &&
// beide Bedingungen müssen erfüllt sein
console.log(1 > 0 && 4 < 6); // true
console.log(1 > 0 && 6 < 4); // false

// logische "oder" ||
// mindestens eine Bedingung muss erfüllt sein
console.log(1 > 0 || 4 < 6); // true
console.log(1 > 0 || 6 < 4); // true

// logische "nicht" !
// negiert die Bedingung
console.log(1 > 0&& !(6<4)); // true
console.log(!true); // false

console.log(1>0 && 4<6 && 10 < 20); // true
console.log(1>0 && 4<6 && 10 > 20); // false weil alle bedingungen erfüllt sein müssen

console.log(1>0 && 4<6 || 10 > 20); // true weil eine bedingung muss erfüllt sein
console.log(1>0 && 4>6 || 10 < 20); //true weil eine bedingung muss erfüllt sein

console.log(1>0 && 4<6 || 10 > 20 && 5 < 10); // true weil eine bedingung muss erfüllt sein

console.log(1<0 && 10<20 || 6>4 ); // true weil eine bedingung muss erfüllt sein
console.log(1<0 && (10<20 || 6>4)); // false weil alle bedingungen erfüllt sein müssen



