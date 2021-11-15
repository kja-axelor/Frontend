const http = require("http");
const fs = require("fs");
const express = require('express');
var app = express();

var bodyParser = require("body-parser").json();
app.use(bodyParser);


const server = http.createServer((req, res) => {

  // serving html pages
  if (req.url === "/") {
    fs.readFile("G:\\Axelor\\Frontend\\node\\html\\form.html", (error, data) => {
      if (error) {
        throw error;
      } else {
        res.end(data);
      }
    });

    // javascript
  }else if(req.url === "/js/form.js"){
    fs.readFile("G:\\Axelor\\Frontend\\node\\html\\js\\form.js",(error, data) => {
        if (error) {
          throw error;
        } else {
          res.end(data);
        }
      }
    );
  }
  else if(req.url === '/message.html'){
    fs.readFile('G:\\Axelor\\Frontend\\node\\html\\message.html', (error,data)=>{
      if(error){
        throw error;
      }
      else{
      fs.appendFile("G:\\Axelor\\Frontend\\node\\log.txt",res.statusMessage + "\n",()=>{
        console.log("log is saved!!")
      })
        console.log(req.body) 
        res.end(data);
      }
    })

  }
  else {
    res.end("<h1 style='color:red;'>404 Page not found");
  }

  // response
  res.statusCode = 200;
  res.statusMessage = "ready to fire!";
  res.writeHead(200, "ready to fire!", { "Content-Type": "text/html" });
});

const PORT = process.env.PORT || 8000;
const host = "localhost";

server.listen(PORT, host, () => {
  console.log(`server is running at http://localhost:${PORT}/ krjani`);
});
