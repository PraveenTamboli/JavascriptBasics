// ARRAYS PART 3

//CONCAT, FLAT AND ISARRAY METHODS, FROM, OF

//🔗 1. concat() → Arrays ya values ko jodta hai (merge karta hai)
//📌 Use: do ya zyada arrays ko add/merge karne ke liye

let arr1 = [1, 2];
let arr2 = [3, 4];

let result1 = arr1.concat(arr2);
console.log(result1); // [1, 2, 3, 4]


// ✅ Bonus: normal values bhi jod sakta hai
let arr3 = [1, 2];
let result3 = arr3.concat(3, 25, [4, 5]);
console.log(result3); // [1, 2, 3, 25, 4, 5]

// 🔸 concat() original array ko change nahi karta



// 🧱 2. flat() → Nested array ko seedha karta hai (flattening)
//📌 Use: agar array ke andar array ho, usko ek level me le aana

let arr4 = [1, 2, [3, 4]];
let result4 = arr4.flat();
console.log(result4); // [1, 2, 3, 4]
// ✅ flat(depth) → kitna andar tak flatten karna hai

let arr5 = [1, 2, [3, 4, [5, 6]]];

console.log(arr5.flat(1)); // [1, 2, 3, 4, [5, 6]]
console.log(arr5.flat(2)); // [1, 2, 3, 4, 5, 6] ✅
// 🔸 flat() bhi original array ko change nahi karta



// ✅ concat() + flat() combo:
// Agar tu arrays ko jod ke seedha structure banana chahta hai:

let arrOne = [1, 2];
let arrTwo = [3, [4, 5]];

let resultNew = arrOne.concat(arrTwo).flat();
console.log(resultNew); // [1, 2, 3, 4, 5]



//3. isArray
console.log(Array.isArray("Veen")) //false



//4. from method
console.log(Array.from("Veen")) //[ 'V', 'e', 'e', 'n' ]
console.log(Array.from({ age: 18 })); //[] //cannot create array from such a value



//5. of method
let score1 = 100
let score2 = 200
let score3 = 300

console.log(Array.of(score1, score2, score3)); //[100, 200, 300]