// Create an node program that will write a paragraph to a file named paragraph.txt
// Create a node program that will convert an array of at least 3 objects (cars) that each have the keys name, speed, year to a json string and write it to a file called "cars.json".
// later in the program add two more cars to the file.
// (Bonus individual or as a class) Using the previous exercise, create a visit logger that will save the clients ip address (req.connection.remoteAddress) to an object along with a timestamp of when the last time the client visited the site.
// Save this object to a json file whenever a client visits.
// Add a statement like "You visited this site MM/DD/YYYY" at the end of the response data.




const fs = require("fs");

let paragraph = "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet. It uses a dictionary of over 200 Latin words, combined with a handful of model sentence structures, to generate Lorem Ipsum which looks reasonable. The generated Lorem Ipsum is therefore always free from repetition, injected humour, or non-characteristic words etc."

fs.writeFile("paragraph.txt", paragraph, "utf8", (err)=>{
    if (err) throw err;
    console.log("New file was created")
})