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

var info = fileInfo("none");
console.log(info); // undefined
```

## Sample Result
```js
{ name: 'test.js',
  directory: '/var/www/.dev/node/file-info/test/',
  extension: 'js',
  mime: 'text/plain',
  charset: 'us-ascii',
  stat:
   { dev: 2054,
     mode: 33206,
     nlink: 1,
     uid: 1000,
     gid: 1000,
     rdev: 0,
     blksize: 4096,
     ino: 1332259,
     size: 324,
     blocks: 8,
     atime: Sat Nov 14 2015 02:43:21 GMT+0200 (EET),
     mtime: Sat Nov 14 2015 02:43:21 GMT+0200 (EET),
     ctime: Sat Nov 14 2015 02:43:21 GMT+0200 (EET) } }
```

## License

The MIT License
