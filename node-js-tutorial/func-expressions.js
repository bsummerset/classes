//function Expressions

//normal function statement
function sayHi(){
    console.log('hi')
};
sayHi();

//Can pass through a function into another function then call that function
//using a function as a parameter
function callFunction(func){
    func();
}

//function expression
var sayBye = function(){
    console.log('bye');
};

//calling function within function
callFunction(sayBye);

