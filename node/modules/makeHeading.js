const navigation = `
    <nav>
        <span><a href="?page=home">Home</a></span>
        <span><a href="?page=contact">Contact</a></span>
        <span><a href="?page=about">About</a></span>
    </nav>
`
const makeHeading = (page) =>{
    let heading
    switch(page){
        case "about":
            heading = `<h1>This is about!</h1>`;
            break;
        case "contact":
            heading = `<h1>This is contact</h1>`;
            break;
        case "foo":
            heading = "<h1>I Pitty THE foo</h1>"
            break;
        default:
            heading = `<h1>This is Home</h1>`;
    }
    return heading
}
let generateContent = ({page, navigation, heading, additional,count})=>{
    return  `
        <!DOCTYPE html>
        <html>
            <head>
                <title>My Selection:${page}</title><head>
                <link rel= "stylesheet" href="styles.css>
            <body>
                ${navigation}
                ${heading}
                The count is ${count || 0}. I hope you are happy.
                <ul>
                    ${additional.join("")}
                </ul>
                <footer>
                    copyleft 2020
                </footer>
            </body>
        </html>
    `
}

//using favicon

const server = http.createServer((req,res)=>{

    console.log(req.url)


  


  

    let heading = makeHeading(page)
    let foo = "Yo are awesome Clint!"
   
        foo
    })  

