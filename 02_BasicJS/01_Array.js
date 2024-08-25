//Array

const myArr=[0,1,2,3,4,"Rajat",true]

const myHero= new Array(1,2,3,4,5,"Rajat")

//console.log(myArr[5]);

//console.log(myHero);


//Array Methods
//myArr.push(7)
//myArr.push(6)
//myArr.pop()

//myArr.unshift(9)
//myArr.shift(9)
//console.log(myArr)
//console.log(myArr.includes(5));
//console.log(myArr.indexOf(3));

//console.log(myArr);

//const newArr=myArr.join()
//console.log(typeof newArr);

//Slice,Splice

//Slice : slice() creates a new array with a portion of elements copied from the original array
//Splice::  splice() mutates the original array itself by removing, replacing or adding elements to it.


//console.log("A",myArr);

//const myNewArr=myArr.slice(1,3)

//console.log(myNewArr)
//console.log("B",myArr);

//const myNewArr2=myArr.splice(1,3)
//console.log("C",myArr);
//console.log(myNewArr2)


const myArr3=[0,1,2,3,4]
const myArr4=[5,6,7,8]

//myArr3.push(myArr4)

//console.log(myArr3)
//console.log(myArr3[5][1])

const myArr5=myArr3.concat(myArr4)

console.log(myArr5)

const all_new_Arr=[...myArr3,...myArr4]

console.log(all_new_Arr)

const another_array=[1,2,3,4,[5,6,7],8,[9,10],[11,12]]

let real_another_array=another_array.flat(Infinity)
console.log(real_another_array)


console.log(Array.isArray("Rajat"))
console.log(Array.from("Rajat"))
console.log(Array.from({name:"Rajat"}))

let score=100
let score2=200
let scor3=300

console.log(Array.of(score,score2,scor3))




