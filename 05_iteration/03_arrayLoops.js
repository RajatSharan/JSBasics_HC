// //for of

// ["","",""]

// const arr=[1,2,3,4,5]

// for (const num of arr) {

//     console.log(num);
    
    
// }

// const greetings="Hello world!"

// for (const greet of greetings) {

//     console.log(`Each char of ${greet}`);
    
    
// }

//Maps

const map= new Map()
map.set('IN','India')
map.set('USA','United states of America')
map.set('FR','France')
map.set('IN','India')

//console.log(map)

for (const [key,value] of map){
    console.log(key,':-', value);
    
}

const myObject={
     'js':'Javascript',
     'cpp':'C++',
     'rb':"ruby",
     'swift':"swift by apple"

}

// for(const [key,value] of myObject){
//     console.log(key,':-', value);
    
// }

//For IN

for (const key in myObject){
    console.log(myObject[key]);
    
}


const myArr=["JS","Java","Ruby","Python"]

for(const key in myArr){

    console.log(myArr[key])
}