const coffeeCrema = {
  name: "Crema", // name => key, property
  intensity: 1, // 1-3
  price: 1.99,
  flavor: "Caramel",
  milk: false,
  sugar: false,
  displayCoffeeDetails() {
    const milkWithWithout = this.milk ? "mit" : "ohne"
    console.log(
      `Kaffee ${this.name} ${this.flavor} ${milkWithWithout} Milch`
    )
  },
}


const coffeeEspresso = {
  name: "Espresso", // name => key, property
  intensity: 1, // 1-3
  price: 2.19,
  flavor: "Vanilla",
  milk: true,
  sugar: false,
  displayCoffeeDetails() {
    const milkWithWithout = this.milk ? "mit" : "ohne"
    console.log(`Kaffee ${this.name} ${this.flavor} ${milkWithWithout} Milch`)
  },
}


coffeeCrema.displayCoffeeDetails( )
coffeeEspresso.displayCoffeeDetails()