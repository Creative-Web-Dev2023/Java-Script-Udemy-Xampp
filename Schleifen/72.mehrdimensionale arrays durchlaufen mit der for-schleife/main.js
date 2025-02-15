"use strict";

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

  // for(let i = 0; i < 9; i++){
  //   console.log(`Ich mag ${waren[i]}`);
  // }

  for(let i =0; i < waren.length; i++){
    for(let j = 0; j < waren[i].length; j++){
      console.log(waren[i][j]);
    }
  }






