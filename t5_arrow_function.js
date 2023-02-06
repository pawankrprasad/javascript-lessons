//Concise way to write function in javascript


//Arrow function with single parameter

 const square =  number =>  number*number;

 //Arrow function with more than one parameter
 const addition =  (num1, num2) =>  num1+num2;

  //Arrow function with no parameter
  const printHello =  () =>  console.log("Hello");

 function addition(num1, num2){
    return num1+num2;
 }

console.log(square(20));




//Pending

// const square = number=> number*number;
// console.log(square(20));

// const person = {
//     age:40,
//     displayAge: function(){
//         setTimeout(function(){
//             console.log(this.age)
//         },1000)
//     }
// }

// const person = {
//     age:40,
//     displayAge: function(){
//         setTimeout(()=>{
//             console.log(this.age)
//         },1000)
//     }
// }

//person.displayAge()

//arrow function as callback
//map,filter,find functions
