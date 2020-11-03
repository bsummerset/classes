// #1
function myFunction(one = 1, two = 2, three = 3) {
    return one + two + three
}
console.log(myFunction)

// #2
const thisThing = function(single){
    console.log("This is confussing")

}

function newFunction(noOneKnows, number){
    let i = 0
    while (i <= number){
        console.log[i]
        i++
    }
    noOneKnows()
}

newFunction(thisThing, 10)
    
newFunction(function(){
    console.log("Are we still doing this?")
    console.log("I think I got it!")
} , 25)



// #3