//const coding = ["JS","Ruby","Java","Python","Cpp"]

// const values= coding.forEach((item)=>{

//     //console.log(item);
//     return
    
// })

// console.log(values);


const myNums=[1,2,3,4,5,6,7,8,9,10]

//const newNUms=myNums.filter( (num)=> num >4)

// const newNUms=myNums.filter( (num)=> {

//     return num >4
// })
// console.log(newNUms);


const newNums=[]

myNums.forEach((num)=>{
    if(num>4){
        newNums.push(num)
    }
})

console.log(newNums);

let cars = [
    {
      "color": "purple",
      "type": "minivan",
      "registration": '2000-01-03',
      "capacity": 7
    },
    {
      "color": "red",
      "type": "station wagon",
      "registration": '2018-03-03',
      "capacity": 5
    },
    {
        "color": "Blue",
        "type": "station wagon2",
        "registration": '2018-09-09',
        "capacity": 7
      
    },
    
  ]

  //const userCars=cars.filter((col)=> col.color === 'Blue')

  const userCars=cars.filter((pub)=> pub.registration >= '2000-01-03')



  console.log(userCars);
  

