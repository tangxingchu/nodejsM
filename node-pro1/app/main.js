'use strict';

const module1 = require('./scrollViewExample.json');
const AppConver = require('./appConver.js');

function travel(module, callback) {
	let metaType = module.metaType;
	console.log(AppConver.prototype['create' + metaType].apply(AppConver, []));
}

travel(module1,  function(str) {
	console.log(str);
});

