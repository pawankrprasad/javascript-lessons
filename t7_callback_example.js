
function filter(numbers, callbackFun){
    for(const item of numbers){
        if(callbackFun(item)){
            console.log(item);
        }
    }
}


const numbers = [42,33,4,5,60,7,8,9,100,110,12,23,14,15,16,17,180,19,20];

console.log("ALL EVEN NUMBER=====================")
filter(numbers, num => num%2===0);


console.log("ALL ODD NUMBER=====================")
filter(numbers, num => num%2===1);



// const result = (item)=>item%5==0

// console.log(result(10))






//for-of  for-in

// const names = ['Rahul', 'Ravi', 'Vikram','Pawan', 'Maneesh'];

// for(let i=0;i< names.length; i++){
//     console.log(names[i]);
// }


// for(let index in names){
//     console.log("Name is ", index);
// }



// for(let name of names){
//     console.log("Name is ", name);
// }










//even number

// const findEvenNumber = numbers=> {
//     for(let i=0;i<numbers.length;i++){
//         if(numbers[i]%2==0){
//             console.log(numbers[i]);
//         }
//     }
// }

// const findOddNumber = numbers => {
//     for(let i=0;i<numbers.length;i++){
//         if(numbers[i]%2>0){
//             console.log(numbers[i]);
//         }
//     }
// }


// const myNumbers = [2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20];


// findOddNumber(myNumbers)








