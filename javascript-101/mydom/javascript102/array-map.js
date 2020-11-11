//array of letters
//it creates new array that is exact same length as you started with
//it loops through just like forEach, but it creates new array
//does not have an impact of original source


let letters = ["a","b","c","d"]
let letterPlus = letters.map(function(letter){
    return letter+letter
})
console.log(letters)
console.log(letterPlus)

//another example
let letterObj = letters.map(function(letter,idx){
    return {
        name:letter,
        index:idx,
        letterIdx : letter+idx
    }
})

console.log(letterObj)

//should not be modifying original array using map


let myArr = [
    {
        name: "chevy",
        speed: 100,
        passangers: 2
    },
    {
        name: "ford",
        speed: 80,
        passangers: 4
    },
    {
        name: 'jeep',
        speed: 120,
        passangers:6
    }

]
let names = myArr.map(vehicle=> vehicle.name)
console.log(names)


// #2

let toDo = [
    {
        id: 1,
        todo: "cut grass",
        status:"complete"
    },
    {
        id: 2,
        todo: "clean the garage",
        status:"todo"
    },
    }
        id


    
}

]