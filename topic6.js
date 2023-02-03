
//Function as argument

// function printMessage(num1,num2, runTask){

//     console.log("Before calling callback function");
//     runTask(num1,num2);
// }

// printMessage(50,40, (num1, num2)=> console.log(num1+num2) );
// printMessage(50,40, (num1, num2)=> console.log(num1-num2));


//Function as argument

// function printHello(message, func){
//     console.log(message);
//     func();
// }


// function func1(){
//     console.log("Function one")
// }


// const func2 = ()=> {
//     console.log("Function two")
// }

// printHello("Hello", func1)
// printHello("Hello", func2)
// printHello("Hello", ()=>console.log("Callback func"))



// function example2(callback) {
    
//     setTimeout(function () {
       
//             callback("Task completed")

//     }, 2000)
// }

// example2((message) => console.log(message))
