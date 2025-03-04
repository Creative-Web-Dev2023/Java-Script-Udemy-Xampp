"use strict";

// Nodelists und HtmlCollections sind Arrays-ähnliche Objekte, die eine Liste von Nodes enthalten.
// Nodelists sind statisch, HtmlCollections sind dynamisch.
// Nodelists sind in der Regel das Ergebnis von Methoden wie querySelectorAll oder getElementsByTagName.
// HtmlCollections sind in der Regel das Ergebnis von Eigenschaften wie childNodes oder children.

//Html Collection
let HTMLCollection= document.getElementsByClassName("jumbotron");
let HTMLCollection1= document.getElementsByTagName("li");
console.log(HTMLCollection1);

// for-Schleife
for(let i = 0; i < HTMLCollection.length; i++){
    console.log(HTMLCollection[i]);
}

for(let i = 0; i < HTMLCollection1.length; i++){
    console.log(HTMLCollection1[i]);
}
// for-of-Schleife
for(let e of HTMLCollection){
    console.log(e);
}

for(let e of HTMLCollection1){
    console.log(e);
}

//Nodelist
let nodeList= document.querySelectorAll("p");
console.log(nodeList);

// for-Schleife
for(let i = 0; i < nodeList.length; i++){
    console.log(nodeList[i]);
}

// for-of-Schleife
for(let e of nodeList){
    console.log(e);
}

// forEach-Methode
nodeList.forEach(function(e){
    console.log(e);
});


