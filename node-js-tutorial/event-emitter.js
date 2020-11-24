//Event Emitter

//Only have to put in module name bc it is a call module built in js
//whatever is returned on the module on the export of this module will be stored in this events variable
// let events = require('events');

// let myEmitter = new events.EventEmitter();

// //when this event occurs, when its emitted
// myEmitter.on('someEvent', function(mssg){
//     console.log(mssg);

// });

// myEmitter.emit('someEvent', 'the event was emitted');

let events = require('events');
let util = require('util');

let Person = function(name){
    this.name = name;
};

//first parameter is the object constructor that we want to inherit something, then what we want it to inherit
util.inherits(Person, events.EventEmitter);

let james = new Person('james');
let mary = new Person('mary');
let ryu = new Person('ryu');

//now we want to set some event listeners to each name using custom events.

//set the variables to an array
//attaching custom event to each person in array
let people = [james, mary, ryu];
people.forEach(function(person){
    person.on('speak', function(mssg){
        console.log(person.name + ' said:' + mssg);
    });
});
james.emit('speak', 'hey dudes');
ryu.emit('speak', 'I want a curry');
