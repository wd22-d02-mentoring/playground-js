
// fake API call

// ASYNC functions returnen IMMER eine Promise
// selbst wenn wir im return statement keine Promise returnen
const getData = async () => {
  // return Prom { [ "apple", "banana", "cherry" ] }
  return ["apple", "banana", "cherry"];
}

// top level await
const fruits = await getData() // blocks the rest of the code!

console.log(fruits)
console.log("Blabla")

const fruitsHtml = fruits.map(fruit => `<div>${fruit}</div>`)
console.log(fruitsHtml)