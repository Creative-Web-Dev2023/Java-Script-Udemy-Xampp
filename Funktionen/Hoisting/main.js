"use strict";

//Hoisting: ist ein Mechanismus in JavaScript, bei dem Variablen und Funktionen in den Gültigkeitsbereich verschoben werden, in dem sie deklariert wurden.

/*let a;
a=5;
console.log(a); -> 5

let b;
console.log(b); -> undefined
b=10;
console.log(b); 

c=15;
console.log(c); -> ReferenceError: c is not defined
let c;
*/

var a;
var b;
var c; // -> 15

a = 5;
console.log(a); // -> 5


console.log(b); // -> undefined
b = 10;
console.log(b); // -> 10

c = 15;
console.log(c); // -> 15
var c; // -> 15

console.log(d); // -> undefined

if(true){
    var d = 20;
}
console.log(d); // -> 20

let e=25;
if(true){
    let e=30; 
    console.log(e); // -> 30  
  
}
console.log(e); // -> 25

var f=25;
if(true){
    var f=30; 
    console.log(f); // -> 30  
  
}
console.log(f); // -> 30
