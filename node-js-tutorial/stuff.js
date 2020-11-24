var counter = function(arr){
    return 'There are ' + arr.length + ' elements in this array';
};


let adder = function(a,b){
    return `The sum of the 2 numbers is ${a+b}`;
};

let pi = 3.142;

module.exports.counter = counter;
module.exports.adder = adder;
module.exports.pi = pi;

//could also do:
// module.exports.counter =
// module.exports.adder =
// module.exports.pi =

//or
//object literal
// module.exports = (
//     counter: counter,
//     adder: adder,
    pi: pi
)