// simple greater / less operations
console.log("true", 5 > 2 ) // COMPARISON
console.log("false", 1 > 2 )
console.log("true", 2 >= 2)

console.log()
console.log( '4 == "4abc"', 4 == "4abc" ) // true
console.log( '4 == parseInt("4abc")', 4 == parseInt("4abc") ) // true
console.log('4 === "4"', 4 === "4") // false

let a
console.log( a = 4 ) // ASSIGNMENT

if(a == 4) {
  console.log("hallo")
}
else {
  console.log("a ist nicht 4")
}

console.log()

console.log('parseInt("a")', parseInt("a"))

let loggedIn = true

// truthy / falsy value
if(loggedIn) {
  console.log("Bist eingeloggt! Glückwunsch!")
}
else {
  console.log("Draußen bleiben!")
}

// falsy values => "", 0, null, undefined


console.log("" == false) // true
console.log("" === false) // false
console.log(0 == false)  // falsy == falsy => true
console.log(1 == true) // 
console.log("a" == true) // truthy == truthy => false

let bla = 16
if(bla) console.log("bla lässt mich rein!")
else console.log("")


const quantity = 5
// this does not work
// we can never compare anything with undefined
if(quantity >= undefined) {
  console.log( "Quantity ist da!" )
}

// TERNARY

console.log( 5 > 3 ? "5 größer 3" : "5 nicht größer 3" )
console.log( "b" > "a" ? "b größer a" : "b nicht größer a" )
console.log( 15 - 13 ? "15 größer 13" : "15 nicht größer 13")

let logged // undefined
console.log(logged ? "Eingeloggt dude!" : "Raus hier") // if else

// a = 4, bla = 16
console.log( "Mindfuck ternary", a > bla ? "a" == "c" : 15 - 13 ? a - 5 : "17" )

if(a > bla) {
  console.log( "a" == "c" )
}
else {
  
  if( 15 - 13 ) {
    console.log(a- 5)
  }
  else {
    console.log("17")
  }
}


// if just chekcs TRUTHINESS, but not necessarily true values
if(15-3) {
  console.log("Klappt")
}


/**
 * 1 => true
 * 0 => false
 * 
 * 1 == true
 * 2 != true
 * -1 != true
 * 
 * Empty values => "",'',  0, undefined, null, NaN
 */


// 2 => truthy => ! true
// 1 => truthy => true
// 0 => falsy
// "" => falsy


// Real life beispiel
// Truthiness can hurt => and why a COMPARISON is often better!

const productPrice = 10
const rebate = 15
const priceNew = productPrice  - rebate

console.log( "Preis für den Kunden: ", priceNew )

// if(priceNew) // => goes into if block => we dont want that!
if(priceNew > 0) {
  console.log("Kunde bekommt Produkt")
}
else {
  console.log("Uuups! Zuviel Rabatt!")
}
