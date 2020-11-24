// use node to run and execute a node program. input node in terminal.


// for(let i = 0; i < 101; i++){
//     console.log(i);
// }


// const myFunc = function(speak){
//     console.log("The cow says " + (speak));

// }
// myFunc('moooo')
// myFunc('feed me')
// myFunc("I'm full now")

let people = [{name:"batman", powers:"none"}, {name:"iron man", power:"rich"}, {name:"The Hulk", powers:"being green"}, {name:"Superman", powers:"Being an Alien"}]

let names = people.map((people) => {
    return people.name;
});
console.log(names)
