//Everthing is an object in javascript

console.log(typeof 'yes')
console.log(typeof new String('yes'))

let myString = 'yes'
let anotherString = new String('yes')

console.log(myString, myString.length)
console.log(anotherString, anotherString.length)

function Animal() {}
let rainbow = new Animal()

function Animal(type, name) {
    this.name = name;
    this.type = type;}

let shadow = new Animal('cat', 'shadow')