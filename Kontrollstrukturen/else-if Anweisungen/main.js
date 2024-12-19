

/* if(Bedingung1) {
  Code der ausgeführt wird, wenn die Bedingung1 erfüllt(true) ist
} else {
  
  if(Bedingung2) {
    Code der ausgeführt wird, wenn die Bedingung2 erfüllt(true) ist
  } else {

    if(Bedingung3) {
        Code der ausgeführt wird, wenn die Bedingung 3 erfüllt(true) ist
      } else {
        Code der ausgeführt wird, wenn die Bedingung nicht erfüllt(false) ist
      }
  }
}

ist das gleiche wie oben nur übersichtlicher
if(Bedingung1) {
    Code der ausgeführt wird, wenn die Bedingung1 erfüllt(true) ist
} else if(Bedingung 2) {
    Code der ausgeführt wird, wenn die Bedingung2 erfüllt(true) ist
} else if (Bedingung 3){
    Code der ausgeführt wird, wenn die Bedingung3 erfüllt(true) ist
} else {
    Code der ausgeführt wird, wenn die Bedingung  nicht erfüllt(false) ist
}*/

// let mindestalter = 18;
// let benutzeralter = 42;

// if(benutzeralter >= mindestalter){ // Überprüfen ob >= mindestalter

//    if(benutzeralter == mindestalter){ 
//     console.log("Du bist gerade alt genug");
//    }else{
//     console.log("Du bist alt genug");
//    }
// } else{
//   console.log("Du bist noch nicht alt genug");
// }


let mindestalter = 18;
let benutzeralter = 17;

if(benutzeralter == mindestalter){
    console.log("Du bist gerade alt genug");
}else if(benutzeralter > mindestalter){
    console.log("Du bist alt genug");
}else{
    console.log("Du bist noch nicht alt genug");
}   
