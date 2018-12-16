// pipe and pipe chaining
// to use stream we need a source strema and a destination stream

// Run part 1 then run part2
const fs = require("fs");
const zlib = require("zlib");

// Part 1
const readStream = fs.createReadStream("./example.txt");
const writeStream = fs.createWriteStream("./example2.txt.gz");
const gzipStream = zlib.createGzip();

// TransformStream transforms the stream to some other format stream
// here pipe replaces the event handlings on `data` event of readStream
readStream.pipe(gzipStream).pipe(writeStream);

// part 2
// streams works on chunks so be careful when you are manipulating data
// run both the codes as a single shot and you see an error saying unexpected end of file
const readStream2 = fs.createReadStream("./example2.txt.gz");
const writeStream2 = fs.createWriteStream("example2.txt");
const gUnZipStream = zlib.createGunzip();
// reading the compressed file
readStream2.pipe(gUnZipStream).pipe(writeStream2);