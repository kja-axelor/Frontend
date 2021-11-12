const http = require("http");
const fs = require("fs");

const server = http.createServer((req, res) => {

  // serving html pages
  if (req.url === "/") {
    fs.readFile("G:\\Axelor\\Frontend\\html-css\\project-1\\project1.html", (error, data) => {
      if (error) {
        throw error;
      } else {
        res.end(data);
      }
    });

    // javascript
  }else if(req.url === "/js/index.js"){
    fs.readFile("G:\\Axelor\\Frontend\\html-css\\project-1\\js\\index.js",(error, data) => {
        if (error) {
          throw error;
        } else {
          res.end(data);
        }
      }
    );
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
