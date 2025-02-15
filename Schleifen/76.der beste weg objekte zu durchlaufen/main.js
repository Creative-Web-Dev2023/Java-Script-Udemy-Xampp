"use strict";

let mein_objekt ={
    name:"Mustermann",
    vorname:"Max",
    alter:36
}

//SO NICHT!!!
/*for (let eigenschaft in mein_objekt){
    console.log(mein_objekt[eigenschaft]);
}*/

//ENTRIES
for(let paar of Object.entries(mein_objekt)){
    for(let eigenschaft of paar){
        console.log(eigenschaft);  
    }
}

//KEYS
for (let e of Object.keys(mein_objekt)){
    console.log(e);       //name,vorname,alter
}

//Values
for(let w of Object.values(mein_objekt)){
    console.log(w);
}