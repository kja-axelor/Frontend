//File system Promise API

const fs = require('fs/promises');

/* directory creating path should be there

try {
    fs.mkdir('g:\\Axelor\\Frontend\\node\\krjani\\test');
    console.log("created !")
} catch (error) {
    console.log(error);
}

// directory creating path should be not there
try {
    fs.mkdir('g:\\Axelor\\Frontend\\node\\krjani\\test',{'recursive':true});
    console.log("created !")
} catch (error) {
    console.log(error);
}
*/

// reading content of directory

try {
    const files = await fs.readdir("g:\\Axelor\\Frontend\\node\\test");
    for (const i of files) {
        console.log(i);
    }
} catch (error) {
    console.log(error);
}
