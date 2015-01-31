var port = 45900;
var xmlParser = require('xml2js').parseString;
var url = require('url');
var http = require('http');

var util = require('./util.js');

setInterval(function() {
    console.log(util.getHeading('NW'));
}, 2000);
