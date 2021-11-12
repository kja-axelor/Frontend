console.log('hello chalk!!');

const chalk = require('chalk');
const process = require('process');
var http = require("http");

// web server
const server = http.createServer(function (req,res){
    req.statusCode= 200;
    res.setHeader("Content-Type", "text/html");
    // res.end(`<h1 style="color:red; background-color:whitesmoke;">Krjani's working directory  ${process.argv[1]} </h1>`);
    res.end(`<h1 style="color:red;background-color:whitesmoke;">krjani's current working file is ${__filename}</h1>`);
});

server.listen(7777);

console.log(chalk.red(process.cwd()));
console.log("hello!! my directory is "+chalk.yellow(__dirname));  
console.log("hello!! my current file is "+chalk.yellow(__filename));  
console.log(chalk.red(process.argv[1]));
