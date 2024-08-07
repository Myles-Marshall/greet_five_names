const greet = require("./greet.js");
const goodbye = require("./goodbye.js");
const namesObjectGreetGoodbye = require("./object.js");

const nameObj = {
    Name1: "John",
    Name2: "Jane",
    Name3: "Myles",
    Name4: "Alexander",
    Name5: "Marshall"
};

const nameObj2 = {
    Name1: "John",
    Name2: "Jane",
    Name3: "Doe",
};

// for (let name in nameObj) {
//     greet(nameObj[name]);
//     goodbye(nameObj[name]);
// };

namesObjectGreetGoodbye(nameObj2)