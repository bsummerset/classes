/* 
you can comment like this.

-hello to an array of name, one at a time.
    -for () loops
    -for of loops
    - .forEach()
-hello to names longet than 5 letters
    - .filter()
-hello to a name if it's in the array, otherwise "hello world"
    -.find()
*/

//define an array

// const names = [
//     "Alice",
//     "Bob",
//     "Charlie",
//     "Dom",
//     "Elle"
// ];

//to print names one at a time: for loop
//purpose of for loop is to start at some known situation
//A for loop is if you need more control

// for (let i = 0; i < names.length; i++){
//     const oneName = names[i];
//     console.log(`${i}: ${oneName}`);
 
// }
//for=of is when you only need the array elements, one at a time
// for(let oneName of names){
    // console.log(`Hello ${oneName}`);
    // console.log(`Goodbye ${oneName}`);
// }

//same as creating two seperate for loops as above

// const hello = (whom)=>console.log(`Hello ${whom}`);
// const bye = (whom) => console.log(`Bye ${whom}`);

// names.forEach(hello);
// names.forEach(bye)


// const combo = (name)=>{
//     hello(name);
//     bye(name);
// };
// names.forEach(combo);
//same as above .forEach. Aynnomous function.
//Take whats on the RHS of the assignment method (=) and put it directly into forEach parentheses
//Callback pattern
// names.forEach((name)=>{
//     hello(name);
//     bye(name);
// });


//Demo of .filter
const names = [
    "Alice",
    "Bob",
    "Charlie",
    "Dom",
    "Elle"
];
//isNameLong is an arrow function that uses implicit return
const isNameLong= (n) => {
    //could shortcut and just do this instead of the if statement
    //return the comparison
    return n.length > 4;
    // if (n.length > 4) {
    //     return true;
    // } else {
    //     return false;
    // }
}
//we use isNameLong as a callback to names.filter()
const longNames = names.filter(isNameLong);
console.log(longNames);

let longNames2 = [];
for (let n of names) {
    if (isNameLong(n)){
        longNames2.push(n);
    }
}
console.log(longNames2);


//Implementation of our own .filter
//A function that accepts an array 
//and returns an array, but only includes
//items that pass the callback() test.
//callback should return true or false

const myFilter = (arr, callback) =>{
    //1. Create a new, empty array
    let newArray = [];

//2. iterate through the items in the array we 
//were passed
for (let n of arr) {
    //3. Use callback function as a test
    if (callback(n)){
        //4.If the item passes
        //add it to the new array
        newArray.push(n);
    }
}
//5. Instead of printing, return the new array
return(newArray);

}
const longNames4 = myFilter(names,isNameLong);
console.log(longNames4);

