// function madlib(name, subject) {
//     console.log( `${name}'s favorite subject in school is ${subject}`)   
// };

// madlib("brian", "math")

// #2
// var myService = {
//     good: 0.2,
//     fair: 0.15,
//     poor: 0.1,
// };
// function tipAmount(bill, serviceLvl) {
//     return bill * myService[serviceLvl] || 0.2;
// }
//  console.log(`Tip Amount `)
//     // #3

// function printNumbers(num1, num2){
//     for (let i = 0; i < 20; i++){
//        console.log(i)
//     }
// }

//  #4

// function printBox(size){
//     let mySquare = " ";
//     for(i = 0; i < size; i++){
//         for (j = 0; j < size; j++){
//             mySquare += "*"
//         }
//         console.log(mySquare);
//             mySquare= " ";
//     }
// }

// function printSquare(size) {
//     let string = "---\n";
//     console.log(string.repeat(size));
// }

// printSquare(7);

// const printSquare = function(v) {
//     let s = "-".repeat(v)+'\n'
//     console.log(s.repeat(v))

// }

// printSquare(3)
// printSquare(4)
// printSquare(10)


 // #5

//  function printBox(width,height) {
//     console.log(" _".repeat(width));
//     for(let i = i < height - 1; i++) {
//         console.log("| " + "  ".repeat(width - 2) + "  |");
//      }
//     console.log(" _".repeat(width));
//  }

//     printBox(5,6 )


function printBanner(text){
    let l = text.length;
    let s = "";
    for(let i = 0; i < l+2; i++)
    s += '-'
    console.log(s)
    console.log("-"+text+"-")
    console.log(s)
}

    printBanner("This is Clint")
    printBanner("I don't know the poem at all")
   
