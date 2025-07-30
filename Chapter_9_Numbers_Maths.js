// NUMBER AND MATHS

//1. NUMBER

const score = 400 //Primitive datatype (Number)

const balance = new Number(400) //NonPrimitive datatype (Object)
    //avoid creating number instance like this
    /* The reason we should not create number instance like this because
    during comparison it creates confusion*/ //score === balance -> false

console.log(score.toString())
console.log(score.toString().length)

console.log(score.toFixed(2)) //400.00

const otherNum = 123.6456
console.log(otherNum.toPrecision(3)) //124
console.log(otherNum.toPrecision(4)) //123.6
console.log(otherNum.toPrecision(5)) //123.65


//.toLocaleString() // works on a number, returns String
const hundreds = 1000000
console.log(hundreds.toLocaleString()) //1,000,000 //US standard default
console.log(hundreds.toLocaleString('en-IN')) //10,00,000  //Indian standard


//NOTE
/*Jab bhi primitive number pe koi method 
call karta hai, jaise num.toString(), tab 
JavaScript internally temporary ek Number object 
banata hai just for that line.
*/



//2. MATHS
//It is an object that gives various methods to apply on the number
console.log(Math)
console.log(Math.abs(-4)) //4 //absolute makes -ve to +ve
console.log(Math.round(4.6)) //5 //rounds off to near integer
console.log(Math.ceil(4.2)) //5 round off to highest near integer
console.log(Math.floor(4.2)) //4 round off to lowest near integer
Math.pow(2, 3); // 8 → 2^3
Math.sqrt(16); // 4 → square root
console.log(Math.random()); // 0 to 1 any random decimal value
Math.min(5, 10, -2); // -2
Math.max(5, 10, -2); // 10