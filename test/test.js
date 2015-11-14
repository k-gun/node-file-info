var fileInfo = require("../index.js");

var info = fileInfo(__filename);
// var info = fileInfo("./test.js");
// var info = fileInfo("../index.js");
// var info = fileInfo("/usr/bin/node");
// var info = fileInfo("/home/kerem/.bashrc");
console.log(info);

// var info = fileInfo("none");
// console.log(info); // undefined
