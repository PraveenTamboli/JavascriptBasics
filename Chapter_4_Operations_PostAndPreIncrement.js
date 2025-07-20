// Operations in JS

console.log("1" + 2) // 12
console.log(1 + "2") //12
console.log("1" + 2 + 2) // 122
console.log(1 + 2 + "2") // 32
console.log("3" - 5) //-2

console.log("Billu" + " Ji") //Billu Ji

console.log(2 + 2) // 4
console.log(2 - 2) // 0
console.log(2 * 2) // 4
console.log(2 ** 3) // 8 //** represents to the power
console.log(2 / 3) //0.66
console.log(2 % 3) //2 //modulos gives remainder (does note does in decimal)
console.log(4 % 5) //4


console.log(3 + true) //4 //true is converted to 1
console.log(+true) //1
console.log(-true) //-1
console.log(+"") //0
console.log(1 + "bam") //1bam //same as above strings



// Post increment (gives increased value after original the value use) 
// pre increment (gives the increased value before original value use)
let x = 3;
const y = x++;

console.log(`x:${x}, y:${y}`);
// Expected output: "x:4, y:3"

let a = 3;
const b = ++a;

console.log(`a:${a}, b:${b}`);
// Expected output: "a:4, b:4"