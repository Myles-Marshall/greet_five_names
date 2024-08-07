const greet = require("./greet.js");
const goodbye = require("./goodbye.js");

function greetObject(obj) {
    for (let name in obj) {
        greet(obj[name]);
        goodbye(obj[name]);
    }
}

module.exports = greetObject