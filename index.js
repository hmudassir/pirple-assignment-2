/*
*
Dependencies
* 
*/
var server = require('./lib/server');

//Instantiate app module
var app = {};

app.init = function(){
    server.init();
}

app.init();

//Export app module
module.exports = app;