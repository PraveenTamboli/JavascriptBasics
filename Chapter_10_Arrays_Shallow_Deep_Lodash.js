//Arrays in JS part one

/*Arrays are a collection of multiple values and can contain
data of different types, the values of the array are fetched
using index. */

//NOTE - Array is an object in js
const myArr = [1, 2, 3, "Manav", false]
const newArr = new Array(1, 2, true, 4, 5)
console.log(typeof myArr) //Object

console.log(myArr[0]) //1

//Arrays are reference type (Non-Primitive data type)
// -> Makes changes in the original data if we assign to other var
const originalArr = [
    [1, 2],
    [3, 4]
]
const duplicateArr = originalArr
duplicateArr[0] = 9
console.log(duplicateArr) //[9, [ 3, 4 ]]
console.log(originalArr) //[9, [ 3, 4 ]]


//To make a copy of an array unlike reference above, we use
// -> ... //Spread operator [...array]
// -> JSON.parse(JSON.stringify(array))
// -> Lodash //Library //import _ from 'lodash';
// _.cloneDeep(array);


//SHALLOW COPY AND DEEP COPY

/* In javascript when we take clone (copy) an array,
then there are two ways by which the array is copied
*/
//1. SHALLOW COPY

/*It gives copy of the first layer only, if there are
arrays inside the array they will act like reference only*/

//first layer of original array had no impact
const mainArr = [
    ["Raju", "Shyaam"],
    ["Babu bhaiya"]
]
const shallowArr = [...mainArr]
shallowArr[0] = 9
console.log(shallowArr) //[ 9, [ 'Babu bhaiya' ] ]
console.log(mainArr) // [ [ 'Raju', 'Shyaam' ], [ 'Babu bhaiya' ] ]

//second layer of original array had impact
const mainArrNew = [
    ["Raju", "Shyaam"],
    ["Babu bhaiya"]
]
const shallowArrNew = [...mainArrNew]
shallowArrNew[0][0] = "Vinod"
console.log(shallowArrNew) //[ [ 'Vinod', 'Shyaam' ], [ 'Babu bhaiya' ] ]
console.log(mainArrNew) //[ [ 'Vinod', 'Shyaam' ], [ 'Babu bhaiya]

//2. DEEP COPY
/* Means from first layer to the deeper layers all are copied
to different memory, does not takes reference */

const original = [
    [1, 2],
    [3, 4]
];
const deep = JSON.parse(JSON.stringify(original));

deep[0][0] = 99;

console.log(original); // [[1, 2], [3, 4]]
console.log(deep) // [[99, 2] [3,4]]


//LIMITATIONS OF JSON.parse(JSON.stringify(array))

/* Ye method sirf tabhi perfectly kaam karta hai jab:
Array ya object simple data types contain karta ho:

Numbers, Strings, Booleans
simple Arrays
Plain objects

❌ Lekin ye fail ho jaata hai jab:
1. Functions ho

const arr = [() => console.log("Hello")];
const copy = JSON.parse(JSON.stringify(arr));
console.log(copy); // ❌ [null] aayega

2. Undefined ho

const arr = [undefined, 2];
const copy = JSON.parse(JSON.stringify(arr));
console.log(copy); // ❌ [null, 2]

3. Date objects ho

const arr = [new Date()];
const copy = JSON.parse(JSON.stringify(arr));
console.log(copy[0] instanceof Date); // ❌ false

4. RegExp (Regular expressions) ho

const arr = [/abc/];
const copy = JSON.parse(JSON.stringify(arr));
console.log(copy); // ❌ [{}]

5. Circular reference ho

const obj = {};
obj.self = obj;
const copy = JSON.parse(JSON.stringify(obj)); // ❌ Error: Converting circular structure to JSON

Lodash ka _.cloneDeep() ye sab handle karta hai:

import _ from 'lodash';

const obj = {
  name: "Praveen",
  birth: new Date(),
  greet: () => "hello", // ye bhi copy hota hai (reference wise)
};

const copy = _.cloneDeep(obj);
console.log(copy);
console.log(copy.birth instanceof Date); // ✅ true
*/


// ================================================

/*

🕒 1. copy[0] instanceof Date — iska matlab kya?

const arr = [new Date()];
const copy = JSON.parse(JSON.stringify(arr));
console.log(copy[0] instanceof Date); // ❌ false

🤔 Explanation:
new Date() ek Date object banata hai.

Lekin JSON.stringify() jab isse string me convert karta hai to wo Date ko string bana deta hai (e.g., "2025-07-30T12:34:56.789Z")

Fir JSON.parse() us string ko wapis Date object nahi banata, balki sirf ek plain string bana deta hai.

✅ Proof:

console.log(typeof copy[0]); // string
console.log(copy[0]);        // e.g., "2025-07-30T12:34:56.789Z"
🔁 So agar tu chahata hai Date object wapas mile, to manually karna padega:

const original = [new Date()];
const copy = JSON.parse(JSON.stringify(original));
copy[0] = new Date(copy[0]); // 👈 convert back to Date

console.log(copy[0] instanceof Date); // ✅ true

🔧 2. Lodash cloneDeep function reference me copy karta hai — iska kya matlab?
Example:

import _ from 'lodash';

const original = [{
  name: "Praveen",
  greet: function () {
    console.log("Hello bhai");
  }
}];

const copy = _.cloneDeep(original);

// Change function in copy
copy[0].greet = function () {
  console.log("Hello from copy!");
};

copy[0].greet();      // "Hello from copy!"
original[0].greet();  // "Hello bhai" ✅

✅ Explanation:
Lodash function ko copy karta hai, lekin us function ke andar ke code ka deep copy nahi hota, kyunki function reference type hota hai.

Iska matlab: agar tu function object ko replace karega, original change nahi hoga.

Lekin agar tu function ke andar hi kuch mutate karega (jaise kisi outer variable ko change karna), to dikkat aa sakti hai.
import _ from 'lodash';

const sharedData = { name: "Praveen" };

const original = [{
  greet: function () {
    sharedData.name = "Changed!";
  }
}];

const copy = _.cloneDeep(original);

// Function ko run kiya copy me
copy[0].greet();

console.log(sharedData.name); // ❗ Output: "Changed!" (original shared data change ho gaya)

par function ke andar hi koi value change ho toh koi problem nahi 

import _ from 'lodash';

const original = [{
  name: "Praveen",
  greet: function () {
    console.log("Hello " + this.name);
  }
}];

const copy = _.cloneDeep(original);

copy[0].name = "Jathalli";

copy[0].greet();      // Hello Jathalli
original[0].greet();  // Hello Praveen ✅
*/