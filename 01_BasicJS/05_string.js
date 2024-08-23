const firstName = "Rajat"
const lastName= "Sharan"

let fullName = console.log(firstName + lastName);

let repocount=30

console.log(`${firstName}` + ` ${repocount}` + ` ${lastName}`);

const orignalString  = new String('My Name is Rajat sharan')

console.log(orignalString.__proto__)

console.log(orignalString.length);

console.log(orignalString.toUpperCase());

console.log(orignalString.split(' '))

let reverseString =orignalString.split(" ")


//console.log(orignalString.slice(0,4))


let rev=reverseString.reverse();

let reversedString= reverseString.join(' ')

//let reverseString1=reverseString.replace('Sharan','HAYA')

//console.log(`After Reverse String` +` = ${reverseString1}`)

console.log(orignalString.replace('Sharan','HAYA'))

const newString= new String('     Rajat.            ')

console.log(newString.trim('.'));
console.log(orignalString.trim(' '));

const url="https://mywebsiterajat/rajat%30sharan.com"

console.log(url.replace('%30','05'));

console.log(url.includes('rajat'))










