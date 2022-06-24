// ARRAYS
const arrSeries = [
  "Haus des Geldes", 
  "Breaking Bad", 
  "Black Mirrors",
  "Bob der Baumeister"
]
console.log(arrSeries)

// bad practice => dont loop through array like this! (hardcoded)
// console.log(arrSeries[0])
// console.log(arrSeries[1])
// console.log(arrSeries[2])
// console.log(arrSeries[3])





// OBJECT
// box für SubVariables
const objRob = {
  firstName: "Rob",
  age: 39,
  admin: false,
  specialization: ["Backend", "NodeJS", "JavaScript", "ExpressJS", "MongoDB"],
}

// get subvariable of parent object
console.log(objRob.admin)

// ARRAY of OBJECTS
const arrSeriesObjects = [
  { title: "Haus des Geldes", seasons: 3 },
  { title: "Breaking Bad", seasons: 5 },
  { title: "Black Mirrors", seasons: 5 },
]


// LOOP OVER array of strings
// i => iterator => count variable
for (let i = 0; i < arrSeries.length; i++) {
  console.log("<div>" + arrSeries[i] + "</div>")
}

console.log()

// looping over an array of objects
for (let i = 0; i < arrSeriesObjects.length; i++) {
  console.log("<div class='series'>" 
    + `<span>${arrSeriesObjects[i].title}</span>`
    + `<span>${arrSeriesObjects[i].seasons}</span>` 
    + "</div>")
}
