const NUM_MAX = 8

// get random number from 0 to maxIndex
// for (let i = 0; i < 10; i++) {
//   console.log(Math.floor(Math.random() * maxIndex))
// }

// Math.floor(Math.random() * 5) // 0..4

// const arr = [1,2,3,4,5] // lenghth: 5
// Math.floor(Math.random() * arr.length ) // 0..4

function getRandomIndex(maxIndex) {
  return Math.floor( Math.random() * maxIndex )
}

console.log( getRandomIndex(3) )

