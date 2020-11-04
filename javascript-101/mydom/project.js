// const para = document.querySelector('div.error')

// console.log(para);

// const paras = document.querySelecto('p');

// paras.forEach(para => {
//     console.log(para)
// }
// console.log(paras[2])


let bigList = document.createElement("ul")

console.log(bigList)
let main = $("main")

main.append(bigList)

for(let i = 0; i < 6; i++){
    let l = document.createElement("li")
    l.append(`This is item #${i}`)
    bigList.append(l)
}