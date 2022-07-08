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
const coffeesPricy = [] 

for( let coffee of coffees ) { // let item of array
  // coffee == coffees[i] => die for..of loop speichert das aktuelle Item in der Loop in der Variable coffee
  console.log(coffee.name)
  if(coffee.price >= 1.30) {
    coffeesPricy.push( coffee )
  }
}
console.log( coffeesPricy )

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
