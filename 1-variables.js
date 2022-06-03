// var & functions => werden von JS immer nach OBEN gezogen => HOISTING

// constant that never changes => often uppercase
const STUDENTS_COUNT = 22

// underscore syntax => variables we just set once and are READ-ONLY afterwards
let _unterstrich = "top-secret"

let hallo = "hallo"
let welt = "welt"

console.log(hallo + " " + welt)

console.log(`${hallo} du ${welt}`)

// CAMEL CASE
const firstName = "Rob"
console.log(`Hallo ey ${firstName}`)

// KEBAP CASE
const first_name = "Carola"

// NUMBERS

let a = 10
let b = 5

// if you use a string in a adding operation => JS will treat even numbers as strings
console.log("" + a + b)
console.log("" + (a + b))

// undefined
let c
console.log(c, typeof c) // undefined => own datatype!

let d = null
console.log(d, typeof d) // null => NOT an own datatype => used to indicate something is empty


let i = 0
console.log({ i })
i++
console.log({ i })
i++
console.log({ i })
