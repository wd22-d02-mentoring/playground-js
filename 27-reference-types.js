const obj = { name: "Rob", age: 39 }
// const objCopy = obj // this does NOT create a copy => we store the ORIGINAL in the new variable
const objCopy = {...obj} // this here creates a real copy => we get disconnected from original

objCopy.age = 40

console.log( obj )
console.log( objCopy )



const arrOriginal = [{ name: "Coke", price: 1.99 }]

const arrCopy = arrOriginal.map((item) => {
  item.price += 2
  return item  
})

// console.log(arrOriginal)
// console.log(arrCopy)