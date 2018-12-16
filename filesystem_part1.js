// file system module usage on files
const fs = require("fs");
// creating a file and reading
// data always retrieved in binary so encoding hsould be specified for proper reading
// wrote other methods in callback to enforce sync behavior
fs.writeFile('example.txt', "created a example file", (err) => {
    if (err) {
        console.log('File creation failed. Please try again :(');
    } else {
        console.log(`File Created`);
        // Appending info to file
        fs.appendFile("example.txt", "\nsome new info", (err) => {
            if (err) {
                console.log(err);
            } else {
                console.log(`Data appended successfully. `);
                // reading a file
                fs.readFile("example.txt",'utf8',(err, data) => {
                    if (err) {
                        console.log(err);
                    } else {
                        console.log(`file Contents: \n*****\n${data}\n*****`);
                        // renaming the file 
                        fs.rename("example.txt", "example2.txt", (err) => {
                            if (err) {
                                console.log(err);
                            } else {
                                console.log(`file successfully renamed`);
                                // deleting the file
                                fs.unlink('example2.txt', () => {
                                    if (err) {
                                        console.log(err);
                                    } else {
                                        console.log("Deleted successfully");
                                    }
                                });
                            }
                        });
                    }
                });
            }
        });
        
    }
});