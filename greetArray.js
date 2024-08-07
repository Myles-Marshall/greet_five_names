function greet(name) {
    console.log(`Hello, ${name}.`);
};

function greetNamesInArray(array) {
    array.forEach(name => {
        // greet(name)
        console.log(`Hello, ${name}.`);
    });
}

const namesArray = ["John", "Jane", "Myles", "Alexander", "Marshall"]
const namesArray2 = ["Sakamoto", "Heisuke", "Shin", "Lu", "Nagumo"]

// namesArray.forEach(name => {
//     greet(name)
// });

// for (let i = 0; i < namesArray.length; i++) {
//     // greet(namesArray[i]);
//     console.log(`Hello, ${namesArray[i]}.`);
// };

// greetNamesInArray(namesArray2)
global.namesArray = namesArray;
global.namesArray2 = namesArray2;
global.greetNamesInArray = greetNamesInArray;