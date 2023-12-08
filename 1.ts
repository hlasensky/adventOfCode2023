const fs = require("fs");

const file = fs.readFileSync("./1.txt", "utf-8");


if (
    [
        "one",
        "two",
        "three",
        "four",
        "five",
        "six",
        "seven",
        "eight",
        "nine",
        "zero",
    ].indexOf(char) !== -1
) {
    return Number(char);
}

let value = 0;
let arr = file.split("\n");
arr = arr.map((item) => item.replace("\r", ""));

arr.forEach(element => {
    
});

console.log(value);
