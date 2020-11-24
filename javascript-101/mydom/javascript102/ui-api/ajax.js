// const request = new XMLHttpRequest();
// request.onreadystatechange = (evt) => {
//     let req = evt.target;
//     if(req.readyState !== 4) return;
//     if(req.status === 200 || req.status == 304) console.log(req.response) 
// }

// request.open("GET", "test-.txt")
// request.send()

//rewrite using a function

// export const ajax = (url, callback, method = "GET", headers={
//     "x-Requested-With":"XMLHttpRequest",
//     "Access-Control-Allow-Origin": ""
}