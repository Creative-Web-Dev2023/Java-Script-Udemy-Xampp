"use strict";

let jumbo = document.querySelector(".jumbotron"); 

//CLICK-Event
jumbo.addEventListener("click", event => {
    console.log(event);
    console.log(event.clientX); // X-Koordinate des Mauszeigers
    console.log(event.clientY); // Y-Koordinate des Mauszeigers
    console.log(event.target);  // Element, auf das geklickt wurde
    //console.log(event.target.remove()); // Element entfernen
});    

//DOUBLE-CLICK-Event
jumbo.addEventListener("dblclick", event => {
    console.log("DBLCLICK!"); 
    console.log(event); 
});

//MOUSEDOWN-Event
jumbo.addEventListener("mousedown", event => {
    console.log("MOUSEDOWN!"); 
    console.log(event); 
});

//MOUSEUP-Event
jumbo.addEventListener("mouseup", event => {
    console.log("MOUSEUP!"); 
    console.log(event); 
});

//MOUSEOVER-Event
jumbo.addEventListener("mouseover", event => {
    console.log("MOUSEOVER!"); 
    console.log(event); 
});
//MOUSEOUT-Event
jumbo.addEventListener("mouseout", event => {
    console.log("MOUSEOUT!"); 
    console.log(event); 
});