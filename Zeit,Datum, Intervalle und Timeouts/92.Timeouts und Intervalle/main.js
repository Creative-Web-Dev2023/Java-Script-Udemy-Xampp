"use strict";

//setTimeout(callback-fucntion,zeitspanne [, parameter1, parameter2...]) - ruft callback nach ms Millisekunden auf

console.log("Start");
setTimeout(function(){
    console.log("Fertig")
},2000);

//setTimeout(code-string,zeitspanne) - ruft code-string nach ms Millisekunden auf
console.log("Start");
console.log(setTimeout("console.log('Fertig')",2000));

// clearTimeout(1); //bricht Timeout ab

//INTERVAL - setInterval(callback-fucntion,zeitspanne [, parameter1, parameter2...]) - ruft callback alle ms Millisekunden auf

setInterval(function(){
    console.log("Interval");
},1000);

setInterval("console.log('Interval')",1000);

clearInterval(1); //bricht Interval ab
