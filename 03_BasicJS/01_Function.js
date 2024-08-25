

function sayMyName(){
    console.log("R");
    console.log("A");
    console.log("J");
    console.log("A");
    console.log("T");

}

//sayMyName()

function addNumber(number1,number2){


    console.log( number1+number2)

}

//addNumber(3,5)

function addTwoNumber(number1,number2){


    //result=number1+number2
    //console.log("Rajat")
    return number1+number2

}

const result=addTwoNumber(3,2)
//console.log("Return "+ result)

function loginUserMessage(username="sam"){
//if(username===undefined)
if(!username)
    
    {
       console.log("Please enter username")
        return
}

    return `${username} is just logged in `

}
// //console.log(loginUserMessage("Rajat"))
// console.log(loginUserMessage())

function calculateCartPrice(val1,val2,...num1){

           return num1


}
//... rest operator

//console.log(calculateCartPrice(200,300,400,500,2000))

const user={

    username:"rajat",
    prices:5
}

function handleObject(anyobject){


    console.log(`user name is ${anyobject.username} and price is ${anyobject.prices}`)
 

}

handleObject({

    username:"sam",
    prices:399
})

const myNewArray=[200,400,500,700]

function returnSecondValue(getArray){

return getArray[1]

}

console.log(returnSecondValue(myNewArray))