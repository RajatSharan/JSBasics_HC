//const opsUser= new Object() //non Singleton

const opsUser={} //Singleton

opsUser.id="123abc"
opsUser.name="Sam"
opsUser.isloggedIn=false

//console.log(opsUser)

const regularUser={

    email:"someone@gmail.com",
    fullName:{

        userName: {

            firstName: "Rajat",
            lastName: "Sharan"

        }

    }

}

console.log(regularUser.fullName.userName.firstName);

const obj1={1: "a",2:"b"}
const obj2={3:"a",4:"b"}
const obj4={5:"a",6:"b"}
//const obj3={obj1,obj2}

//const obj3=Object.assign({},obj1,obj2,obj4)
//console.log(obj3)
const obj3={...obj1,...obj2}
console.log(obj3)


//DB values

const users=[
{
        id:1,
        email:"rajatsharan05@gmail.com"

},
{
    id:2,
    email:"rajatsharan06@gmail.com"

},
{
    id:3,
    email:"rajatsharan07@gmail.com"

},


]

users[1].email
console.log(opsUser)

console.log(Object.keys(opsUser));
console.log(Object.values(opsUser));
console.log(Object.entries(opsUser));

console.log(opsUser.hasOwnProperty('isLogged'));


///////////////////Destructing Object/////////////////

const course ={

    courseName: "Javascript",
    price: 9999,
    CouseInst:"Rajat"



}


//console.log(course.price);

const {price : p}=course
console.log(p)


// {

//     "name":"Rajat",
//     "course":"Timber",
//     "price":5

// }


