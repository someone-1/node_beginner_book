var server = require("./server");
var router = require('./router');
var requesthandler = require('./requesthandler');

var handler = {};

handler['/'] = requesthandler.start;
handler['/start'] = requesthandler.start;
handler['/upload'] = requesthandler.upload;

server.start(router.route , handler);