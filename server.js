var http = require("http");
var url = require("url");

function start(route, handle) {
	function onRequest(request, response) {

		//  http://localhost:8888/start?foo=bar&hello=world
		//  /start is the pathname of the above string url.parse(string).pathname
		//  query string is the part that comes after ? eg :-foo=bar&hello=world 
		//  it is seperated by & . url.parse(string).query

		var pathname = url.parse(request.url).pathname;
		console.log("Request for " + pathname + " received.");
		

		// sending response object as parameter ->router -> requesthandlers
		// 
		route(handle, pathname , response)
		
	}
	http.createServer(onRequest).listen(8080);
	console.log("Server has started.");
}
exports.start = start;