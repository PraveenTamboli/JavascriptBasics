// NUMBER AND MATHS

//1. NUMBER

const score = 400 //Primitive datatype (Number)

const balance = new Number(100) //NonPrimitive datatype (Object)
    //avoid creating number instance like this
    /* The reason we should not create number instance like this because
    during comparison it creates confusion*/

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
console.log(hundreds.toLocaleString('en-IN')) //10,00,000 
    //Indian standard


//NOTE
/*Jab bhi tu primitive number pe koi method 
call karta hai, jaise num.toString(), tab 
JavaScript internally temporary ek Number object 
banata hai just for that line.
*/