const fs = require("fs");

const reader = (path) => {
	const file = fs.readFileSync(path, "utf-8");

	const arr = file.split("\n");
	return arr.map((item) => item.replace("\r", ""));
};

let arr = reader("./2.txt");

arr = arr.map((line) => {
	const game = {
		id: 0,
		plays: [],
		valid: true,
	};

	const lineSplit = line.replace("Game ", "").split(": ");
	const id = lineSplit[0];
	let games = lineSplit[1].split("; ");
	games = games.map((gm) => {
		const colors = {
			blue: 0,
			green: 0,
			red: 0,
		};

		gm.split(", ").forEach((color) => {
			const cl = color.trim().split(" ");
			switch (cl[1]) {
				case "red":
					colors.red += Number(cl[0]);
					if (colors.red > 12) game.valid = false;
					break;
				case "blue":
					colors.blue += Number(cl[0]);
					if (colors.blue > 14) game.valid = false;
					break;
				default:
					colors.green += Number(cl[0]);
					if (colors.green > 13) game.valid = false;
					break;
			}
		});
		return colors;
	});
	game.id = Number(id);
	game.plays = games;
	return game;
});

let value = 0;
arr.forEach((gm) => (gm.valid ? (value += gm.id) : value));
console.log(arr[0]);
let powerMin = 0;
arr.forEach((game) => {
	const colorsMin = {
		blue: game.plays[0].blue,
		green: game.plays[0].green,
		red: game.plays[0].red,
	};
	game.plays.forEach((play) => {
		colorsMin.blue = colorsMin.blue < play.blue ? play.blue : colorsMin.blue;
		colorsMin.green = colorsMin.green < play.green ? play.green : colorsMin.green;
		colorsMin.red = colorsMin.red < play.red ? play.red : colorsMin.red;
    });
    powerMin += colorsMin.blue * colorsMin.green * colorsMin.red;
    console.log(colorsMin)
});
console.log(powerMin)
// arr = arr.map((line) => [ line[ 0 ], line[ 1 ].split("; ") ]);
