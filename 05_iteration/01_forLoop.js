// // //for loop

// // for (let i = 0; i <= 10; i++) {
// //     const element = i;
 
// //     if(element==5){

// //         console.log("5 is best number");
        
// //     }
// //     console.log(element)
// // }   

// for (let i = 0; i <=10; i++) {

//     console.log(`Outerloop value : ${i}`);
    
//     for (let j = 0; j <=10; j++) {
        
//         //console.log(`innerloop value : ${j} and inner loop : ${i}`);

//         console.log(i + '*' + j + ' = ' + i*j) ;
        
        
//     }
    
// }

let myArray=[0,1,2,3,4,5,6]

// for (let index = 0; index < myArray.length; index++) {
//     console.log(myArray.length);
    
//     const element = myArray[index];
//     console.log(element);
    
    
// }

for (let index = 0; index <= 20; index++) {
    const element = index;
    if(index==5){

        console.log(`value of index: ${element}`);
        continue
        
    }
    console.log(element);
    
    
    
}