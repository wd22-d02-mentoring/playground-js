
// fake API call

// ASYNC functions returnen IMMER eine Promise
// selbst wenn wir im return statement keine Promise returnen
const getData = async () => {
  // return Prom { [ "apple", "banana", "cherry" ] }
  return ["apple", "banana", "cherry"];
}

// top level await
const prom = getData()

// truly NON blocking!
prom.then((fruits) => {
  console.log(fruits)
  
  const fruitsHtml = fruits.map(fruit => `<div>${fruit}</div>`)
  console.log(fruitsHtml)
})

console.log(prom);
console.log("Blabla");


