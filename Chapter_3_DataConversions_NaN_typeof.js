// DATATYPE CONVERSIONS

// 1. Conversion to Number
let score = "33"

console.log(typeof(score)) //string

let valueInNumber = Number(score)

console.log(typeof(valueInNumber)) //number


// NaN
let newScore = "33abc"
let valueInNumberNewScore = Number(newScore)
console.log(valueInNumberNewScore) //NaN

console.log(typeof(valueInNumberNewScore)) //number

//NOTE
/* When we check any value that is NaN and check it's type then it gives
it's type as number, therefore do not rely on typeof to apply check for
number*/

//"33" => 33 //type number
// "33abc" => NaN //type number
// true => 1   false => 0 //type number
//undefined => NaN //type number
//null => 0 //type number
console.log("Converted null is ", Number(null))

// 2. Conversion to Boolean
console.log("Booleans ------------->")
let isLoggedIn = 1
let boolIsLoggedIn = Boolean(isLoggedIn)
console.log(boolIsLoggedIn) //true

let anotherVal = ""
let boolAnotherVal = Boolean(anotherVal)
console.log(boolAnotherVal) //false

let anotherVal1 = "Billu"
let boolAnotherVal1 = Boolean(anotherVal1)
console.log(boolAnotherVal1) //true

// undefined => false
// null => false
//[] => true //NOTE - in js [] is an object if we check by typeof
//{} => true

//NOTE - to check if a variable is an array use variable.isArray rather than typeof

// 3. Conversion to string
console.log("Strings ------------->")
let num = 1
let strNum = String(num)
console.log(strNum) //1 //type - string

//undefined => //undefined //type - string
//null => //null //type - string
//{a: 1} => "[object object]" //type - string
//["1", "2"] => "1", "2", "3" //type - string