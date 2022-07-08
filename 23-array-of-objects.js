const coffees = [
  { name:"Crema", price: 7.99 },
  { name:"Espresso", price: 1.29},
  { name:"Flat White", price: 1.49 },
  { name:"Cappuccino", price: 1.49 },
  { name:"Latte Macchiato", price: 1.69 },
]

// CRUD => CREATE | READ / FILTER | UPDATE | DELETE

// CREATE
const iceCoffee = { name:"Eiskaffee", price: 1.99}
coffees.push(iceCoffee)
console.log(coffees)

// LOOP THEORY
// for..in => loope durch OBJECT keys
// for..of =>  loope durch ARRAY


// READ

// READ Operation
// get all coffess with price >= 1.30
// Loop through all coffees
// identify coffees we are looking for by a criteria (=if)
// collect items which match condition in a new array

const filterCoffeesByPrice = (coffees, priceMin) => {
  const coffeesPricy = [] 
  for( let coffee of coffees ) { // let item of array
    // coffee == coffees[i] => die for..of loop speichert das aktuelle Item in der Loop in der Variable coffee
    if(coffee.price >= priceMin) { // HARDCODED nach Kriterium filern => geht gar nicht!
      coffeesPricy.push( coffee )
    }
  }
  return coffeesPricy
}

let filteredResult = filterCoffeesByPrice(coffees, 1.30)
console.log( "Filtered Coffees (>= 1.30)", filteredResult )
filteredResult = filterCoffeesByPrice(coffees, 5)
console.log("Filtered Coffees (>= 5)", filteredResult)

// READ
// Filter by name part
// Loope durch alle Items
// check jedes item IF in coffee name => searchTerm DRIN (includes) ist
const filterCoffeesByNamePart = (coffees, searchTerm) => {
  const searchResult = []

  for(let coffee of coffees) {
    if( coffee.name.includes(searchTerm)) {
      searchResult.push(coffee)
    }
  }
  return searchResult
}
let coffeesFound = filterCoffeesByNamePart(coffees, "Flat")
console.log({coffeesFound})
coffeesFound = filterCoffeesByNamePart(coffees, "cc")
console.log({ coffeesFound })
coffeesFound = filterCoffeesByNamePart(coffees, "Crema")
console.log({ coffeesFound })

// UPDATE
// loop through all coffees
// identify coffee by a name (=> if)
// increase price by X euro
const updateCoffeePrice = (coffees, searchCoffee, priceIncrease) => {  

  for( let coffee of coffees) {
    if(coffee.name === searchCoffee) {
      coffee.price += priceIncrease
    }
  }
}
updateCoffeePrice(coffees, "Espresso", 1) // 2.49
console.log(coffees)


// DELETE
// loop through items using for in (=> to get index for each item!)
// identify item we wanna manipulate => delete by index (=splice)

// pretty much the same as: for(let i=0; i<coffess.length; i++)

const deleteCoffee = (coffees, nameToDelete) => {
  for(let i in coffees) {
    const coffeeAktuell = coffees[i]
    if (coffeeAktuell.name === nameToDelete) {
      coffees.splice(i, 1) // delete found item at position i
    }
  }
}

deleteCoffee(coffees, "Flat White")
deleteCoffee(coffees, "Espresso")
deleteCoffee(coffees, "Eiskaffee")

console.log(coffees)

