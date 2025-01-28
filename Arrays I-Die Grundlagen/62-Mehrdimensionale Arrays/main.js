"use strict";

// let obst =[
//     "Apfel",
//     "Birne",
//     "Banane",
// ];
// let gemuese =[
//     "Karotte",
//     "Sellerie",
//     "Kartoffel",
// ];
// let brot =[
//     "Roggenbrot",
//     "Weißbrot",
//     "Vollkornbrot",
// ];

// let waren = [
//     obst,
//     gemuese,
//     brot,
// ];
// console.log(waren); // Ausgabe: [ [ 'Apfel', 'Birne', 'Banane' ], [ 'Karotte', 'Sellerie', 'Kartoffel' ], [ 'Roggenbrot', 'Weißbrot', 'Vollkornbrot' ] ]

let waren = [
  [               //id=0
    "Apfel", 
    "Birne", 
    "Banane"
],
  [                 //id=1
    "Karotte", 
    "Sellerie",
     "Kartoffel"],
  [                  //id=2
    "Roggenbrot",
     "Weißbrot", 
     "Vollkornbrot"
    ],
];
console.log(waren[0][1]);// Birne
console.log(waren[1][2]); // Kartoffel
console.log(waren[2][0]); // Roggenbrot
