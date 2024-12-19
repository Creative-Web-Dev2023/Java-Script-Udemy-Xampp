"use strict"

console.log("K" == "k"); // true
console.log("K" > "k"); // false
console.log("K" < "k"); // true
console.log("K" >= "L"); // false
console.log('-----------------');

console.log('Rubens' == 'Rubens'); // true
console.log('Rubens' == 'Rubens Winkler '); // false
console.log('Rubens' == 'RUBENS'); // false
console.log('-----------------');

console.log('Rubens' != 'Rubens'); // true
console.log('Rubens' != 'Rubens Winkler '); // true
console.log('Rubens' != 'RUBENS'); // true
console.log('-----------------');

console.log('Rubens' < 'Rubens'); // false
console.log('Rubens' < 'Rubens Winkler '); // true weil leerzeichen ist größer als Buchstaben
console.log('Rubens' < 'RUBENS'); // false immer vergleichen in ascii code  wo die buchstaben stehen
console.log('-----------------');

console.log('Rubens' > 'Rubens'); // false
console.log('Rubens' > 'Rubens Winkler '); //false
console.log('Rubens' > 'RUBENS'); // true
console.log('-----------------');

console.log('Rubens' <= 'Rubens'); // true
console.log('Rubens' <= 'Rubens Winkler '); // true
console.log('Rubens' <= 'RUBENS'); // false
console.log('-----------------');

console.log('Rubens' >= 'Rubens'); // true
console.log('Rubens' >= 'Rubens Winkler '); // false
console.log('Rubens' >= 'RUBENS'); // true
console.log('-----------------');

console.log('Peter' < 'Annabella'); // false weil P steht nach A also ist p kleiner als A 


