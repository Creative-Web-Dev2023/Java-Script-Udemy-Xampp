"use strict";

console.log(location); // URL-Objekt des aktuellen Dokuments

console.log(location.href); // Aktuelle URL des Dokuments
//location.href = "https://www.google.de"; // Ändert die URL des Dokuments und lädt die Seite neu
console.log(location.protocol); // Protokoll der URL (z.B. http:, https:)
console.log(location.hostname); // Hostname der URL (z.B. www.example.com)
console.log(location.pathname); // Port der URL (z.B. 80, 443)
console.log(location.search); // Port der URL (z.B. /path/to/resource)
console.log(location.hash); // Port der URL (z.B. ?query=string)

//location.reload(); // Lädt die Seite neu
location.assign("https://www.google.de"); // Ändert die URL des Dokuments und lädt die Seite neu
location.replace("https://www.google.de"); // Ersetzt die aktuelle URL durch eine neue URL ohne Verlaufseintrag