const NUM_MAX = 8

// get random number from 0 to maxIndex
// for (let i = 0; i < 10; i++) {
//   console.log(Math.floor(Math.random() * maxIndex))
// }


function getRandomIndex(maxIndex) {
  return Math.floor( Math.random() * maxIndex )
}


console.log( getRandomIndex(3) )
