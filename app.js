const readline = require("readline");

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question("Enter values separated by commas: ", (input) => {
    let arr = input.split(",");
    let duplicates = arr.filter((item, index) => arr.indexOf(item) !== index);
    console.log("Duplicates:", [...new Set(duplicates)]);
    rl.close();
});
