// tutorial based on https://youtu.be/RLtyhwFtXQA
// file system module usage on folders
const fs = require("fs");
// create a folder 
// if a folder already exists node throws an error
fs.mkdir("temp", (err) => {
    if (err) {
        console.log(err);
    } else {
        console.log(`folder successfully created`);
        let p1 = createFile('test1.txt');
        let p2 = createFile('test2.txt');
        // creating files
        Promise.all([p1, p2]).then((data) => {
            console.log("Prmise fulfilled");
            console.log(data);
            // reading folder contents
            fs.readdir("./temp", (err, fileNames) => {
                let toBeDeleted = [];
                if (err) {
                    console.log(err);
                } else {
                    for (let fileName of fileNames) {
                        toBeDeleted.push(deleteFile(`${fileName}`));
                    }
                    Promise.all(toBeDeleted).then((data) => {
                        console.log("After reading promise");
                        console.log(data);
                        //rmdir should be used only on empty dir
                        fs.rmdir('temp', (err) => {
                            if (err) {
                                console.log(err);
                            } else {
                                console.log(`Folder deleted successfully`);
                            }
                        });
                    }, (err) => {
                        console.log("Delete failed");
                        console.log(err);
                    });
                }
            });
            
        }, (err) => {
            console.log(err);
        });
    }
});

function createFile(path) {
    return new Promise((resolve, reject) => {
        fs.writeFile(`./temp/${path}`, `path : ${path}`, (err) => {
            console.log("in promise");
            if (err) {
                console.log(err);
                reject(err);
            } else {
                console.log('File successfully created');
                resolve(`file ${path} created succesfully`);
            }
        });
    });
}

function deleteFile(path) {
    return new Promise((resolve, reject) => {
        fs.unlink(`./temp/${path}`, (err) => {
            console.log("in promise");
            if (err) {
                console.log(err);
                reject(err);
            } else {
                console.log('File successfully deleted');
                resolve(`file ${path} deleted succesfully`);
            }
        });
    });
}