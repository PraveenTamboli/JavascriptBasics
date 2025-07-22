//PRIMITIVE AND NON PRIMITIVE (REFERENCE) DATATYPES

//PRIMITIVE - string, number, boolean, null,undefined, symbol, bigInt
// -> call by value (gives copy of the value not reference)

//REFERENCE - array, objects, functions
// -> gives reference (address) of the original value
//typeof -> object

/*
NOTE - Js is dynamically typed language (do not have to define data type,
can assign data to the variables directly)
*/

//symbol - returns unique identification for a value even if passed value is samea
//  ex - 
const id = Symbol('123')
const id1 = Symbol('123')

console.log(id == id1) //false

//array
const heroes = ["Baman", "Manav", "Detective Roy", "Aadi"]
    //object
let obj = {
    name: "Manav",
    age: 27
}

//function
const myFunc = function() {
    console.log("Hello world")
}


//NOTE
//typeof null is object
//All non primitive data types are typeof object