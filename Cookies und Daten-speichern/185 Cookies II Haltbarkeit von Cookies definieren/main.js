"use strict";

//Syntax: document.cookie =  "cookie_name =[cookie_wert] [;max-age=zeit_in_sec]"
document.cookie = "vorname = Max";
document.cookie = "nachname = Mustermann";
document.cookie =` ${encodeURIComponent("ein key; value-paare")}= ${encodeURIComponent("key = value")}`;
document.cookie = "10s_cookie=; max-age=10"; 
setTimeout(() => console.log(document.cookie), 9000);
setTimeout(() => console.log(document.cookie), 11000);
document.cookie = `mein_alter = 26; max-age = ${60 * 60 * 24 }`; //24 Stunden
 //max-age bedeutet, dass das Cookie nach der angegebenen Zeit gelöscht wird
document.cookie = `mein_alter = 26; max-age = ${60 * 60 * 24 * 365}`; //1 Jahr
const set_cookie = function(name, wert, haltbarkeit) {
    let cookie = `${encodeURIComponent(name)}=`;
   if (wert){
    cookie += `${encodeURIComponent(wert)}`;
   }
   if (haltbarkeit) {
    cookie += `; max-age=${haltbarkeit}`;
   }
   document.cookie = cookie;
};
set_cookie("passwort", "%A$g[}hm;", 60*60*2); // 2 Stunden
// console.log(document.cookie);