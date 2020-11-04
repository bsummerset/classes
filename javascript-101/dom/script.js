// console.log("This is happening people!")
// console.log("another one")
// console.log("This is a warning")
// console.table([{name: 'Brian', age:2}

// let paragraphs = document.getElementsByTagName("p")
// console.log(paragraphs)

// let ideas = document.getElementsByClassName("concept")
// console.log(ideas)

// let main = document.getElementById("main-idea")
// console.log(main)

// let heading = document.querySelector("h1")
// console.dir(heading)

// example of html doc and add ul with li child items in the ul. use a for loop to add the child items.
// let content = document.createElement("div")
// let bigList= document.createElement("ul")
// console.log(content, bigList)
// //can creat any tag in element
// let main = document.querySelector("main")

// console.log("Added created items to document")
// main.append(conten, bigList)

// console.log("added li items to list")
// for(let i = 0; i < 6; i++){
//     let l = document.createElement("li")
//     l.append(`This is item#${i}`)
//     bigList.append(l)
// }

// append to add text

// let main = document.querySelector("main")
// let p = document.createElement("p")
// p.append("This is the text in the paragraph")

// let p2 = document.createElement("p")
// p2.append("Some additional text")

// console.log("text");

// //inner text
// main.append(p,p2)

// let header = document.querySelector("h1")
// header.innerText = "I want my title to be different"

let main = document.querySelector("main")
main.id = "main-item"

let a = document.createElement("a")
a.innerText = "This is an awesome link"
a.href = "http://digitalcrafts.com"

let picture = document.createElement("img")
picture.setAttribute("src", "https://www.imagesource.com/wp-content/uploads/")
picture.setAttribute("alt", "Pretty picture of rio")
main.append(picture)
