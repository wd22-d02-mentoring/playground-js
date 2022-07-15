// destructure => pluck out items of an object
const objCoffee = { name: "Krema", price: 199.95, flavor: "Caramel" }
const { flavor, ...rest } = objCoffee

console.log(rest)

const coffee = ["Crema", 3.99]

// destructure info from array
const [coffeeName, coffeePrice] = coffee

// this is the same => but the line above does all this at once
// const coffeeName = coffee[0]
// const coffeePrice = coffee[1]


console.log(coffeeName)



