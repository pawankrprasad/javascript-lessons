//Default Value, Rest, Properties rename

const person = {
    name: "Rahul Kumar",
    age:20,
    address : {
        houseNo:45,
        streetName:"main street"
    },
    email:"pawan@email.com"
}



const {name: personName, ...otherProperties} = person;

console.log(personName);
console.log(otherProperties);



// const person1 = {
//     name: "Rahul Kumar",
//     age:20,
//     address : {
//         houseNo:45,
//         streetName:"main street"
//     },
//     email: undefined
// }


// const { name: personName, age , email="Not Available"} = person1;

// console.log(`Name = ${personName}, Age = ${age}, Email = ${email}`);






// const name = "Ravi Kumar Gupta";

// const [fistName, middleName, lastName="Prasad"] = name.split(" ");

// console.log(fistName);
// console.log(middleName);
// console.log(lastName);




// const numbers = [42,33,66,4,87,90];

// const [num1, num2, ...remainingNumbers] = numbers;

// console.log(num1);
// console.log(num2);
// console.log(numbers)
// console.log(remainingNumbers)






// Array Destructuring

// const [a, b] = array;
// const [a, , b] = array;
// const [a = aDefault, b] = array;

// Rest property
//You can end a destructuring pattern with a rest property ...rest.
// This pattern will store all remaining properties of the object or array into a new object or array.


// const [a, b, ...rest] = array;
// const [a, , b, ...rest] = array;


// Object Destructuring

// const { a, b } = obj;
// const { a: a1, b: b1 } = obj;
// const { a: a1 , b = bDefault } = obj;
// const { a, b, ...rest } = obj;
// const { a: a1, b: b1, ...rest } = obj;



