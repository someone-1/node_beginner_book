var http = require('http');

start = () =>{
	onRequest = (request , response) => {
		console.log("request recieved.");
		response.writeHead(200, {"Content-Type":"text/plain"});
		response.write("hello world");
		response.end();
	}
	http.createServer(onRequest).listen(8080);
	console.log("server has started");
}
exports.start = start;