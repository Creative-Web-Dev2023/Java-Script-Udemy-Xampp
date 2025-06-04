"use strict";


//Syntax: document.cookie =  "cookie_name =[cookie_wert] [;max-age=zeit_in_sec]"

//COOKIES SETZEN
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


 //COOKIES ÜBERSCHREIBEN
 set_cookie("zahlen", "1234", 60*60);
 set_cookie("zahlen", "5678", 60*60*1.5)

//COOKIES LÖSCHEN
const delete_cookie = function(name) {
    document.cookie = `${encodeURIComponent(name)}=; max-age=0`;
};
delete_cookie("ein key; value-paare");


//COOKIES AUSLESEN
const get_cookie = function(name) {
 let cookie_array = document.cookie.split("; ");
 let regex = new RegExp(`^\\s?${encodeURIComponent(name)}=`);
    for (let cookie of cookie_array) {
        if (cookie.match(regex)) {
            return decodeURIComponent(cookie.replace(regex, ""));
        }
    }

}
console.log(get_cookie("mein_alter")); // "mein_alter=26"
console.log(document.cookie);

//COOKIES PRÜFEN
const has_cookie = function(name) {
   let cookie_array = document.cookie.split("; ");
 let regex = new RegExp(`^\\s?${encodeURIComponent(name)}=`);
    for (let cookie of cookie_array) {
        if (cookie.match(regex)) {
            return true;
        }
    }
    return false;
}
console.log(has_cookie("nachname")); // true