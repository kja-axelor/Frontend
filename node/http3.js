const http = require("http");
const fs = require('fs');

const server = http.createServer((req, res) => {
  // request url routing
  // if (req.url === '/') {
  //   res.end("<h1 style='color:red;'>Hello HomePage!!</h1>")
  // }
  // else if(req.url === '/about'){
  //   res.end("<h1 style='color:red;'>Hello AboutPage!!</h1>");
  // }
  // else{
  //     res.end("<h1 style='color:red;'>404 Page not found");
  // }

  // serving html pages
  if (req.url === "/") {
    fs.readFile('./html/home.html',(error,data) => {
      if(error){
        throw error;
      }
      else{
        res.end(data);
      }
    })
  } else if (req.url === "/about") {
     fs.readFile("./html/about.html", (error, data) => {
       if (error) {
         throw error;
       } else {
         res.end(data);
       }
     });
  } else {
    res.end("<h1 style='color:red;'>404 Page not found");
  }

  // response
  res.statusCode = 200;
  res.statusMessage = "ready to fire!";
  res.writeHead(200,"ready to fire!",{'Content-Type':'text/html'});
});

const PORT = process.env.PORT || 8000;
const host = "localhost";

server.listen(PORT, host, () => {
  console.log(`server is running at http://localhost:${PORT}/ krjani`);
});
