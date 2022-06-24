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
// 5. logic der function

// EXAMPLE INPUT: "Rob"
// EXAMPLE OUTPUT: Grüss dich, Rob

// EXAMPLE INPUT: "Ella"
// EXAMPLE OUTPUT: Grüss dich, Ella


function greetPerson( name ) { // INPUT
  const greeting = "Hallo " + name + "!" // LOGIC 
  return greeting // OUTPUT
}

// TEST
console.log( greetPerson("Ella") ) // expext: "Grüss dich, Ella"
console.log( greetPerson("Martin") ) // expext: "Grüss dich, Martin"
console.log( greetPerson("Dima") ) // expext: "Grüss dich, Dima"