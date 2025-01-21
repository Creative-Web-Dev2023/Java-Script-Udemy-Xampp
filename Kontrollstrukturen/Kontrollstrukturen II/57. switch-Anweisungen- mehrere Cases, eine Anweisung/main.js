"use strict";

let essen = "Steak";

switch (essen) {
  case "Nudeln":
  case "Pizza":
  case "Steak":
    console.log("Das mag ich");
    // break;
  case "Hummer":
  case "Kaviar":
  case "Fisch":
    console.log("Das mag ich nicht!");
    break;
  default:
    console.log(`Ich kenne ${essen} nicht! Was ist das?`);
    break;
}
