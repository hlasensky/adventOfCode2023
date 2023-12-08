import reader from "./reader.js";

let arr = reader("./3.txt");

const maskOne = [
	[-1, +1],
	[0, +1],
	[+1, +1],
	[-1, 0],
	[+1, 0],
	[-1, -1],
	[0, -1],
	[+1, -1],
];

const res = [];
let nm = "";
let isValid = [];
let gearArr = []


arr.forEach((line, lineIndex) => {
	line.forEach((char, charIndex) => {
		if (Number(char) || Number(char) === 0) {
			nm += char;
			for (let cordIndex = 0; cordIndex < maskOne.length; cordIndex++) {
				if (
					lineIndex + maskOne[cordIndex][1] >= 0 &&
					charIndex + maskOne[cordIndex][0] >= 0 &&
					lineIndex + maskOne[cordIndex][1] < arr.length &&
					charIndex + maskOne[cordIndex][0] < line.length
				) {
					let ch =
						arr[lineIndex + maskOne[cordIndex][1]][charIndex + maskOne[cordIndex][0]];
					if (ch !== "." && Number(ch) !== 0 && !Number(ch)) {
						isValid = [
							lineIndex + maskOne[cordIndex][1],
							charIndex + maskOne[cordIndex][0],
						];
					}
				}
			}
		}
		if (!(Number(char) || Number(char) === 0) || charIndex === line.length - 1) {
			if (isValid.length) {
				res.push(Number(nm));
				if (arr[isValid[0]][isValid[1]] === "*") {
					gearArr.push([nm, isValid]);
				}
				isValid = [];
			}
			nm = "";
		}
	});
});

gearArr = gearArr.filter((item) => item);

gearArr = gearArr.map((item, ind) => {
	return gearArr.map((it, i) =>
		item[1].toString() === it[1].toString() && i !== ind ? item[0] * it[0] : 0
	);
});

let cnt = 0;
let cntG = 0;
res.forEach((item) => (cnt += item));
gearArr = gearArr.map((item) => item.filter(nm => nm));

gearArr.forEach((item) => Number(cntG += item[0] ? item[0] : 0));
console.log(cnt);
console.log(cntG/2);