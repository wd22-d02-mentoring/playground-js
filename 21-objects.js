const coffee = {
  name: "Crema", // name => key, property
  intensity: 1, // 1-3
  price: 1.99,
  flavor: "Caramel",
  milk: false,
  sugar: false,
}

console.log(coffee.flavor) // print sub info of object

// console.log( flavor ) // fails => flavor is only accessible by parent (=object)

coffee.price = 2.99
console.log(coffee.price)
coffee.price += 1
console.log(coffee.price)

// Output example: "Crema Caramel with Milk"
const displayCoffeeDetails = (coffee) => {
  const milkWithWithout = coffee.milk ? "mit" : "ohne"
  console.log(milkWithWithout)
  console.log( `Kaffee ${coffee.name} ${coffee.flavor} ${milkWithWithout} Milch` )
}

displayCoffeeDetails( coffee )