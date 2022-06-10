const strCourse = "hallo_fbw_wd_22_d02_fbw" // eintopf club
const strCourseOm = "hallo_fbw_om_ignore_d01" // ignore club

const substr = strCourse.slice(0, 6) // CTRL + SHIFT + SPACE => get parameter descritpion in function

console.log({ substr }) // prints "hello_"

// includes function is typically used for user searches !
console.log(strCourse.includes("fbw"))
console.log(strCourse.includes("eintopf"))

// replace just replaces FIRST found word
const classNameNew = strCourse.replace("fbw", "eintopf")
console.log({ classNameNew })

// replace all replaces ALL found words
const classNameNewAll = strCourse.replaceAll("fbw", "eintopf")
console.log({ classNameNewAll })

// difference: 
// - includes delivers true / false
// - indexOf delivers index / positon in string or -1 if not found
console.log("hallo".includes("ll"))
console.log("hallo".indexOf("ll"))

// variant 1 to do 2 steps => in general: prefer that one especially in the beginning
const indexFbw = strCourse.indexOf("fbw")
let classType = strCourse.slice(indexFbw, indexFbw+6) // fbw_wd
console.log(classType)

// variant 2 to do 2 steps in one line
classType = strCourseOm.slice(strCourseOm.indexOf("fbw"), strCourseOm.indexOf("fbw") + 6) // fbw_om
console.log(classType)