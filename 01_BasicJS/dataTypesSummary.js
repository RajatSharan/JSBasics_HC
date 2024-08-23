//Primitive Datatype -

//String,Number,boolean,null,undefined,Symbol,BigInt

const score = "Mike"

const id=Symbol('123')

console.log(id)

const bigNumber =34432423434243243244234n

console.log( typeof bigNumber);



// Refrence datatype

//Object,Array,Functions

const heros=["saktiman","mario","Mike"]
let myobj={
 
    name:"Rajat",
    age:22

}

const myFunction=function(){
    console.log("Hello World")


}
myFunction()


//*******************************************************/

//Stack(Primitive) and // Heap(non primitive)

let myFirstvalue=12

let secondvalue=myFirstvalue
secondvalue=13
console.log(myFirstvalue)
console.log(secondvalue)

let cmyinfo={

    name:"check",
    age:12


}

let cmoinfo=cmyinfo

cmoinfo.name="pno"

console.log(cmyinfo)
console.log(cmoinfo)
