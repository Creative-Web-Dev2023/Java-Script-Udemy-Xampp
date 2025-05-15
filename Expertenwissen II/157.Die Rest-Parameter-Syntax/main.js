"use strict";

// const addieren =function (array) {
//     let summe = 0;
//     array.forEach(e => summe += e);
//     return summe;
//     };
//    console.log(addieren([1, 2, 3, 4, 5])); // 15 

// const addieren =function (...summanden) {
//     let summe = 0;
//     summanden.forEach(e => summe += e);
//     return summe;
//     };
//    console.log(addieren([1, 2, 3, 4, 5])); // 15 

   const personenAddieren =function (name_1, name_2, ...punkte) {
    let summe = 0;
    punkte.forEach(e => summe += e);
    return `${name_1} + ${name_2} haben zusammen ${summe} gesammelt`;
    };
    console.log(personenAddieren("Jan", "Mona", 56, 89, 13, 67, 98, 100,156,76));