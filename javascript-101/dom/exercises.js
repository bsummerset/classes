// Create an empty html document that has nothing in the body.
// Using any of the techniques above (execpt for innerHTML)
// add a h1 with content as a title.
// add a main element.
// add a section inside of the main element.
// add a h2 element with a section title inside of the section element.
// add a p element inside of the element with some text.
// add a list of items in the main element




// let main = document.querySelector("main")
// let content = document.createElement("div")
// let sectionHeader = document.createElement("h1")
// let myList = document.createElement("ul")
// content.append(sectionHeader)
// main.append(content)

// console.log(myList)
// for(let i = o; i < 5; i++){
//     let l = document.createElement("li")
//     l.append(`This is item ${"li"}`)
//     myList.append(l)
// }

// let myList = [
//     {url: "http://www.google.com", id:"www.google-link", text: "Goto Google yo!"},
//     {url: "http://www.google.com", id:"www.google-link", text: "Goto Google yo!"},
//     {url: "http://www.google.com", id:"www.google-link", text: "Goto Google yo!"}
// ]

// let ul = document.createElement("ul")
// main.append(ul)
// myList.forEach(function(item){
//     let a = document.createElement("a")
//     a.href = item.url;
//     a.innerText = item.text;
//     let l = document.createElement("li")
//     l.append(a)
//     ul.append(l)
// })



// let header = document.querySelector("h1")
// header.style = "border: 2px solid black"
// header.style = "color: red;"

const para = document.getElementsByClassName(text);

// console.log(para.innerText);

para.innerText = "new text"