"use strict";

let auto_1 ={
    marke:"BMW",
    model:"i8"
};

let auto_2 ={
    marke:"Opel",
    model:"Calibra"
};

let auto_3 ={
    marke:"Opel",
    model:"Calibra"
};

console.log(auto_1== auto_2); //false
console.log(auto_2== auto_3);  //false
console.log(auto_3== auto_3); //true
console.log({}=={});


const autos_vergleichen = function(o1, o2){
  if(o1.marke == o2.marke && o1.modell == o2.modell){
    return true;
}else{
 return false;
}
};

console.log(autos_vergleichen(auto_2, auto_3)); //false
console.log(autos_vergleichen(auto_1, auto_3));