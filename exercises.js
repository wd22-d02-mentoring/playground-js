// Schreibe eine Funktion, die einen Namen nimmt und einen Gruß zurückgibt.

// Beispiele:

// halloName("Gerald") ➞ "Hallo Gerald!"
// halloName("Tiffany") ➞ "Hallo Tiffany!"
// halloName("Ed") ➞ "Hallo Ed!"
// Vergiss das Ausrufezeichen (!) nicht. (engl. exclamation sign) 

// Schreibe eine Funktion, die einen Namen nimmt und einen Gruß zurückgibt.
// 1. function greetPerson
// 2. INPUT: name // Argument / Parameter
// 3. function greetPerson( name )
// 4. OUTPUT: return a greeting string: "Hallo " + name + "!"
// 5. logic der function: "Hallo", INPUT param und "!" kombinieren
 

function greetPerson( name ) { // INPUT
  const greeting = "Hallo " + name + "!" // LOGIC 
  return greeting // OUTPUT
}

// TEST
console.log( greetPerson("Ella") ) // expect: "Hallo, Ella"
console.log( greetPerson("Martin") ) // expect: "Hallo, Martin"

const greetingDima = greetPerson("Dima") // expect: "Hallo, Dima"
console.log( greetingDima )