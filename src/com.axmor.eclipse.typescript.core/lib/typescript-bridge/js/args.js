/// <reference path="../node/node.d.ts"/>
var args = new Array();
process.argv.splice(2).map(function (s) { var p = s.split('='); args[p[0]] = p[1]; return s; });
exports.src = args['src'] ? args['src'] : './';
exports.serv = args['serv'] != undefined;
exports.logLevel = args['log'] ? args['log'] : 'error';
