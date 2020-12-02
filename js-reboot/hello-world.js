
// #Arguments
// a.k.a. "parameters"
//think of them as variableles that is assigned *when you call* the function
//If you don't pass in a value, the argument will be 'undefined'
    //'undefinde' means no value was assigned

// #Arrow Function
    //

// #Scope
//Scope is "where you can use a variable"
//If you define a variable in a function, you can only use it inside of that function.

//each function is its own scope

//a function is like a recipe

// function helloLiz(){
//   console.log("hello Liz");  
// }



function helloTurkey(){
    console.log("hello Turkey");  
  }



  function hey(){
      const whom = "Brian";
  }
  

  //template literal to log a variable
  //function declaration
// function helloWhom(person){
//     console.log(`Hello ${person}`);
// }
// helloWhom('Milla');
//you have to "make" the recipe (call the function)
// helloLiz();
// helloTurkey();


//Arrow function

//1.Use function name as a const variable
//2.on the RHS, copy/paste the function
//3. delete the name from the RHS

// const helloWhome = function (person){
//     console.log(`Hello ${person}`);
// }
// helloWhom('Milla');

//arrow func
//1. copy/paste your function expression as variable
//2. delete the word function from RHS
//3. put an arrow after the parentheses

// const helloWhom = (person)=> {
//     console.log(`Hello ${person}`);
// }

// helloWhom('Someone!');


const makeSandwich = (toppings)=> `[pita] ${toppings} [pita]`;

// const mySandwich = makeSandwich("tofu");
// console.log(mySandwich);

//or you can just use this method: both works!!!

console.log(makeSandwich("tofu"));