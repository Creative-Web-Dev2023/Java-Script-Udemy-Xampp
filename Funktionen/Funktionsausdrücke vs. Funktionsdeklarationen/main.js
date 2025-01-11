"use strict";

//Function Ausdrücke 
const function_1 = function(){
      console.log("Funktion1");
   };
   function_1();


   let function_2 = function(){
      console.log("Funktion2");
   };
   function_2();


   function_2 = function(){
      console.log("Funktion2(Neu)");
   }
   function_2();


   //Function Deklarationen werden gehoistet

   function funktion_3(){
      console.log("Funktion3");
   }
   funktion_3();
    

