const objSpäti = {
  coke: 1.99,
  crema: 5.99,
  water: 0.99
}

// console.log(objSpäti)
// objSpäti.milk = 1.70
const objSpätiCopy = { ...objSpäti, milk: 1.70 }
console.log(objSpäti)
console.log(objSpätiCopy)