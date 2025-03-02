"use strict";

let string = " Lorem ipsum dolor sit amet ipsum. ";


let regex =/i\w{4}/g;
//search = sucht nach einem bestimmten String und gibt die Position zurück
console.log(string.search(regex)); //6

//replace = ersetzt einen bestimmten String durch einen anderen
console.log(string.replace(regex, "opsum")); // Lorem opsum dolor sit amet ipsum.

//match = sucht nach einem bestimmten String und gibt diesen zurück
console.log(string.match(regex)); //ipsum

