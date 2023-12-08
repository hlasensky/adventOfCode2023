import fs from "fs"

const reader = (path) => {
	const file = fs.readFileSync(path, "utf-8");


	return file.split("\n").map(item => item.replace("\r", "").split(""))
};

export default reader