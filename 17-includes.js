
const allCoffees = [
  "Melitta",
  "Dallmayr",
  "Tschibo",
  "Lavazza",
  "Illy",
  "Segafredo",
]

// returns TRUE if item found in array, otherwise FALSE
// Loope durch alle items
// WENN item gefunden wird => return true
// ELSE => checke nächstes Item!
// Wenn alle items durch sind und nichts gefunden => returne false
const includes = (arr, searchItem) => {

  // loop through all items
  for(let i=0; i<arr.length; i++) {
    // check if tem === search
    if(arr[i] === searchItem) { 
      return true
    }
  }
  return false
}

const includesWithVariable = (arr, searchItem) => {

  let found = false

  // loop through all items
  for (let i = 0; i < arr.length; i++) {
    
    // check if tem === search
    if (arr[i] === searchItem) {
      found = true
      break
    }
  }
  return found
}


let result = includes(allCoffees, "Tschibo") // true
console.log( result )

result = includes(allCoffees, "Milk") // true
console.log(result)