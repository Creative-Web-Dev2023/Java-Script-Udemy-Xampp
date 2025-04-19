"use strict";


//Methoden des windows-Objekts
// alert("Achtung!"); // zeigt ein modales Dialogfeld mit einer Nachricht an
// confirm("Sind Sie sicher?"); // zeigt ein modales Dialogfeld mit einer Bestätigungsnachricht an
// prompt("Geben Sie Ihren Namen ein:"); // zeigt ein modales Dialogfeld mit einem Eingabefeld an

//print(); // druckt den aktuellen Inhalt des Fensters aus (öffnet den Druckdialog)
// open("https://www.google.com"); // öffnet eine neue Registerkarte mit der angegebenen URL
// close(); // schließt das aktuelle Fenster (funktioniert nur, wenn das Fenster mit JavaScript geöffnet wurde)


let nav = document.querySelector("#navigation");
let nav_styles = getComputedStyle(nav);
console.log(nav_styles);