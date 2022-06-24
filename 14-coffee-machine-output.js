
// Schreib Kaffeemaschine Function, die Geld bekommt und Kaffeetyp
// Man kann nur eine Größe bestellen
// Function soll Kaffee und Wechselgeld zurückgeben

// INPUT: Kaffeetyp, Geld
// LOGIC: 
// - optional: prüfen ob GENUG Geld eingeworfen wurde => >= 1
// - welcher typ kaffee wurde gewählt  => SWITCH
// - durch den typ wissen wir den preis
// - reicht das INPUT Geld für den Kaffee => amount >= kaffeepreis
// - wenn ja: 
//   -- wieviel geld bleibt übrig => amount - kaffeepreis  
//   -- returne kaffee und das wechselgeld (als Array)
// - wenn nein:
//   -- console.log (=> "reicht nicht" | "bitte mehr" | "heute nur halber kaffee")
//   -- gib ganzen Betrag zurück
// OUTPUT: [Kaffee, Wechselgeld] | Fehlermeldung / amount


// SZENARIO
// User wählt Latte
// Wirft 50 Cent
// => Press Coffee button

/**
 * type = 1 => Crema => Preis: 1
 * type = 2 => Flat White => Preis: 1.50
 * type = 3 => Latte => Preis: 2
 */

// once the user really ORDERED the coffee by button click
// => we will executre this thing here
function getCoffee(type, amount) {

  const MINIMUM_AMOUNT = 1

  // Handle ERROR CASE
  if(amount < MINIMUM_AMOUNT) {
    console.log("EY! Reicht nicht! Denkst du, wir sind Charity, oder wie? Kaffee umsonst gibts nicht!")
    return amount // Exit early
  }

  let price
  let coffeeName

  // switch you use in case you have multiple cases (=> more than 3)
  switch(type) {
    // => crema kostet: 1 
    case "c": 
      price = 1
      coffeeName = "Crema"
      break;
      // => flat kostet 1.5
    case "f": 
      price = 1.5
      coffeeName = "Flat White"
      break;
      // => latte kostet 2.0
    case "l": 
      price = 2.0
      coffeeName = "Latte"
      break;
    default:
      console.log("EY! Jibts nich! Schau nochmal auf die Auswahl, dude!") 
      return amount  
  }

  // SUCCESS CASE
  if(amount >= price) {
    const wechselgeld = amount - price // Beispiel: 2 - 1 => 1
    return [wechselgeld, coffeeName]
  }
  // REICHT NICHT => gib alles zurück!
  else {
    console.log(`Kostet ${price}. Du hast gegeben ${amount}. Reicht nicht! `)
    return amount    
  }
}

console.log( getCoffee("l", 5)) // => 3, Latte
console.log( getCoffee("l", 0.5)) // => fail!
console.log( getCoffee("c", 2)) // => 1, Crema
console.log( getCoffee("f", 1)) // => fail, 1


