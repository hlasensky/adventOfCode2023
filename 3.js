import reader from "./reader.js";

let arr = reader("./3.txt");

let nmLen = 0;

const maskOne = [
	[-1, +1],
	[0, +1],
	[+1, +1],
	[-1, 0],
	// [0, 0],
	[+1, 0],
	[-1, -1],
	[0, -1],
	[+1, -1],
];

const res = []

arr.forEach((line, lineIndex) => {
	line.forEach((char, charIndex) => {
		if (Number(char)) {
			maskOne.forEach((cords) => {
                if (lineIndex + cords[ 1 ] >= 0 && charIndex + cords[ 0 ] >= 0 &&
                    lineIndex + cords[ 1 ] < arr.length && charIndex + cords[ 0 ] < line.length)
                {
                    if (Number(arr[lineIndex + cords[1]][charIndex + cords[0]])) nmLen += 1;
                    console.log(arr[ lineIndex + cords[ 1 ] ][ charIndex + cords[ 0 ] ]);
                    res.push(arr[lineIndex + cords[1]][charIndex + cords[0]])
				}
			});
		}
	});
});

console.log(nmLen);
console.log(res);
