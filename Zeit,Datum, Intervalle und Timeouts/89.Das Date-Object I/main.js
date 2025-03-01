"use strict";

let date = new Date();
console.log(date);

console.log(Date.now());  // returns the number of milliseconds since 1 January 1970 00:00:00 UTC

let e = new Date(1540827694172);
console.log(e);          // 2018-10-29T10:54:54.172Z

let f = new Date(" Jul 22 2016 08:00:00 GMT+0200");
console.log(f);          // 2016-07-22T06:00:00.000Z

let g = new Date("11.06.1993 14:34:32");
console.log(g);          // 1993-06-11T12:34:32.000Z

// new Date (jahr, monats-index[tag[stunde[minute[sekunde[millisekunde]]]]])
let h = new Date(1993, 5, 23, 15, 14, 12, 155);
console.log(h);          // 1993-06-01T22:00:00.000Z