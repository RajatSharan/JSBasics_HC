const user = {

username:"rajat",
value:999,


welcomeMessage : function(){

    console.log(`${this.username},welcome to website`);
    console.log(this)
    

        }


}

// user.welcomeMessage()
// user.username="sam"
// user.welcomeMessage()

//when we run this in browser then window object will be called

//console.log(this);

// function one(){

//     let username1="rajat"
//     console.log(this.username1)
// }

// one()


// const chai = ()=>{
//      let username1="rajat"
//      console.log(this)
// }

// chai()

//const addTwo =(num1,num2) => num1 + num2  //Implicit return

//const addTwo =(num1,num2) => (num1 + num2) 

const addTwo =(num1,num2) => ({username :"rajat"})

console.log(addTwo(3,4))

const myArray=[2,5,7,8,9]

//myArray.forEach()