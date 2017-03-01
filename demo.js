var http = require('http');
var fs = require('fs');

//var writeStream = fs.createWriteStream(__dirname+'/myWriteData.txt');


var server = http.createServer(function(request, response){
	
	console.log('Request Made :'+request.url);

	if(request.url === '/home' || request.url === '/'){
		//home page
		console.log('INto request URL');
		response.writeHead(200, {'content-type':'text/plain'});
		fs.createReadStream(__dirname+'/simple.html','utf8').pipe(response);
	}else{
		response.writeHead(200, {'content-type':'text/html'});
		response.end('Done');
	}
	
	//response.end('Hi from hitendra');
	//var readStream = fs.createReadStream(__dirname+'/A very simple webpage.html','utf8');
	
	//readStream.pipe(response);

	// var myObj = {
	// 	name:'hitendra',
	// 	job:'Ninja',
	// 	age:26
	// };

	// response.end(JSON.stringify(myObj));
});

server.listen(3000, '127.0.0.1');
console.log('Listening to port 3000');
