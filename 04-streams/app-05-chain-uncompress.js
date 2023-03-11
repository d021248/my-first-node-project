var fs = require("fs");
var zlib = require("zlib");

// Decompress the file input.txt.gz to input.txt
fs.createReadStream("input.txt.gz")
  .pipe(zlib.createGunzip())
  .pipe(fs.createWriteStream("input-uncompressed.txt"));

console.log("File Decompressed.");
