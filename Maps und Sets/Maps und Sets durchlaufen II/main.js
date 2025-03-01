"use strict";

let meineMap =new Map();
meineMap.set("Test","Wert der Eigenschaft Test");
meineMap.set(13, "Wert der Eigenschaft 13");
meineMap.set([], "Wert der Eigenschaft []");
meineMap.set({}, "Wert der Eigenschaft {}");
meineMap.set(function(){}, "Wert der Eigenschaft function(){}");
console.log(meineMap);

let meinSet =new Set();
meinSet.add("Test");
meinSet.add(13);
meinSet.add([]);
meinSet.add({});
meinSet.add(function(){});
console.log(meinSet);

// console.log(meineMap.entries());
// console.log(meineMap.keys());
// console.log(meineMap.values());

// console.log(meinSet.entries());
// console.log(meinSet.keys());
// console.log(meinSet.values());

//Über MAPS iterieren
for (let paar of meineMap.entries()){
    console.log(paar);
}
for (let key of meineMap.keys()){
    console.log(key);
}
for (let value of meineMap.values()){
    console.log(value);
}

//Über SETS iterieren
for(let wert of meinSet.values()){
    console.log(wert);
}