//Reading and Writing files on the computer
//will need call module fs
//set variable name equal to module name


// let fs = require('fs');


//Syncronous method
// blocking the flow of the code until this is complete
//first parameter is file itself
//second parameter is the character in coding
//fs module has gone out and read the readMe file syncronously and used the utf8 in coding to store the file contents in the readMe variable and log that to the console.

// let readMe = fs.readFileSync('readMe.txt', 'utf8');
// console.log(readMe);

//Write a file
//read the file, store in variable, then take the contents of that variable and write it to a new file.
// writing file syncronously

// let readMe = fs.readFileSync('readMe.txt', 'utf8');

//first parameter is where we want the file written to
//second parameter is the data that we want to write to the file

//new file named writeMe.txt is created
// fs.writeFileSync('writeMe.txt', readMe);


//now reading and writing files asyncronously
//will need a third parameter which is the callback function to fire when the process is complete. it takes two parameters; first an error if there is one, second the data that we retireve and read from the file

let fs = require('fs');

//reading the file, then firing the function. Once it's read the file and we're passing the data that it has read to the function that is logged to the console.

// fs.readFile('readMe.txt', 'utf8', function(err, data){
//     console.log(data);
    

// });
//not blocking the remaining code. If it is additional code it will continue to run while it's reading the data

// console.log('test');

//writing file asyncronously

// let fs = require('fs');

// fs.readFile('readMe.txt', 'utf8', function(err,data){
//     fs.writeFile('writeMe.txt', data);
// });
