"use strict";

/*let zahlen = [1,20, 2000, 100000, 50];
let neuSortiert = zahlen.sort();
console.log(neuSortiert);*/

//Die sort()-Methode für Arrays wandelt Elem. des Arrays standardsmäßig in strings um und vergleicht diese
let worte =["Zahl", "Wahnsinn", "Mangel", "Abspann"];
let worteNeu =worte.sort();
console.log(worteNeu);

//für das sortieren von Zahlen-Arrays sollte deshalb eine Vergleichsfunktion genutzt werden
//Ist Rückgabewert der Vergleichsfunkt. < 0, wird a auf einen niedrigeren Index als b gesetzt
//Ist Rückgabewert der Vergleichsfunkt. > 0, wird a auf einen höheren Index als b gesetzt
//Ist Rückgabewert der Vergleichsfunkt. = 0, bleibt alles wie es ist
//return a - b sortiert in aufsteigender Reihenfolge
// return b - a sortiert in absteigender Reihenfolge

let zahlen = [1,20, 2000, 100000, 50];
let zahlenNeu = zahlen.sort(function(a, b){
    //  return a - b ; // 1, 20, 50, 2000, 1000000
     return b-a;  // 1000000, 2000, 50, 20, 1
});
console.log(zahlenNeu);





