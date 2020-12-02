//Why do I not need the .js at the end?
//What's up with the ./?

const users = require("./db"); //If db is a directory, Node looks for db/index.js
//We declare a variable on the LHS
//On the RHS, we call the require() function and pass it the path
//to our db.js file. Node is OK if you leave off the .js

//Do I have to use the same name as the variable in db.js?
    //Nope! The variable on the LHS does *not* have to match, Name it whatever you like!


//I want to use the users array!
console.table(users);



//If you want to export multiple modules

// module.exports = {
//     db1: db1,
//     db2: db2

    //or you could do
    //db1: require("path"),
    //db2: require("path")
// }



//Takeaways for exploring a new codebase:
/*
-start with a file named app.js, server.js, main.js, or index.js
-look at require() and module.exports first
-find one place of functionality, locate a function and examine the parameters and return value
-repeat until satisfied.
-module.exports exports a value, not a variable.
-require() is a function call, meaning it is replaced with the exported value.
*/