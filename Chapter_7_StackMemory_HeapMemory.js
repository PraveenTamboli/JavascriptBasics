// STACK AND HEAP MEMORY

// stack (Primitive), Heap (non-primitive)

let myName = "Billu"
let AnotherName = myName
AnotherName = "Baman"

console.log(myName) // Billu
console.log(AnotherName) // Baman


let obj = {
    name: "Cintu",
    age: 23
}

let obj2 = obj
obj2.name = "Nunnu"

console.log(obj.name) //Nunnu
console.log(obj2.name) //Nunnu