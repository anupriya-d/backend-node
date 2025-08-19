//fs file system module
const fs = require('fs');

fs.writeFile("message.txt", "Hello from Node JS ! ", (err) => {
    if (err) throw err; 
    console.log("File written successfully");
    });


// Write a file using the fs module