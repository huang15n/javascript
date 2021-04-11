const http = require('http');
const fs = require('fs');


const server = http.createServer((req,res) => {
	console.log("the request was made " + req.url);
	
	if(req.url === '/home' || req.url === '/'){
		console.log("request home page");
		res.writeHead(200,{'Content-Type':'text/html'});
		fs.createReadStream(__dirname + '/index.html').pipe(res);


	}else if(req.url === '/contact'){
		res.writeHead(200,{'Content-Type':'text/html'});
		fs.createReadStream(__dirname + '/contact.html').pipe(res);
	}else if (req.url === '/api/jsonExample'){
			objects = [{
			name : 'James',
			age : 20,
			gender : 'Male',

		}, 	{name : 'Sandy',
			age : 20,
			gender : 'Female',}
			];
		res.writeHead(200,{'Content-Type':'application/json'});
	
		res.end(JSON.stringify(objects));
	}else{
		res.writeHead(404, {'Content-Type' : 'text/html'});
		fs.createReadStream(__dirname +'/404.html').pipe(res);
	}

});




server.listen(3000,'127.0.0.1');

console.log("It is listening to the 127.0.0.1:3000");