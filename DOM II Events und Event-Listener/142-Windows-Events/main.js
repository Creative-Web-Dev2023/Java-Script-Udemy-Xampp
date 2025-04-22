"use strict";

//resize-Event die Größe des Fensters verändert wird
window.addEventListener("resize", e => {
    console.log(e);
}); 

//scroll-Event  wenn der Scrollbalken bewegt wird
window.addEventListener("scroll", e => {
    console.log(e);
    console.log(scrollY); //wichtig für responsive Design
    console.log(scrollX)
});

//load-Event wird gefeuert, wenn die Seite vollständig geladen ist
window.addEventListener("load", e => {
    console.log(e); 
});
