// STRICT checks with ===

if (0 === false) {
  console.log("0 === false")
}

if (1 === true) {
  console.log("1 === true")
}

if (2 === true) {
  console.log("2 === true")
}

if (-1 === false) {
  console.log("-1 === false")
}

if ("1" === true) {
  console.log("'1' === true")
}

if ([] === false) {
  console.log("[] === false")
}

if ("" === false) {
  console.log("'' === false")
}

if (undefined === false) {
  console.log("undefined === false")
}
if (null === false) {
  console.log("null === false")
}
if (NaN === false) {
  console.log("NaN === false")
}
