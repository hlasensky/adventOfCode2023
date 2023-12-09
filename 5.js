import reader from "./reader.js";

let arr = reader("./5.txt");
arr = arr.filter((map) => map);
console.log(arr)