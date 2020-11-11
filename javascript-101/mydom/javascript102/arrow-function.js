// const myArrowFunc = (foo, bar)=>{
//     console.log(foo, bar)
// }
// //How to call 
// myArrowFunc('get some dats for ya')


// const myFunc = (foo) =>{
//     console.log(foo)
// }

// const returnStuff = (arg)=>{
//     return 'stuff +arg'
// }

// let result = returnStuff('My text')
// console.log(result)

// // Implicit return: with no curly brackets it implicly return value

// const returnStuff = arg => console.log(arg)

// let result = returnStuff('My text')
// console.log(result)

// //callback
// const doSomething = (callback)=>{
//     console.log('I did something')
//     callback()
// }
// doSomething(()=>console.log('This happens last')

// //for loop
// const myArr = ['a', 'b', 'c', 'd']
// myArr.forEach(ltter=>console.log(letter))





// const arrowFunc = (5)=>{
//     console.log(arrowFunc() * 5);
// }

// const arrowFunc = (a, b, c, d)=> (a+b+c)/d;
// console.log((5,5,5,5));

// const arrowFunc = (a, b, c, d) => {
//     return(a+b+c)/d
// }


arr = ['brian', 'dc student', 'dylan']

const newFunc = ()=>{
    return arr.forEach(item, this)
    console.log(this)
}
newFunc()