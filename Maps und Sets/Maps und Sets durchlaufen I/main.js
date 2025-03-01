"use strict";

let meineMap =new Map();
meineMap.set("Test","Wert der Eigenschaft Test");
meineMap.set(13, "Wert der Eigenschaft 13");
meineMap.set([], "Wert der Eigenschaft []");
meineMap.set(function(){}, "Wert der Eigenschaft function(){}");
meineMap.set({}, "Wert der Eigenschaft {}");
console.log(meineMap);

let meinSet = new Set();
meinSet.add("Test");
meinSet.add(13);
meinSet.add([]);
meinSet.add(function(){});
meinSet.add({});
console.log(meinSet);


meineMap.forEach(function(wert, eigenschaft, map){
    console.log(wert);
    console.log(eigenschaft);
    console.log(map);
});
meinSet.forEach(function(wert,NULL, set){
    console.log(wert);
    console.log(set);
});

for (let paar of meineMap){
    console.log(paar);
}

// [eigenschaft, wert]
for (let [eigenschaft, wert]of meineMap){
    console.log(eigenschaft);
    console.log(wert);
}
    
for (let wert of meinSet){
    console.log(wert);
}