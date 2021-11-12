// dynamic port

const http = require('http');

const server = http.createServer((req, res) => {
    // request
    if(req.url != '/favicon.ico')
    {
        console.log("url = "+req.url);
        console.log("method = "+req.method);
    }
    // response

    // res.statusCode = 200;
    // res.statusMessage = 'ready to fire!';
    // res.setHeader("Content-Type", "text/plain");

    // this 3 thing will be set only by writeHead
    res.writeHead(200,'ready to fire!',{'Content-Type':'text-plain'})

    res.end("hello krjani!! surver is running");
});

const PORT = process.env.PORT || 8000;
const host = "localhost";

server.listen(PORT, host, () => {
  console.log(`server is running at http://localhost:${PORT}/ krjani`);
});
