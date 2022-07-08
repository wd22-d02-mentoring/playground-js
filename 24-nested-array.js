// NESTED LOOPS we mostly use
// to loop over a array of DETAILS of a parent item
// examples:
// - coffees with flavors
// - users with hobbies
// - products with variants


const coffees = [
  { name: "Crema", flavors: ["Caramel", "Choco"] },
  { name: "Espresso", flavors: [] },
  { name: "Cappuccino", flavors: ["Choco", "Hazelnut"] },
]
const users = [
  { name: "Eleni", hobbies: ["Coding", "Hulahoop"] },
  { name: "Elvira", hobbies: ["Coding", "Gaming" ]}
]

// OUTER LOOP => loop through main items
for(let user of users) {
  console.log( user.name )
  const hobbies = user.hobbies
  // INNER LOOP => loop through details
  for(let hobby of hobbies) {
    console.log("-", hobby)
  }
}


console.log()

for(let i=0; i<coffees.length; i++) {
  const coffeeAktuell = coffees[i] // save current item in variable
  console.log(coffeeAktuell.name)

  for(let j=0; j<coffeeAktuell.flavors.length; j++) {
    console.log("-", coffeeAktuell.flavors[j])
  }
}