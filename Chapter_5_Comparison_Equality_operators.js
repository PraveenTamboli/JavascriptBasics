// COMPARISON OPERATORS

console.log(2 > 1) //true
console.log(2 >= 1) //true
console.log(2 < 1) //false
console.log(2 == 1) //false
console.log(2 != 1) //true


console.log("2" > 1) //true - 2 string is converted to number
console.log("Result is ---------->", true > 1) //false //true==1 //true //true >=1 //true

console.log(null == 0) //false
console.log(null > 0) //false
console.log(null >= 0) //true
    /* NOTE
    null >= 0 is true because equality check ==  and comparisons > < >= 
    <= works differently. Comparisons convert null to a number, treating it
    as 0. That is why null >= 0 is true and other two are false */


/*
Comparison	        Result	Explanation
undefined == 0	    false	undefined only equals null
undefined == null	true	Special case: undefined equals null
null == 0	        false	No loose equality conversion to 0
*/

// NOTE
//Any comparison with NaN using <, >, <=, >= , == always returns false.

//NOTE
//Undefined only equals null, undefined rest all equality and comparison false


// NOTE
/*
Equality/Comparison mein boolean hamesha number banta hai, 
number kabhi boolean nahi banta.
 But if-condition ya Boolean() jaise jagah 
 number boolean ban jaata hai. */