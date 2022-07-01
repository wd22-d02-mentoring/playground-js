const allCoffees = [
  "Melitta",
  "Dallmayr",
  "Tschibo",
  "Lavazza",
  "Melitta",
  "Melitta",
  "Illy",
  "Segafredo",
]

// get COUNT of all coffees of a type
// DATEN: allCoffees = [... coffees ...]
// FUNCTION: countCoffees
// INPUT: whole array to search in, coffeeType
// OUTPUT: amount of items of that type
  // Example => Melitta => return 3
  // Example => Illy => return 1
// LOGIC:
// - Habe Variable, die die Anzahl Items speichert
// - LOOPE durch Array
// - Checke jedes item ob es das gesuchte Item ist
// - Wenn ja: zähle eins hoch
// - wenn nein: weitermachen mit der loop => gar nichts machen
// - Ende der Function => return die Anzahl gefundener Items