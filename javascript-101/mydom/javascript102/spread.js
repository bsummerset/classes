// let family = [
//     {
//         name:"clint",
//         age:38
//     },
//     {
//         name:"Anna",
//         age:37
//     },
//     {
//         name:"Olivia",
//         age:11
//     },
//     {
//         name:"Alle",
//         age:9
//     },
//     {
//         name:"Mark",
//         age:7
//     }
//   ]

// //   let updated = family.map(member =>({...member, surname: "fleetwood"}))
// //   console.log(updated)

//   let updated = [...family.filter(p=>p.name == "Mark"), {name:"Markamus Prime", age:7}]
//   console.log(updated)



let letters = ["a", "b", "c","d"]
let numbers = [1,2,3,4]

let combined = [...letters, ...numbers, ]
let newCombined = [...numbers, ...letters, ]
console.log(combined)
console.log(newCombined)



const cars = [
    {
        make:"Chevy",
        model:"Corvette",
        year:2019
    },
    {
        make:"Ford",
        model:"Mustang",
        year:2018
    },
    {
        make:"Tesla",
        model:"Model 3",
        year:2020
    },
    {
        make:"GMC",
        model:"h2",
        year:2010
    }
 ]
 let newCars = [... cars, "volvo", "jeep"];
 console.log(newCars);
// let additionalCars = car => ({ ... car, make: "Honda", model: "civic", year: 2019}{member...car, make:"jeep", model: "wrangler", year: 1986})