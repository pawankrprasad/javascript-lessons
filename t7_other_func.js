

const students = [
    { id: "001", name: "Anish", sports: "Cricket" },
    { id: "002", name: "Smriti", sports: "Basketball" },
    { id: "003", name: "Rahul", sports: "Cricket" },
    { id: "004", name: "Bakul", sports: "Basketball" },
    { id: "005", name: "Nikita", sports: "Hockey" }
];

const onlyNames = students.map((student) => {
    return {
        id:student.id,
        name:student.name
    }
})

//console.log(onlyNames)

const result =  students.filter((student)=> {
    if(student.name==='Rahul'){
        return student;
    }
})

//console.log(result);

const result1 =  students.find((student)=> {
    if(student.id==='004'){
        return student;
    }
})

//console.log(result1);


const studentName = students.filter(student => student.sports==='Cricket')
                            .map(student=> {
                                return {
                                    id:student.id,
                                    name:student.name
                                }
                            });


// for(const student of studentName){
//     console.log(student.name)
// }

studentName.forEach(student => student.address = "Delhi");


console.log(studentName);



//console.log(studentName);











// .map();

// const numbers = [42,33,4,5,60,7,8,9,100,110,12,23,14,15,16,17,180,19,20];


// const result = numbers.map(num => `double of ${num} is ${num*2}`);

// console.log(result);

//Filter 

// const evenNumbers = numbers.filter(num => num%2===0);
// const oddNumber = numbers.filter(num => num%2===1);

// console.log(oddNumber);

//Find
// const evenNumber = numbers.find(num => num%2===0);
// console.log(evenNumber);













// function scanArray(array, func){
//     for(const item of array){
//         if(func(item)){
//             console.log(item);
//         }
        
//     }
// }


// scanArray([2,3,4,5], (item)=>item==5)


//map, find, filter

// Taking an array of Student object
// const students = [
//     { id: "001", name: "Anish", sports: "Cricket" },
//     { id: "002", name: "Smriti", sports: "Basketball" },
//     { id: "003", name: "Rahul", sports: "Cricket" },
//     { id: "004", name: "Bakul", sports: "Basketball" },
//     { id: "005", name: "Nikita", sports: "Hockey" }
// ]

//Printing only names using map


// const onlyNames = students.map(function(item){
//     return item.name
// });



// const onlyNames = students.map((item)=> {
//     return item.name
// });

// console.log(onlyNames);

/* Printing students who play
basketball using filter */
  
  
// const basketballPlayers = students.filter(function (student) {
//             return student.sports === "Basketball";
//         });
// console.log(basketballPlayers)


/* Printing students name who play
basketball using filter */
  
// const basketballPlayersName = students.filter(function (student) {
//             return student.sports === "Basketball";
//         }).map(student=>student.name);

// console.log(basketballPlayersName)

// // Printing out the name of Basketball players using forEach
// basketballPlayersName.forEach(function (players) {
//     console.log(players);
// });