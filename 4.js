import reader from "./reader.js";

let arr = reader("./4.txt");
let scratches = arr.map((line) => line.split(": ")[1].split(" | "));

// console.log(scratches);
scratches = scratches.map((scratch) => {
	return scratch.map((nms) => nms.split(" "));
});

// console.log(scratches);
let cnt = 0;
let res = 0;
scratches.forEach((scratch) => {
	scratch[0].forEach((nm) => {
		if (scratch[1].find((wNm) => wNm === nm)) {
			// console.log(nm);
			cnt += 1;
		}
	});
	if (cnt) res += 2 ** (cnt - 1);
	cnt = 0;
});

console.log("\n");
console.log(cnt);
console.log(res);
