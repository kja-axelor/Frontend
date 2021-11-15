const express = require('express');
const bodyParser = require('body-parser').urlencoded({extended: false});
const fs = require('fs');

const app = express();
app.use(bodyParser)

app.listen(8080,"localhost", ()=>{
    console.log(`server is running at http://localhost:8080`);
})

// handling Get Request
app.get('/',(req,res)=>{
    res.sendFile("G:\\Axelor\\Frontend\\node\\html\\form.html");
    
});

// javascript
app.get('/js/form.js',(req,res)=>{
    res.sendFile("G:\\Axelor\\Frontend\\node\\html\\js\\form.js");
})

// login

app.post("/message.html",bodyParser,(req, res) => {
    res.sendFile("G:\\Axelor\\Frontend\\node\\html\\message.html");
    fs.appendFile("G:\\Axelor\\Frontend\\node\\log.txt",JSON.stringify(req.body) + `\n`,(error)=>{
        if(error){
            throw error;
        }
        console.log("log saved!!")
    }
    );
    console.log(req.body)
});