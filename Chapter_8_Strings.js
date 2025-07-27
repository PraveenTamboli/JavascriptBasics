const name = "Tunnu" //string
const repoCount = 89

// console.log("Repo count is " + name + repoCount); //String concatination

// console.log(`Hello my name is ${name} my repo count is ${repoCount}`); //String interpolation

const gameName = new String('Dumdum') //String

/*when we write gameName in the browser console we get

String {'Dumdum'}
0: "D"
1: "u"
2: "m"
3: "d"
4: "u"
5: "m"
length: 6
[[Prototype]]: String
[[PrimitiveValue]]: "Dumdum" */
//It means that String (String with capital S) is an object


// SOME ACTIONS TO IMPLEMENT ON STRING
console.log(gameName[0]); //D.
console.log(gameName.length); //8.
console.log(gameName.charAt(1)); //u
console.log(gameName.indexOf('m')); //2 (first occurence of m)
//.trim() -> to remove whitespaces
//.replace('toReplace','replaceWith')
//.includes('valueToCheck')
console.log("Hello-world".split('-')); //["Hello", "World"]
console.log(gameName.toUpperCase()); //DUMDUM //Returns new string
/* NOTE - Strings and strings either object or primitive but 
both are immutable, so even if the String (object ones) stored in
heap then also they will never make changes in the original by
reference. */

//IMPORTANT
/*
✅ In JavaScript:
String (lowercase) is a primitive data type.

String (capital S, used as a constructor) 
can also be used to create String objects.

Now let’s break it down 🔍:

🔹1. Primitive String (what you normally use)

let name = "Praveen";  // primitive string
✅ It’s a primitive.

✅ Stored by value in the stack.

✅ Very lightweight.

❗️But JavaScript is smart: when you do something like:

console.log(name.length); // 7
Even though name is a primitive, JavaScript 
temporarily wraps it in an object behind the scenes 
so you can use .length, .toUpperCase(), etc.

🧠 This is called boxing or autoboxing.


Behind the scenes:

let name = "Praveen";
// JS internally does something like this:

name = new String("Praveen");  // temporarily

// So you can access object methods
name.length
But once the task is done, JS discards the object wrapper and you're back to a primitive.

👉 So, memory-wise: your primitive is still in the stack, 
the temporary object lives in the heap but only 
while you're using methods.

🔹2. String Object (created with new String())

let strObj = new String("Praveen"); // object
❌ Not a primitive.

✅ Stored in the heap.

✅ Compared by reference not value.


let a = "hello"; // primitive
let b = new String("hello"); // object

console.log(a == b);  // true (value comparison)
console.log(a === b); // false (type + value, one is string, 
                          one is object)
🧠 So what did Heetesh Sir mean?
He probably meant that even primitive strings behave
 like objects temporarily when you 
 use methods like .length, .charAt(), endsWith etc. That’s true, 
 but at the core, your let str = "hello" 
 is a primitive stored in stack.

✅ Summary:
Type	    Example	         Stored In	Compared By	    Notes
Primitive	"hello"	          Stack	    Value	        Fast, lightweight
Object	 new String("hello")  Heap	    Reference	    Slower, more features

"Primitive strings act like objects temporarily, 
but they are not objects internally."
*/


// SLICE METHOD
/*
 -> ARRAY aur STRING dono ke liye
 -> Use hota hai: Part nikalna (copy karna)
 -> Original data change nahi hota (non-destructive)

// value.slice(startIndex, endIndex) // endIndex excluded
*/
let arr = [1, 2, 3, 4, 5];
let sliced = arr.slice(1, 4);

console.log(sliced); // [2, 3, 4]
console.log(arr); // [1, 2, 3, 4, 5] (unchanged)

let userName = "Praveen";
let part = userName.slice(1, 4);

console.log(part); // "rav"


// SUBSTRING METHOD

/*
-> Use hota hai: Part of string nikalna
-> Original string change nahi hoti
-> string.substring(startIndex, endIndex) //endindex excluded
*/
let name1 = "Praveen";
let part1 = name1.substring(1, 4);

console.log(part1); // "rav"

// DIFFERENCE IN SLICE AND SUBSTRING
/*
"hello".slice(3, 1);      // "" ❌
"hello".substring(3, 1);  // "el" ✅ because it swaps 3 & 1
🧠 substring() swap kar deta hai agar galat order ho
slice() empty return karta hai
*/

//SPLICE METHOD (NOTE - Not used for strings)
//  Original array change hoti hai (destructive)
// array.splice(startIndex, deleteCount, item1, item2, ...)

let arr1 = ["a", "b", "c", "d"];
arr1.splice(1, 2, "x", "y");

console.log(arr1); // ["a", "x", "y", "d"]