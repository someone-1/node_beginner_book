var exec = require("child_process").exec;

function start(response) {
	console.log("Request handler 'start' was called.");
	var content = "empty";
	
	//ls wont work in windows cmd try running it in git-bash or use 'dir'
	exec("ls -lah", function (error, stdout, stderr) {
		content = stdout;
		response.writeHead(200 , {'Content-Type' : 'text/plain'});
		response.write(content);
		response.end();
	});

}

function upload(response) {
	console.log("Request handler 'upload' was called.");
	response.writeHead(200 , {'Content-Type' : 'text/plain'});
	response.write('hello world /upload');
	response.end();
}
exports.start = start;
exports.upload = upload;