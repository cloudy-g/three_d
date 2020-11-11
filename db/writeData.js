var fs = require("fs");
const { resolve } = require("path");
var path = require("path");

let filesP = 'y_2';


let writeData = function(data){
	let filesXPath = path.join(__dirname, `../data/exports/${filesP}/x.txt`);
	let xRes = data.map(v=>v.x).join('\n');
	fs.writeFileSync(filesXPath,xRes)    //同步


	let filesYPath = path.join(__dirname, `../data/exports/${filesP}/y.txt`);;
	let yRes = data.map(v=>v.y).join('\n');
	fs.writeFileSync(filesYPath,yRes)    //同步
	
	
	let filesZPath = path.join(__dirname, `../data/exports/${filesP}/z.txt`);;
	let zRes = data.map(v=>v.z).join('\n');
	fs.writeFileSync(filesZPath,zRes)    //同步
	console.log('success');
}

module.exports = {
	writeData
}

	
