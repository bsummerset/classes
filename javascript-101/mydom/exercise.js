let number = 0;

let button = document.querySelector(".button")
button.classList.add("btn")

//assign function that increases button text when clicked
const func1 = function(){
    number++;
    if (number == 10){
        button.removeEventListener("click", func1);
        button.style.backgroundColor = "crimson";
    }
    button.innerHTML = number
};

const func2 = function(){
    console.log("function2 was fired")
};

//when the click happens, the button will run func1
button.addEventListener("click", func1)
button.addEventListener("click", func2)



// let titles = document.querySelector(".title");
// title.classList.toggle