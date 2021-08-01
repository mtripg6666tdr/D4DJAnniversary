var main = {load: function(){
    const fs = require('fs');
    const path = require('path');
    return JSON.parse(fs.readFileSync(path.resolve(__dirname, "main.json")));
}};

module.exports = main;
module.exports.default = main;