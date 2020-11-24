const fs = require("fs")
let lockfile = false;

const writeFile = ()=>{

    //if its not locked... lock it
    if(!lockfile){
        lockfile = true;

        //then write the file
        fs.writeFile("myFile.txt", "Hello Node File!", "utf8", ()=>{
            if(err) throw err;

            //done writing.. unlock the file
            lockfile = false;
            console.log("File Written without errors")
        })

    } else {
        //tell user file is locked
        console.log("the file is locked")

        //I could wait and try again....
        //or give up
    }

}

writeFile()
writeFile()
writeFile()
writeFile()

