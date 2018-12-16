// readline module for getting user inputs

const readline = require("readline");
// process is an object available at global scope
const rlInterface = readline.createInterface({ input: process.stdin, output: process.stdout});

let num1 = Math.ceil((Math.random()) * 10);
let num2 = Math.ceil((Math.random()) * 10);

const answer = num1 + num2;
// The folllowing code is an example for understanding the events and metods on readline. Can be refactored further.
rlInterface.question(`Whats the sum of ${num1} and ${num2} ?\n `, (userInput) => {
    if(userInput.trim() == answer) {
        console.log("Wow you are right!!");
        rlInterface.close();
    } else {
        rlInterface.setPrompt("Incorrect please try again !!\n");
        rlInterface.prompt();
        rlInterface.on("line", (userInput) => {
            if (userInput.trim() == answer) {
                console.log("Wow you are right!!");
                rlInterface.close();
            } else {
                rlInterface.setPrompt(`Incorrect answer: ${userInput}. Please try again !!\n`);
                rlInterface.prompt();
            }
        });
    }
});

//readline interface is extended by event emitter
rlInterface.on('close', (input) => {
    console.log('Cleaning Up!!!');
});