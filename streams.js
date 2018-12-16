// Reading and writing using streams
// these are fast as the data is read / write in chunks
// Chunks can be manipulated as they are loaded and sent
// These are very useful to load large files and write files
const fs = require("fs");
const readStream = fs.createReadStream('./example.txt', 'utf8');
const writeStream = fs.createWriteStream('./example2.txt', 'utf8');
// fs extends EventEmitter
// whenever a chunk is read, it emits `data` event
// Listening to data event
readStream.on('data', (chunk) => {
    console.log(chunk);
    writeStream.write(chunk);
});

// readFile alos uses buffers but it uses full buffer where as streams use small buffer chunks so we can read/write large files
