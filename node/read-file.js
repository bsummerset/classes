//fs = file system 

// const fs = require("fs")

// fs.readFile("test.txt", 'utf8',(err, data)=>{
//     //throw the error and continue to run through code. could also console.log(err). Standard is throwing error
//     if(err) throw err;
//     //console.log(err)
//     console.log(data)

// })

// const fs = require("fs")

// fs.readFile("stuff.json", 'utf8', (err, data)=>{
//     if(err) throw err;

//     let output = JSON.parse(data)
//     output.map((value,index)=>console.log(`The item number ${index} is ${value}`))
// })




const fs = require("fs")

// fs.readFile("test.txt", 'utf8',(err, data)=>{
//     if(err) throw err;
//     console.log(data);
// })




fs.readFile("data.json", 'utf8', (err, data)=>{
    if(err) throw err;

    let output = JSON.parse(data)
    output.forEach((person) => {
        console.log(`${person.name} is ${person.age} years old!`)
    })
        
    });
  
