const num = 5
const str = "5"

console.log( "parseInt('a5')", parseInt("a5") )
console.log('parseInt("50a5")', parseInt("50a5"))

console.log(num + str)
console.log(num + parseInt(str))

// ROUNDING & DIGIT FORMATTING
const numFloat = 5.3479

// round => rounds and throws away digits after comma 
console.log("Math.round( numFloat )", Math.round(numFloat), typeof Math.round(numFloat))
// to fixed => rounds and formats to a fixed digit string
console.log("Math.round( numFloat )", numFloat.toFixed(), typeof numFloat.toFixed())

// EXAMPLES
console.log(numFloat.toFixed() + 10) // OUCH! we calculate with a string here! that will fail!
console.log(parseInt( numFloat.toFixed()) + 10) // correct: here we convert the string to a number before calculating

console.log( numFloat.toFixed(2) )  // round to 2 digits after comma

const num2 = 5.2044
console.log( num2.toFixed(2) )
console.log( parseFloat( num2.toFixed(2) ) ) // parseFloat does not care about digits