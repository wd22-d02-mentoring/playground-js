// TERNARY
const a = 4
const bla = 16

// einfache ternaries
console.log(5 > 3 ? "5 größer 3" : "5 nicht größer 3")
console.log("b" > "a" ? "b größer a" : "b nicht größer a")
console.log(15 - 13 ? "15 größer 13" : "15 nicht größer 13")

let logged // undefined
console.log(logged ? "Eingeloggt dude!" : "Raus hier") // if else

// Werte am Anfang: a = 4, bla = 16
console.log("Mindfuck ternary", a > bla ? "a" == "c" : 15 - 13 ? a - 5 : "17")

// Der Mindfuck Ternary nur mit If Else (= genau dasselbe!)
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

