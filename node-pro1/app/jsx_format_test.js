var fs = require('fs');
var path = require('path');
var esformatter = require('esformatter');
//register plugin manually
esformatter.register(require('esformatter-jsx'));

var str = fs.readFileSync(__dirname + '/someKewlFile.jsx').toString();
var output = esformatter.format(str);
fs.writeFileSync(__dirname + '/someKewlFile_format.jsx', output);
console.log(output);