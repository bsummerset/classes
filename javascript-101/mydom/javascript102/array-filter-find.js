// //Use filter
// let numbers = [5,3,-10,3,-21,78,-54,-1,8]
// let positive = numbers.filter(num=> num> 0)
// console.log(positive)
// // will create a new array of all items that the expression will return true
// //the callback function on a filter will only return true or false with will put in source element at that time.

// //filter always returns an array and for each item if the function returns true, that item is added to the new array

// let numbers = [5,3,-10,3,-21,78,-54,-1,8]
//   bigNumbers = numbers.filter(num=>num > 100)
//   console.log(bigNumbers) //[] empty array

//   //filter is not designed to modify the item as it is added. It is designed to simply filter out items from the array.

//     //common usage
//     let ships = [
//         {
//             type:"freighter",
//             name:"falcon"
//         },
//         {
//             type:"fighter",
//             name:"xwing"
//         },
//         {
//             type:"bomber",
//             name:"ywing"
//         },
//         {
//             type:"fighter",
//             name:"tie-fighter"
//         }
//     ]
  
//     let fighters = ships.filter(ship=>ship.type == "fighter")//implicit return
//     let justNames = fighters.map(fighter => fighter.name)//only want names
//     let justNames = ships                       //combining filter and map
//     .filter(ship=>ship.type == 'fighter')
//     .map(fighter => fighter.name)

//     console.log(justNames)


    // Find

    //loops through and return true or false and returns a single item and undefined, once it finds the item, it returns that item.

    //find ALWAYS returns 1 item or undefined

// let numbers = [1,2,3,4,5,6,7,8]
// let more = numbers.find(num=>num > 5)

//if its more than 1 item, only returns the first


//timestamp :number of miliseconds since dec 31st 1969 at 11:59
// let timestamp = new Date(input dates).getTime()
// console.log(timestamp)

//Exercise 1.
//  Create an array of at least 6 todo items with each todo having keys, id, todo, status, deadline (timestamp).
// Make at least one date before today.
// Limit the status to "complete","in-progress","todo"
// Using filter, create an array of only the complete items.
// Using find, get the soonest todo item that has a status of "todo".
// using filter get an array of all of the past due items.


let todo = [
    {
        id: 1,
        todo: "laundry",
        status: "in-progress",
        deadline: new Date()
    },
    {
        id: 2,
        todo: "wash dishes",
        status: "todo",
        dedline: new Date("11/10/2020")

    },
    {
        id: 3,
        todo: "wash car",
        status: "complete",
        deadline:new Date("11/08/2020")
    },
    { 
}]

let completed = todo.filter(todo=> todo.status === "todo" ? true : false)

console.log(completed)

// let chore = todo.find(item => new Date (item.deadline),getTime() - Date.now())
let now = new Date().getTime()
let soonest = todo.sort((a,b)=> a.deadline.getTime()-b.deadline.getTime())
.find(t=>{
    if (t.deadline.getTime() < now && t.status=="todo"){
        return true;
    }
 })
// console.log(soonest)

let past = todo.filter(t =>.deadline.getTime() < now && t.status == "todo")
console.log(past)

let progress = todos.filter(item=>new Date (item.deadline).getTime() < Date.now())
console.log(progress)//This returned an array of all items that are late in my todo list