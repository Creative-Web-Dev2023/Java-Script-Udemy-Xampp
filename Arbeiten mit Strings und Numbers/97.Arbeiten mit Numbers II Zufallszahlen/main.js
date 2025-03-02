"use strict";

let minimum = 0;
let maximum = 255;

const zufallszahl = function(minim, maxim){
    return Math.floor(Math.random()*(maxim - minim +1) + minim);
}
console.log (zufallszahl(minimum, maximum )); // Zufallszahl zwischen 40 und 60

