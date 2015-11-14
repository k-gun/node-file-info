var fs = require("fs");
var execSync = require("qeremy-exec-sync");

function fileInfo(file) {
    var stat;

    // check file exists also getting stat
    try {
        stat = fs.statSync(file);
    } catch (e) { return; }

    var name, directory, extension, mime, charset, i;

    // detect name & directory
    if ((i = file.lastIndexOf("/")) > 0) {
        name = file.substr(i + 1);
        directory = file.substr(0, i + 1);
    } else {
        name = file;
        directory = "./";
    }

    // detect extension ignoring .dot files
    if ((i = file.lastIndexOf(".")) > 0 && name.charAt(0) != ".") {
        extension = file.substr(i + 1);
    }

    // run a shell command
    var ret = execSync("file -i '"+ file +"' | awk '{print $2} {print $3}'");
    if (ret == "") {
        return;
    }

    ret = ret.trim().split("\n");
    if (ret.length == 2) {
        // remove comma
        mime = (ret[0].lastIndexOf(";") > -1)
            ? ret[0].trim().substr(0, ret[0].length - 1) : ret[0];
        // detect charset
        charset = ret[1].trim().split("=")[1];
    }

    return {
        name: name,
        directory: directory,
        extension: extension,
        mime: mime,
        charset: charset,
        stat: stat
    };
}

module.exports = fileInfo;
