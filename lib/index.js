var ConvertFromCSVtoJSON = require('./converter.js');
const fs = require('fs');

var fileData  = fs.readFileSync("./data/main.csv", "utf-8");
var out       = ConvertFromCSVtoJSON(fileData);
fs.writeFileSync("./dist/main.json", out);
console.log("Success");