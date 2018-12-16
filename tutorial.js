// Tutorial.js
const sum = (num1, num2) => num1 + num2;
const PI = 3.14;
class MathObj {
    constructor() {
        console.log("Object Created");
    }
}
// Exporting multiple objects Way 1
// module.exports.sum = sum;
// module.exports.PI = PI;
// module.exports.MathObj = MathObj;
// way 2
module.exports = {sum: sum, PI: PI, MathObj: MathObj};

