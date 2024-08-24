//Dates

//let newDate= new Date()
//console.log(newDate.toString())
//console.log(newDate.toLocaleDateString())
//console.log(newDate.toLocaleString())
//console.log(typeof newDate)

let myTimeStamp=Date.now()
console.log(myTimeStamp)
console.log(Math.floor(myTimeStamp/1000))


let newDate= new Date()
console.log(newDate.getDay());


console.log(`${newDate.getDay()} is new date`)

newDate.toLocaleString('default',{

    weekday:"long",


})