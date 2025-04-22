"use strict";

let formular = document.querySelector("form");

//submit abschicken
//submit wird immer dann ausgelöst, wenn ein Formular abgeschickt wird
formular.addEventListener("submit", e => {
    e.preventDefault();
    console.log(e);
});

formular.addEventListener("reset", e => console.log(e));