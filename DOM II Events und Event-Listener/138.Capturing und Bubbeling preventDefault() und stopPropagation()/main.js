"use strict";

//Capturing und Bubbeling
   //dt. Auffangen und Blubbern
   let element_1 = document.querySelector("#navigation > ul > li:nth-of-type(1) > a");
   let element_1_parent = element_1.parentElement;
   let element_2 = document.querySelector("#navigation > ul > li:nth-of-type(2) > a");
   let element_2_parent = element_2.parentElement;

   //bubbeling
     element_1.addEventListener("click",event => {
        //preventDefault() 
        event.preventDefault(); // verhindert das Standardverhalten des Links
        console.log("element_1 hat es mitbekommen!!");
     });
     element_1_parent.addEventListener("click",event => {
      console.log("element_1_parent hat es mitbekommen!!");
    });
    element_2.addEventListener("click",event => {
         //stopPropagation
        event.stopPropagation(); // stoppt die Weitergabe des Events an die Eltern-Elemente
        console.log("element_2 hat es mitbekommen!!");
        });
    element_2_parent.addEventListener("click",event => {
        console.log("element_2_parent hat es mitbekommen!!");
        });
