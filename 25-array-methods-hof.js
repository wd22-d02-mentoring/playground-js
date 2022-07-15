// HOF
// forEach => manipulieren oder displayen
// map
// - kreiren eine COPY des Array und manipulieren items (leave original untouched)
// - convert each entry into some different format

const coffees = [
  { name: "Krema", price: 7.99 },
  { name: "Espresso", price: 1.29 },
  { name: "Flat White", price: 1.49 },
  { name: "Cappuccino", price: 1.49 },
  { name: "Latte Macchiato", price: 1.69 },
]

// display
// update all items (=> original)
const result = coffees.forEach( (currentCoffee) => {
  console.log(currentCoffee.name)
  currentCoffee.price += 0.5
})

// console.log(result) // undefined => forEach does not return anything!

// map => convert format into new format
const coffeesNew = coffees.map( (currentCoffee) => {
  return currentCoffee.name // => return just name into new array
  // return { name: currentCoffee.name } // if we want to return a new / transformed object
})

console.log(coffeesNew)


// map => update coffee prices (but dont change the original please!)
let coffeesUpdated

// map loop durch items und gibt aktuelles item immer in die callback function
// in callback function erzeugen wir eine COPY des originals
// wir manipulieren die copy
// und geben die Copy zurück
coffeesUpdated = coffees.map( (currentCoffee) => {
  // currentCoffee.price += 3.0 // dont touch the original! we talk soon
  return { ...currentCoffee, price: currentCoffee.price + 1  }
})

// DIMA version ;)
coffeesUpdated = coffees.map(({ price, ...coffee  }) => {
  return { ...coffee, price: price + 1 }
})


// change all names to uppercase + another price increase
coffeesUpdated = coffees.map((currentCoffee) => {
  // currentCoffee.price += 3.0 // dont touch the original! we talk soon

  return { ...currentCoffee, price: currentCoffee.price + 1 }

  // ALTERNATIVE - in drei Steps
  // const coffeeCopy = { ...currentCoffee } // erzeuge copy
  // coffeeCopy.price = coffeeCopy.price + 1 // manipuliere copy
  // return coffeeCopy // gebe copy zurück
})


console.log(coffees)
console.log(coffeesUpdated)



// FILTER all coffees by a certain condition
  // { name: "Krema", price: 7.99 }, => price >= 1.50

const coffeesFiltered = coffees.filter( (coffee) => {
  return coffee.price >= 2
})

console.log(coffeesFiltered)

