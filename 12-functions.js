// FUNCTIONS DIE IMMER EXAKT DASSELBE TUN, BRAUCHEN KEINEN INPUT PARAMETER


// WENN ICH DICH BRAUCHE, SEI DA FÜR MICH!
function showBetween2And5() {
  
  for(let i=0; i<=5; i++) {
    if(i > 2 && i < 5) {
      console.log(i)
    }
  }
}

// WIR BRAUCHE NDICH GENAU 3 MAL
// showBetween2And5()
// showBetween2And5()
// showBetween2And5()


// return true / false
function isBetween2And5(number) {

  // operations always return true or false
  // so we can return results of operations right awaay in one line
  return number > 2 && number < 5 // true / false

  // we can do the same with if else but it is not really common
  // if(number > 2 && number < 5) {
  //   return true
  // }  // true / false
  // else {
  //   return false
  // }
}

// console.log("Du bist eine gute Number")
// console.log("Können wir nicht brauchen")
console.log( isBetween2And5(3) ) // true
console.log( isBetween2And5(4) ) // true
console.log( isBetween2And5(5) ) // false