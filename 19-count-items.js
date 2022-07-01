// CRUD => READ => filter out data

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
// X DATEN: allCoffees = [... coffees ...]
// X FUNCTION: countCoffees
// X INPUT: whole array to search in, coffeeType to search for
// OUTPUT: amount of items of that type => number
  // Example => Melitta => return 3
  // Example => Illy => return 1
// LOGIC:
// - X Habe Variable, die die Anzahl Items speichert
// - X LOOPE durch Array
// - X Checke jedes item ob es das gesuchte Item ist
// - X Wenn ja: zähle eins hoch
// - X wenn nein: weitermachen mit der loop => gar nichts machen => kein Else
// - X Ende der Function => return die Anzahl gefundener Items

const getCoffeeCount = (arr, coffeeName) => {

  let amount = 0

  for(let i=0; i<arr.length; i++) {

    if(arr[i] === coffeeName) {
      amount += 1 // amount++ || amount = amount + 1
    }
  }

  return amount
}

let result = getCoffeeCount(allCoffees, "Melitta") 
console.log( result ) // expect: 3

result = getCoffeeCount(allCoffees, "Milk") 
console.log( result ) // expect: 0

result = getCoffeeCount(allCoffees, "Tschibo") 
console.log( result ) // expect: 1