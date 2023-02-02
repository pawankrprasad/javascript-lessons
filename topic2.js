//Objects
/**
 * Object is a collection of key value pair in JavaScript.
 */

const person = {
    name: "Rahul Kumar",
    age:20,
    address : {
        houseNo:45,
        streetName:"main street"
    },
    displayName(){
        console.log(this.name)
    }
}

person.name = "Ravi";

// Accessing object property
// dot annotation
// bracket annotation

// const houseNumer = person.address.houseNo;

// console.log(houseNumer);
// // console.log(person.age)

// const field = 'address';

// const personName1 = person[field]['houseNo']
// console.log(personName1);


person.displayName();


//Creating an object
// const student = {
//     name: "Rahul Kumar",
//     dept:"Computer Science",
//     address:"Delhi",
//     printName: function(){
//         console.log(this.name)
//     }
// }

// const student = {
//     name: "Rahul Kumar",
//     dept:"Computer Science",
//     address:"Delhi",
//     printName(){
//         console.log(this.name)
//     }
// }

//Accessing an object properties

// console.log(student.name); //dot annotation
// console.log(student['dept']) // bracket annotation

//student.printName(); // Accessing methods

//Changing object property;

// student.name = "Rahul Gupta";
// student.printName(); // Accessing methods

