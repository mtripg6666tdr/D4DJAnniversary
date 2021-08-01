module.exports = function(fileData, logger = console.log){
    logger("CSV JSON Converter by mtripg6666tdr");
    var fileLines = fileData.replace(/\r\n/g,"\r").replace(/\r/g,"\n").replace(/\n/g,"\r\n").split("\r\n");
    var headers   = fileLines[0].split(",");
    var rowLength = headers.length;
    logger("Header loaded; " + rowLength + " counts of headers detected.");

    var outData   = [];

    for(var i = 1; i < fileLines.length; i++){
        var lineData = fileLines[i].split(",");
        if(lineData.length != rowLength){
            console.error("Invalid data length; ignore and continue");
            continue;
        }else{
            var obj = {};
            for(var j = 0; j < lineData.length; j++){
                obj[headers[j]] = lineData[j];
            }
            outData.push(obj);
        }
    }
    logger((fileLines.length - 1).toString() + " lines converted");
    return JSON.stringify(outData);
}