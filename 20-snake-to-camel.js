// console.log( "carola zapp geht über die straße".split(" ") )
// console.log( "carola_zapp_straße".split("_") )

const arrItems = [
  // "Melitta_abc", // "MelittaAbc"
  "carola_zapp", // carolaZapp" // snake to camel
  "hallo_welt", // halloWelt
  "tschibo_kaffee", // tschiboKaffee
]
/**
 * OUTPUT
 * 
  "carolaZapp",
  "halloWelt",
  "tschiboKaffee"
]

 */

const snakeToCamel = (arr) => {
  const arrCamels = [] // empty array

  // LOOP => Logic
  for (let i = 0; i < arr.length; i++) {

    // create "partly solutions" and store each part in variable
    const splittedItem = arr[i].split("_")
    const secondPart = splittedItem[1]
    const firstLetter = secondPart[0].toUpperCase()
    const restCamel = secondPart.slice(1)

    // concatenate parts to the new item
    const camelCasedItem = splittedItem[0] + firstLetter + restCamel

    // store created result in array
    arrCamels.push(camelCasedItem) 
  }

  return arrCamels
}

// FUNCTION: snakeToCamel
// DATA: array of strings
// INPUT: whole array to change
// OUTPUT: whole array with same amount of items => each item camel cases!
// - pro Item: wir brauchen drei Teilstrings => am Ende alle concatenaten zu einem neuen String => return
// - Beispiel: aus "hallo_welt" => 3 zwischensteps: "hallo" + "W" + "elt" => zu "halloWelt"
// LOGIC:
// - Loope durch den Array
// - für jedes Item:
//   - 1) finde unterstrich und "lösche" unterstrich
//   - 2) letter NACH _ soll uppercase werden
// - für jedes Item (more detailed)
//      - splitte string nach "_" in array mit zwei substrings
//      - Beispiel: hallo_welt => split => ["hallo", "welt"]
//      - nehme item 2 aus array und speichere für Verarbeitung => "welt"
//      - mache ersten Letter von String uppercase => str[0] => "w" .toUpperCase()
//      - nehme REST von Item 2 NACH erstem Letter => item[1].slice(1)
//      - endresult: concatenate alle Teilergebnisse: "hallo" + uppercase "W" + "elt" => halloWelt
// - sammele neue Items in einem neuen Array und returne diesen am Ende
//   - brauchen array variable bevor wir anfangen zu loopen
//   - jedes umgewandelte item in array pushen

console.log(arrItems)
let result = snakeToCamel(arrItems)
console.log(result)
