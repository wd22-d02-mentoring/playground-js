// reduce ???

const arrPizzas = [
  { name: "Hawaii", price: 5.99 },
  { name: "Quattro Formaggi", price: 4.99 },
]

// sum ???

// Variante SUMME bilden ohne REDUCE
// let sum = 0 
// for(let pizza of arrPizzas) {
//   sum += pizza.price
// }
// console.log(sum)

const result = arrPizzas.reduce((sum, pizza) => {
  return sum + pizza.price
}, 0)

console.log(result)


const satz = "hallo hallo strings das hier ist stranger strings. stranger gehts nicht"

// collect words and state how often they are used in sentence
const arrWords = satz.replaceAll(".", "").split(" ")
console.log(arrWords)

// DESIRED OUTPUT:
// const statistics = {
//   hallo: 2,
//   das: 1,
//   stranger: 2
// }

// build statistics about word usage
const statsFinal = arrWords.reduce((statsTemp, item) => {

  const isInObj = item in statsTemp // check if key is in object

  // if in object => count up
  // if not in object => add to object with count 1
  isInObj ? statsTemp[item]++ : statsTemp[item] = 1

  return statsTemp
}, { })

console.log(statsFinal)