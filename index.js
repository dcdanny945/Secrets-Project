//To see how the final website should work, run "node solution.js".
//Make sure you have installed all the dependencies with "npm i".
//The password is ILoveProgramming
import  express from "express";
import bodyParser from "body-parser";
import {fileURLToPath} from "url";
import {dirname} from "path";
const __dirname = dirname(fileURLToPath(import.meta.url));

const app = express();
const port = 3000;


// let authorised = false;

app.use(bodyParser.urlencoded({extended:true}));

// function passwordCheck(req, res, next){
//     const password = req.body["password"];
//     if( password === "ILoveCoding"){
//         authorised = true;
//  }
//  next();
// }

// app.use(passwordCheck);

app.get("/", (rep,res) =>{
    res.sendFile(__dirname + "/public/index.html");
})

app.post("/check", (req,res) => {
    const password = req.body["password"]; // new line 
    if( password === "ILoveCoding~"){ // new password 
    res.sendFile(__dirname + "/public/secret.html");
    }

    else{
        res.sendFile(__dirname + "/public/tryagain.html");
    }
})
app.listen(port, ()=> {
    console.log(`Lisitening on port ${port}`);
})

