"use strict";
// let auto_1 ={                   //SO NICHT ZU UMSTÄNDLICH!!!!
//     marke:"Hyunday",
//     modell:"i30n",
//     farbe: "rot"
// };
// let auto_2 ={
//     marke:"Toyota",
//     modell:"i30",
//     farbe: "rotorange"
// };
// let auto_3 ={
//     marke:"VW",
//     modell:"30n",
//     farbe: "blau"
// };
// let autos =[
//     auto_1,
//     auto_2,
//     auto_3
// ];
// console.log(autos);


//OBJEKTEN IN ARRAYS
let autos = [
  {
    marke: "Hyunday",
    modell: "i30n",
    farbe: "rot",
  },
  {
    marke: "Toyota",
    modell: "i30",
    farbe: "rotororange",
  },
  {
    marke: "VW",
    modell: "30n",
    farbe: "blau",
  },
];
console.log(autos[0].marke); //Hyundai
console.log(autos[1].modell); //i30
console.log(autos[2].farbe); //blau  oder so
console.log(autos[0]["marke"]); //Hyundai

// let waren = [    // Waren Array
//     [               //id=0
//       "Apfel",
//       "Birne",
//       "Banane"
//   ],
//     [                 //id=1
//       "Karotte",
//       "Sellerie",
//        "Kartoffel"],
//     [                  //id=2
//       "Roggenbrot",
//        "Weißbrot",
//        "Vollkornbrot"
//       ],
//   ];


//ARRAYS IN OBJEKTEN
let waren = {
  obst: ["Apfel", "Birne", "Banane"],
  gemuese: ["Karotte", "Sellerie", "Kartoffel"],
  brot: ["Roggenbrot", "Weißbrot", "Vollkornbrot"],
};

//ZUGREIFEN AUF DIE EINZELEIGENSCHAFTEN
console.log(waren.obst[1]);// Birne
console.log(waren.gemuese[2]);//Kartoffel
console.log(waren.brot[0]);//Roggenbrot