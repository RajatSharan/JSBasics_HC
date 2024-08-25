//singleton

//If we delare objects as letral then it will not create signleton but if we create object through constructor then it will create singleton

//Object litral

const mySym= Symbol("Key1")

const jsUser={

                name:"Rajat",
                "Full name":"Rajat Sharan",
                [mySym]:"Mykey1",
                age:20,
                city:"Jaipur",
                email:"rajatsharan@gmail.com",
                isLoggedIn:true,
                lastLoggedIndays:["Monday","Sunday"]

}

console.log(jsUser.email)
console.log(jsUser["email"])
console.log(jsUser["Full name"])
console.log(jsUser[mySym])

jsUser.email="rajatsharan4@gmail.com"
//Object.freeze(jsUser)
jsUser.email="rajatsharan4@c.com"
console.log(jsUser)

jsUser.greeting= function(){

    console.log("hello js user")
}

jsUser.greetingTwo= function(){

    console.log(`hello js user ${this.email}`)
}


jsUser.greeting()
jsUser.greetingTwo()