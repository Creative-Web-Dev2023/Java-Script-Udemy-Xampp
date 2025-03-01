"use strict";

let date = new Date();
console.log(date);

// date.toLocalString() gibt das Datum in der lokalen Zeitzone aus
//date.toLocaleString([schema [ optionen]]);

let de_De = date.toLocaleString("de-DE");
let en_US =date.toLocaleString("en-US");
console.log(de_De);
console.log(en_US);

;
let de_De_2 = date.toLocaleString("de-DE", {
    year: "numeric",
    month: "long",
    day: "numeric",
    weekday: "long",
    hour: "numeric",
    minute: "2-digit",
    second: "2-digit",
});
console.log(de_De_2);


//toLocaleDateString() gibt nur das Datum aus
let de_DE_datum = date.toLocaleDateString("de-DE",{
    year: "numeric",
    month: "long",
    day: "numeric",
    weekday: "long",
});
console.log(de_DE_datum);

//toLocaleTimeString() gibt nur die Zeit aus
let de_DE_zeit = date.toLocaleTimeString("de-DE",{  
    hour: "numeric",
    minute: "2-digit",
    second: "2-digit",
});
console.log(de_DE_zeit);
