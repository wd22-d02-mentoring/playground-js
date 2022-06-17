
let loggedIn = false

// wenn etwas fehlt => mache etwas oder meckere mit jemandem!
// if(loggedIn === false) // ALTERNATIVE does the same as below

if(!loggedIn)  // ! false => true // doppelte verneinung
{
  console.log("Du hast hierfür keine Rechte. Bitte einloggen! Sofort")
  process.exit(1) // exit the app
}

// the journey goes on....


let quantity = 0 // falsy wert

if(!quantity) // ! 0 => true
{
  console.log("Du Sau! Ohne Quantity kann man hier nicht bestellen")
}

let ordered = 13
let min = 10
let minimumSumReached = (ordered-min > 0)   // => hat 

console.log(minimumSumReached)

if(!minimumSumReached) {
  console.log("Du kannst nicht bestellen. Wir wollen Minimum 10 EUR von dir. Oder weg!")
}
else {
  console.log("Summe passt! Viel Spaß mit der Lieferung. Du hörst von uns")
}