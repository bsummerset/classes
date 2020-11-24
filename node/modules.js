//another javaScript file
// const os = require("os")
//when it is a build in module, you don't have to put any route to it ie ./
//can also use let or var but let and const is more modern
// standard practice is to name the variable the same as the module you are importing

// const http = require("http")

// const fs = require("fs")

// console.log(os.platform())

// const getInfo = ()=>{
//     console.log(os.platform(),os.homedir(), os.hostname())
// }
// getInfo()

let os = require("os")
//console.log(Object.keys(os))

const myInfo = ()=>{
    let myArr = [os.freemem(), os.networkInterfaces(), os.userInfo()]
    return myArr
}


