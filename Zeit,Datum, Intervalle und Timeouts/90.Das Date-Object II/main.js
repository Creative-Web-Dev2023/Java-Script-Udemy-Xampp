"use strict";

let date = new Date();

date.setFullYear(1995);
date.setMonth(11);
date.setDate(17);
date.setHours(3);
date.setMinutes(24);
date.setSeconds(0);
date.setMilliseconds(0);
console.log(date);


console.log(date.getFullYear());
console.log(date.getMonth());
console.log(date.getDate());
console.log(date.getHours());
console.log(date.getMinutes());
console.log(date.getSeconds());
console.log(date.getMilliseconds());

let dateUtc = new Date();

dateUtc.setUTCFullYear(1995);
dateUtc.setUTCMonth(11);
dateUtc.setUTCDate(17);
dateUtc.setUTCHours(3);
dateUtc.setUTCMinutes(24);
dateUtc.setUTCSeconds(0);
dateUtc.setUTCMilliseconds(0);

console.log(dateUtc);

console.log(date.getUTCFullYear());
console.log(date.getUTCMonth());
console.log(date.getUTCDate());
console.log(date.getUTCHours());
console.log(date.getUTCMinutes());
console.log(date.getUTCSeconds());
console.log(date.getUTCMilliseconds());

let dateUnix = new Date();

dateUnix.setTime(819170640000);
console.log(dateUnix);

console.log(dateUnix.getTime());
