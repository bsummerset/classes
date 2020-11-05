// const para = document.querySelector('div.error')

// console.log(para);

// const paras = document.querySelecto('p');

// paras.forEach(para => {
//     console.log(para)
// }
// console.log(paras[2])


// let bigList = document.createElement("ul")

// console.log(bigList)
// let main = $("main")

// main.append(bigList)

// for(let i = 0; i < 6; i++){
//     let l = document.createElement("li")
//     l.append(`This is item #${i}`)
//     bigList.append(l)
// }

// const para = document.querySelectorAll("p")
// para.forEach(para =>{
//     console.log(para.innerText);
//     para.innerText += "new text"

// });

//  const error = document.querySelector(".error");
//  console.log(error.innerHTML);

// error.innerHTML += "<h2>This is a new H2</h2>"

// const people = ['mario', 'luigi','yoshi'];
// people.forEach(person => {
//     error.innerHTML += `<p>${person}</p>`
//  });

 const link = document.querySelector('a')  //selecting an attribute

console.log(link.getAttribute("href"));                 //change an attribute to something else and it update in the browser
link.setAttribute("href", "https://www.digitalcrafts.com");
link.innerText = "The Digital Crafts website";


const msg = document.querySelector("p") //grabbing the <p> tag
console.log(msg.getAttribute("class"));
msg.setAttribute("class", "success"); //change the style of element

// // //adding on attrubute that does not already exist

msg.setAttribute("style", "color:green;");

const title = document.querySelector("h1");
title.setAttribute("style", "margin: 50px;"); //change the style of attribute h1
console.log(title.style); //using style property. property of this element
console.log(title.style.color);// get the style color property of the title element

// //add styles
title.style.margin = "50px";
title.style.color = "crimson";
title.style.fontSize = "60px";

// //delete style removing single style
// title.style.margin = "";

// //change classes from javascript
const content = document.querySelector("p");
console.log(content.classList);

// //add/remove classes from tags in html page
content.classList.add("error"); //add error class
content.classList.remove("error"); //remove error class
content.classList.add("success");

//query all the elements, then cycle through them and give any tag a class or error when error is in the tag and a class of success where succes is in the tag
const paras = document.querySelectorAll("p"); // get reference to all <p> tags. return node list. can use .forEach in node list
paras.forEach(p => {                // for each paragraph, going to pass this into the callback
    //console.log(p.innerText) // gives all text that visible. will see in the console of webpage
    //console.log(p.textContent) //gives you the same as .innerText but give you all the text regardless of if its hidden text.
    if(p.textContent.includes("error")){
        p.classList.add("error")
    }
    if(p.textContent.includes("success")){
        p.classList.add("success")
    }
});

//how to toggle classes. if an element has a class we want to take it off, if an element doesn't have a class we want to apply it.
const newTitle = document.querySelector(".title"); //from the class title
title.classList.toggle("test"); // if the element does't have a class of test, it will give it one
title.classList.toggle("test");// run it again and if it does have a class of test, this will remove it
