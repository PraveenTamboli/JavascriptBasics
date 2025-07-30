//ARRAYS PART 2

//Array methods

const myArr = [1, 2, 3, "India"]

myArr.push(6) //appends at the last of the array
myArr.pop() //Removes last element from the array
myArr.shift() //Removes first element from the array
myArr.unshift(3) //adds the element at the start and shifts the rest one index behind
    /* NOTE - 
    We should try to avoid unshift usage as if the array has lots of elements
    then lots of elements will need to be shifted one index backwards, hence
    lots of work will need to be done by the system and it is time consuming */

myArr.includes(9) //false
myArr.indexOf(9) //-1 (does not exists)
myArr.indexOf(2) //1

//Join method
const myArr1 = [1, 2, 3, "India"]
const newArr = myArr1.join() //returns a string of comma separated values
console.log(myArr1)
console.log(newArr) //1,2,3,India
console.log(typeof newArr) //string

// splice method
// -> splice method returns the array of deleted elements.
//-> splice method makes changes in the original array unlike slice
//What will it print?
// array.splice(startIndex, deleteCount, item1, item2, ....)

console.log(myArr1.splice(1, 2, "x", "y"))
    // if you are expecting [1,"x", "y", "India"] -> Wrong answer

//NOTE - splice method returns the array of deleted elements.

console.log(myArr1) // [1,"x", "y", "India"]

//NOTE - splice method makes changes in the original array unlike slice
const anotherArr = [1, 2, 4, 5, 6]
console.log(anotherArr.splice(0, 2)) //[1,2]


//slice method
// -> Works on arrays and strings
// -> Accepts negative indexes(negative indexes starts from last and it is -1 not 0)
// -> Returns the removed elements array
// -> Does not make changes in the original

// Last 2 characters of a string
let name = "jathalli";
console.log(name.slice(-2)); // "li"

// Last 3 items of an array
let fruits = ["apple", "banana", "mango", "kiwi"];
console.log(fruits.slice(-3)); // ["banana", "mango", "kiwi"]

let vegetables = ["tomato", "potato", "spinach", "Cabbage"]
console.log(vegetables.slice(1, 3)) // 3 index will be excluded
    //O/p -> ["potato", "spinach"]
console.log(vegetables) //["tomato", "potato", "spinach", "Cabbage"] Original array not changed