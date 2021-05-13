console.log("Primer ejercicio");
const fs = require("fs");
const pkg = fs.readFileSync("input.txt");
const transformedText = pkg.toString("utf-8").toUpperCase();

fs.writeFileSync("./output.txt", transformedText);
