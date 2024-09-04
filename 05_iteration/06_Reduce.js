const myNums=[1,2,3,4]
const myTotal=myNums.reduce((acc,curval)=> { 
    console.log(`${acc} value ${curval}`);
   return acc+curval},0)
console.log(myTotal);

const shoppingCart = [{

    itemName:"js course",
    price: 2999
},
{

    itemName:"Python",
    price: 999
},
{

    itemName:"Mobile",
    price: 5999
}
]

const totalValue=shoppingCart.reduce((acc,num)=>acc+num.price,0)
console.log(totalValue);
