//if

//if(condition){

//}

// const isUserLoggedIn= true

// if(isUserLoggedIn){

//     console.log("value is correct")

// }

// const score=200

// if(score>100){
//     let power="fly"
//     console.log(`score is valid ${power}`);
    
// }
// console.log(`score is valid ${power}`);

//short hand notation

// const balance=1000

// if(balance>500) console.log("test"),
// console.log("test2");

// if(balance<500){

//     console.log("less than");
    

// }
// else if(balance <750){

//     console.log("less than 750");
    

// }else if(balance <950){

//     console.log("less than 950");
    

// }else
// {
//     console.log("less than 1200");
// }

const userLoggedIn=true
const debitCard=true
const loggedINFromGoogle=false
const loggedINFromEoogle=true

if(userLoggedIn && debitCard && 2==2){
    console.log("allow to buy courses");
    
}

if(loggedINFromGoogle ||loggedINFromEoogle ){
    console.log("allow to buy courses2");
}
