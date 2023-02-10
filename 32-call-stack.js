
// fake API call

// ASYNC functions returnen IMMER eine Promise
// selbst wenn wir im return statement keine Promise returnen
const getData = () => {
  console.log("Fetching some stuff...")
  // return Prom { [ "apple", "banana", "cherry" ] }
  return ["apple", "banana", "cherry"];
}

// blocking or non blocking?
setTimeout(getData, 0) // NON BLOCKING! 
  // even though we have 0 waiting time, the code will be put on the call stack and the execution will be triggered
  // when the current code block finishes! so the "FINISHED" console log below will be executed FIRST
  // and at the very end the getData functions gets called!  

// const result = getData()
// console.log(result)

console.log("FINISHED!")