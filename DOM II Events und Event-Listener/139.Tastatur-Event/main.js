"use strict"; 

//keydown Event
document.addEventListener("keydown", event => {
    //console.log(event);
    if(event.key === "@"){
        console.log("Das @-Zeichen wurde gedrückt.");
    }
});

//keyup Event
document.addEventListener("keyup", event => {
    if(event.key === "p"){
        console.log("Das p wurde losgelassen.");
    }
});

// keypress Event hört nicht auf Shift, Fn und CapsLock
document.addEventListener("keypress", event => {
    // if(event.key === "a"){
    //     console.log("Das a wurde gedrückt.");
    // }
    console.log(event);
});
