## fileInfo

File info like PHP's finfo but containing native Node.js file stat.

## Install

```sh
$~ npm install qeremy-file-info
```

## Usage

```js
var fileInfo = require("qeremy-file-info");

var info = fileInfo(__filename);
// var info = fileInfo("./test.js");
// var info = fileInfo("../index.js");
// var info = fileInfo("/usr/bin/node");
// var info = fileInfo("/home/kerem/.bashrc");
console.log(info);

// var info = fileInfo("none");
// console.log(info); // undefined

```


```

## License

The MIT License
