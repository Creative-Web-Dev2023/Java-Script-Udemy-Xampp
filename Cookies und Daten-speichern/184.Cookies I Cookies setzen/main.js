"use strict";


//Syntax: document.cookie =  "cookie_name =[cookie_wert]""

document.cookie = "vorname = Max";
document.cookie = "nachname = Mustermann";
document.cookie =` ${encodeURIComponent("ein key; value-paare")}= ${encodeURIComponent("key = value")}`;

const set_cookie = function(name, wert) {
    let cookie = `${encodeURIComponent(name)}=`;
   if (wert){
    cookie += `${encodeURIComponent(wert)}`;
   }
   document.cookie = cookie;
};
set_cookie("passwort", "%A$g[}hm;");
console.log(document.cookie);