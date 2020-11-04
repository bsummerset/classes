// let number = 5
// if(number % 2 != 0 && number % 3 != 0){
//     console.log("Not divisible by 2 and 3")
// }
// if((!number % 2) && !(number % 3)){
//    console.log("Not divisible by 2 and 3") 
// }

let value = 200
i = 0
while (i < value){
    if((i % 2) && (i % 3)){
        value += i
    }
    i++  
}
console.log(value)
