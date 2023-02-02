// var, let , const
/**
 * The difference between let and var is that scope of a variable defined with let is limited to the block in which it is 
 * declared while variable declared with var has the global scope
 */

// function printNumber() {  
//     for(var i=0;i<10;i++){
//         console.log(i);
//     }
//     console.log("Outside block scope", i);
// }


function printNumber() {  
    for(let i=0;i<10;i++){
        console.log(i);
    }
    console.log("Outside block scope", i);
}

printNumber();

//let vs const
/**
 * once you bind a value/object to a variable using const, you can't reassign to that variable
 */

let number = 10;
console.log(number);
number = 50; // reassigning number variable with new value
console.log(number);

const pi=3.14;

console.log("Value of pi is ", pi);

pi = 22/7;  // reassign is not allowed in case of const 


//More example

// function shouldPrint(){
//     const print = true;
//     let printingCompleted = false;
//     if(print){
//         var numberToPrint = 10;
//         console.log("Printing : ", numberToPrint );
//     }
//     console.log(numberToPrint)
//     printingCompleted = true;
    
// }
// shouldPrint()

