// Aufgabe: Kaffee von REWE holen => function getCoffee()
// DATA: allCoffees = [ "Melitta", "Dallmayr", "Tschibo", "Lavazza", "Illy", "Segafredo" ] => array
// INPUT: Melitta holen => coffeeName => string
// LOGIC: In ALLEN Coffees SUCHEN nach INPUT (coffeeName)
// => check if an item exist in an array
// => IF allCoffees INCLUDES coffeeName
// => allCoffees.includes( coffeeName )
// OUTPUT: Coffee exists => true / false => boolean

const allCoffees = [
  "Melitta",
  "Dallmayr",
  "Tschibo",
  "Lavazza",
  "Illy",
  "Segafredo",
]

// DEFINITION
const getCoffee = (coffeeName) => {
  return allCoffees.includes(coffeeName)
}


// TESTING
const result = getCoffee("Lavazza") // => true
console.log( result )

const result2 = getCoffee("Alpro") // => false
console.log(result2)
