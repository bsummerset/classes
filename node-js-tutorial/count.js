var counter = function(arr){
    return 'There are ' + arr.length + ' elements in this array';
};
//took this console.log and put it into modules file
// console.log(counter(['shaun', 'crystal', 'ryu']));


//Explicitly say what part of the module we want to make availiable outside of this module.
module.exports = counter;
