

/**
 * type = 1 => Crema
 * type = 2 => Flat White
 * type = 3 => Latte
 */
function getCoffee(type) {

  console.log("You typed: ", type)

  // switch you use in case you have multiple cases (=> more than 3)
  switch(type) {
    case "c": console.log("You ordered Crema. Enjoy!"); break;
    case "f": console.log("You ordered Flat White. Good choice!"); break;
    case "l": console.log("You ordered Latte. Is mir latte!"); break;
    default:
      console.log("EY! Jibts nich! Schau nochmal auf die Auswahl, dude!") 
  }

  // if(type === 1 ) {
  //   console.log("You ordered Crema. Enjoy!")
  // }
  // else if(type === 2) {
  //   console.log("You ordered Flat White. Good choice!")
  // }
  // else if(type === 3) {
  //   console.log("You ordered Latte. Is mir latte!")
  // }
  // else {
  //   console.log("EY! Jibts nich! Schau nochmal auf die Auswahl, dude!")
  // }
}

const arrTypes = ["c", "f", "l"] // 0..2

// step 1: get random index number between 0..2
function getRandomIndex(maxIndex) {
  return Math.floor(Math.random() * maxIndex)
}

const randomIndex = getRandomIndex( arrTypes.length ) // get me something between 0...2
// step 2: grab array element with that index
const randomType = arrTypes[randomIndex]

// step 3 => get random coffee
getCoffee(randomType)


// getCoffee(randomType)

// TODO: get random coffee
// INPUT: random letter from range "c", "f", "l"
// CALL THE FUNCTION
// OUTPUT