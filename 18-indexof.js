


const allCoffees = [
  // "Melitta_abc", // "MelittaAbc"
  "Melitta", 
  "Dallmayr",
  "Tschibo",
  "Lavazza",
  "Illy",
  "Segafredo",
]

// console.log( allCoffees.indexOf("Segafredo") )
// console.log( allCoffees.indexOf("Milk") )

// returns TRUE if item found in array, otherwise FALSE
// Loope durch alle items
// WENN item gefunden wird => return true
// ELSE => checke nächstes Item!
// Wenn alle items durch sind und nichts gefunden => returne false
const indexOf = (arr, searchItem) => {

  // loop through all items
  for(let i=0; i<arr.length; i++) {
    // check if tem === search
    if(arr[i] === searchItem) { 
      return i // index => Tschibo => 2
    }
  }
  return -1
}


let result = indexOf(allCoffees, "Segafredo") // true
console.log( result )

result = indexOf(allCoffees, "Milk") // true
console.log(result)