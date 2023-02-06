

//Spread Operator - Object

const person = {
    name: "Rahul Kumar",
    age:20,
    email:"pawan@email.com"
}

const address = {
    houseNo:45,
    streetName:"main street"
}

const person1 = {
    ...person,
    address: {...address},
    phoneNumber:"43543543534",
    name : "Ravi Kumar"
};

console.log(person1)


// const person = {
//     name: "Rahul Kumar",
//     age:20,
//     address : {
//         houseNo:45,
//         streetName:"main street"
//     },
//     email:"pawan@email.com"
// }

// const person1 = { ...person };

// console.log(person1);




// //Spread Operator - Array

// const cricketPlayes = ["a","b","c"];
// const hockeyPlayes = ["d","e","f"];

// const players = ["xyx", ...cricketPlayes, ...hockeyPlayes];

// console.log(players);



// const numbers = [42,33,66,4,87,90];

// const newNumber = [23,34, numbers[0], numbers[1]];

// //const newNumber = [23,34, ...numbers];

// console.log(newNumber);




