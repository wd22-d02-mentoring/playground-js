


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

// returns INDEX of item if item found in array, otherwise -1
// Loope durch alle items
// WENN item gefunden wird => return INDEX (i)
// ELSE => checke nächstes Item!
// Wenn alle items durch sind und nichts gefunden => returne -1
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