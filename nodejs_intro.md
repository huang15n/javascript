

## Background 
node.js is a javascript runtime build on Chromes V8 js engine. 
nodejs uses on even driven, nonblocking model that makes it lightweight and efficient 
node.js package ecoyssytem, npm, is the largest ecosystem of open source libraires in the world 


it is actually a platform which allows us to run js on a computer/server 
read, delete and update files 
easily communicate with database 


it uses js , very fast, huge ecosystem of open source environment 



the inner workings on nodejs: 
1 v8 engine 2 modules 3 event emitter 4 file system 
creating a web server : 
1 routing 2 express 3 templating 


the V8 engine: computer do not understand js . a js engine takes js, and converts it into something it does understand - machine code 
js -> c++/node.js -> assembly language -> machine code 

so ... 
node.js is written in c++  high performance,  embeded into nodejs , at the heart of nodejs is the v8 engine, the v8 engine converts our js into machine code 




prequisite : html, javascript, command line 





## download and install NodeJs 
LTS the latest stable version : https://nodejs.org/en/download/

Eddies-MacBook-Pro-2:javascript eddiehuang$ node -v 
v10.15.1
Eddies-MacBook-Pro-2:javascript eddiehuang$ 

which I fire or execute te js file 

```javascript 

console.log("Hello World");
```
```shell
Eddies-MacBook-Pro-2:javascript eddiehuang$ node example
Hello World
Eddies-MacBook-Pro-2:javascript eddiehuang$ node example.js
Hello World
Eddies-MacBook-Pro-2:javascript eddiehuang$ 

```



### global objects 

global objects allow us to get the methods straight out of the box 
```javascript
console.log() 
setTime(function(){}, 3000);
setTimeout(function() {
	console.log("this is wonderful after 1 s");
}, 3000);

const hello = () => {return 100;}
console.log(hello());


setInterval(()=>{ console.log("what is going on"); }, 1000);

setTimeout(() => { console.log("what after 1s"); }, 1000 );

console.log(__dirname);
console.log(__filename);
```


### function expressions 
module interface and how it works, looking under the hood a little bit 

look at is function expression how would we normally make a function statement in javascript

function expression is that we set up variables 

```javascript 

const oneFunction = function anotherName(){
	console.log("this is one of the example");
}

oneFunction();


const oneFunction = function (){
	console.log("this is two of the example");
}

oneFunction();

const oneFunction = () => {
	console.log("this is three of the example");
}

oneFunction();

```



### module & require 

split our code up into logical modules 
we have different module for a different bit of code which has a certain functionality in our applicaiton 

that function is not available outside of this module 

```javascript 
//example.js 
const exportFunction = require('./module_example');

exportFunction([1,2,3,4,5,6,7]);


```



```javascript 
//module_example.js 

const exportFunction = (arr) => {
	 for(let element in arr){
	 	console.log(element);
	 }
}


module.exports = exportFunction;

```


### module patterns 

if what we want to return various things 

the difference is that in template strings you can embed variables in them 

what we could do is 

#### the first way 
```javascript 
module.exports.function1 = function1;
module.exports.function2 = function2;

// another script 

const stuff = require('./stuff');
stuff.function1(value1,value2);

```


```javascript 


const add = (a,b) => {
	console.log(`the sum of a + b = ${a+b}`);
	return a + b; 
};

const subtract = (a,b) => {
	console.log(`the difference of a - b = ${a-b}`);
	return a - b;
};

module.exports.add = add;
module.exports.subtract = subtract;



const example = require('./module_example.js');

console.log(example.add(1,2));
console.log(example.subtract(4,2));
```
#### the second way 
alternatively, we are still exporting all these different things on module2 



module.exports.add = (a,b) => {
	console.log(`the sum of a + b = ${a+b}`);
	return a + b; 
};

module.exports.subtract = (a,b) => {
	console.log(`the difference of a - b = ${a-b}`);
	return a - b;
};



#### the third way 
module.exports = {
module_function : module_function,
}

```javascript 


const add = (a,b) => {
	console.log(`the sum of a + b = ${a+b}`);
	return a + b; 
};

const subtract = (a,b) => {
	console.log(`the difference of a - b = ${a-b}`);
	return a - b;
};

module.exports = {
	add: add,
	subtract: subtract,

}


const example = require('./module_example.js');
console.log(example.add(1,2));
console.log(example.subtract(4,2));

```


## event module emitter 

nodejs also ships with a bunch of inbuilt core modules which we can use in our applicaiton 

it is a core module built into nodejs 
and it will fetch that module for us 
https://nodejs.org/api/events.html





## reading & writing files 
const fs = require('fs');

fs.readFileSync();

being explicit in its methods name 
this is a synchronous method meaning that if we had any . the second part is the encoding 

read file: 
```javascript 
const fs = require('fs');

var fileDescriptor = fs.readFileSync("readFile.txt","utf8");

console.log(fileDescriptor);
```

write file:
```javascript
const fs = require("fs");
fs.writeFileSync('newFileWrite.txt','this is the content');

```



```javascript 
const fs = require('fs');

const readDescriptor = fs.readFileSync("readFile.txt","utf8");

fs.writeFileSync("writeIntoFile.txt",readDescriptor);
// this transfer one file into another , copy paste 
```


abovementioned are synchronous, we are gonna use asynchronous 
asynchronous means we need to call that callback function to fire when the process is complete and that is the third parameter in this method 

we need the function with 
(err,data) => {}

```javascript 
const fs = require('fs');


fs.readFile('readFile.txt','utf8', (err, data) => {
	fs.writeFile("newWriteFile.txt",data, (err,result) => {
		if(err){
			console.log(err);
		}
	})
});



console.log("testing testing testing");
```

###### the better thing about this is that we are not blocking the code while doing the reading. you are running asynchronosu code then it will be much quicker whereas synchronous code you have got multiple requests you have to delay that code because we have to wait for each request to carry out first 



we are carrying on through the code while the file is being read 


### creating/ removing directories 


delete a file 
```javascript 
const fs = require('fs');


fs.unlink('readFile.txt',(err,result) => {
	if(err) console.log(err);
});

```



create and delete folders 

```javascript 
const fs = require('fs');
fs.mkdirSync("newFolder");
fs.rmdirSync("newFolder");
```

### we use the asynchronous methods to do somethng once this action has been completed 


### client and servers 
start creating a server behind scenes 

client -> server 
       request 
       response 


protocols 
a set of communication rules, that twosides agree to use when communicating 



client and server have unique ip address 
it is communicated via scoket which is esseniallly just the channel down which info can be sent 

the info sent is structured via different protocols 
we use the protocols to structure the data or info that has been sent 
HTTP for websiet and ftp for file transfer 


TCP 
socket < ----- packets 

it splits up the data into smaller sections 
and transfer along the sockets
nodejs opens communicaiton to send info betwewen between them 


###### ports: a program running on a computer can listen for request sent to a particular port number . xxx.xx.xx.xx:xxxx

how do we know that request was meant for nodejs itself? 


## creating a server 

make our own sever and make a request to server 

we need to use the http server 
we use a method reference to that createServer 

```javascript 
const http = require('http');
const server = http.create((req,res) => {
	res.writeHead(200, {'Content-Type':'text/plain'});
	res.end('hello, this is the header');

	})



```


### request headers 
when we make a request to a server and when we respond 


client - request, request + request header -> server 

server -> response , response data / response headers -> client 

response header 
-- content-type 
-- status 

```javascript 
const http = require("http");

const ip = '127.0.0.1';
const port = 8080;

const server = http.createServer((req,res)=> {
	res.writeHead(200,{'Content-Type':'text/plain'});
	res.end("this is the content for html server back end ");

});


server.listen(8080,'127.0.0.1');

```
you can think of headers as extra info 
it tells the browser more info about what is actually shown on the browser 

we have to tell the browser the content type this is all in the headers 
we can also put a status in the headers 
server up the info 

now we are sending about the headers and response body itself 

```javascript 
const http = require('http');


const server = http.createServer(
	(req,res) =>  {
		console.log('request was made:' + res.url);
		res.writeHead(200,{'Content-Type': 'text/plain'});
		res.end("this is the hello world program");
	}
	);




server.listen(3000,'127.0.0.1');
console.log("server now listens to 127.0.0.1:3000 .....");

```


when we request this port , it is going to respond 
it is going to fire up this function

that is all the server app, we go to the 
develope tool -> network 


that is how we serve up nodejs 




## streams and buffers 
take an absolute lifetime and he figures out to build a tram and gathers a pile of rocks 


#### buffers 
temporary storage spot for a chunk of data that is being transferred from one place to another 
the buffer is filled with data, then passed along 
transfer small chunks of data at a time 

move from point A to point b 
data passed on <- buffer <- data 


#### a stream is an stream of data that flows over time from one place to another 


buffers and streams in action to be sent in one go 


## streams in nodejs 
can create streams in nodejs to transfer data 
increase performance 



## reading and writing streams 
readable streams 


streams: 
writable streams - allow ndoejs to write data to a stream 
readable streams allow nodejs to read data from a stream 
duplex - can read and write to a stream 



```javascript 
const fs = require('fs');
var myReadStream = fs.createReadStream(__dirname + '/readFile.txt');



```

we are going to read this data to fill up the buffer and pass that data on in chunks 
this createReadStream from the emitter 
```javascript 
const http = require('http');



const fs = require('fs');


const readBufferStream = fs.createReadStream(__dirname + '/readStream.txt' , 'utf8');

readBufferStream.on('data', (chunk) => {
	console.log("reading from the stream");
	console.log(chunk);
});



```



compare to fs readFile what that did was go out and grab the whole piece of data and wait for it fires a callback function 


this one we can send. it to the user using a writable stream so we pass it onto the client that way a bit at a time rather than waiting for waiting for the whole thing to read 



## writable streams 
we have the data coming in down a strem filling up a buffer and then when that buffer was full it would pass on a chunk of data to us to us to read and we could use a listener which was on a data which would listen out whenever we received one of these chunks of data and 






## Pipe 

streams data passed on and processed , buffer 

the pipe can help us do exactly the same thing take data from a read stream and then pipe it into a write stream 

coming down and stream fils up a buffer and it sends a chunk of data route 


we do not have to manually write for data events and we do not have to manually write to streams it takes care of this 




```javascript 
const http = require('http');
const fs = require('fs');

const server = http.createServer((req,res) => 
	{
		console.log("the request was made: " + req.url);
		res.writeHead(200,{'Content-Type':'text/plain'});
		const myReadStream = fs.createReadStream(__dirname + '/readMe.txt','utf8');
		myReadStream.pipe(res);



	});


server.listen(3000,'127.0.0.1');
console.log("this now listens to 127.0.0.1:3000");

```



## servering html pages 



```javascript 
const http = require('http');
const fs = require('fs');


const server = http.createServer((req,res) => {
	console.log("the request was made " + req.url);
	res.writeHead(200,{'Content-Type':'application/json'});

	const object = {
		name : 'Ryu',
		job: 'Ninja',
		age : 29,
	};
	res.end(JSON.stringify(object));

});




server.listen(3000,'127.0.0.1');

console.log("It is listening to the 127.0.0.1:3000");

```


### Basic Routing 

we can set up basic routing 
the request feeds me back some data to me 
in real world app we are going to distinguish between different URLs and send them data depending on what they are requesting 


we set up the routing sytem in nodejs 

so whenever we make a request to the server we are logging this to the console 
we are accessing a property on the request object called URL so we know what they are requesting 

/ stands for localhost port number forward slash or / to send them this index hot html file 

```javascript 
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

```


### the node package manager (npm)

the package will slim this down and create web apps on node 
NPM is just a bunch of command line tools which can help us install third-party packages 

express is a huge ecosystem of third party package that is essetially a bunch of code 


it helps creates a bunch of tasks with nodejs apps 
it helps us with routing and templating and such so 


we can load these packages into our node 
we can install packages, update packages or even publish our packages 


```shell 
npm install express 

npm WARN saveError ENOENT: no such file or directory, open '/Users/eddiehuang/Desktop/javascript/javascript/package.json'
npm notice created a lockfile as package-lock.json. You should commit this file.
npm WARN enoent ENOENT: no such file or directory, open '/Users/eddiehuang/Desktop/javascript/javascript/package.json'
npm WARN javascript No description
npm WARN javascript No repository field.
npm WARN javascript No README data
npm WARN javascript No license field.

+ express@4.17.1
added 50 packages from 37 contributors and audited 50 packages in 4.813s
found 0 vulnerabilities

```



### package JSON 

installing and which packages your app depends on the dependencies of your apps 

the json file is that it can keep track of our dependencies 

it is in the package.json file 

if we pass on our app code to another developer we do not normally pass on the pacakges 


```shell
Eddies-MacBook-Pro-2:javascript eddiehuang$ sudo npm install express -save 
npm WARN javascript No repository field.
npm WARN javascript No license field.

+ express@4.17.1
updated 1 package and audited 50 packages in 3.134s
found 0 vulnerabilities



```

```shell

Eddies-MacBook-Pro-2:javascript eddiehuang$ sudo npm uninstall express 
npm WARN javascript No repository field.
npm WARN javascript No license field.

removed 50 packages in 3.027s
found 0 vulnerabilities


```

### install nodemon 

it is a great package for when you are developong 

it is basically to monitor your app file 

we refresh on the browser and we are going to get that fresh change 


it is locally specific to an app 

```shell
 sudo npm install express -save 
npm WARN javascript No repository field.
npm WARN javascript No license field.

+ express@4.17.1
added 50 packages from 37 contributors and audited 50 packages in 3.968s
found 0 vulnerabilities

Eddies-MacBook-Pro-2:javascript eddiehuang$ sudo npm install nodemon -g 
/usr/local/bin/nodemon -> /usr/local/lib/node_modules/nodemon/bin/nodemon.js

> nodemon@2.0.7 postinstall /usr/local/lib/node_modules/nodemon
> node bin/postinstall || exit 0

Love nodemon? You can now support the project via the open collective:
 > https://opencollective.com/nodemon/donate

+ nodemon@2.0.7
added 120 packages from 57 contributors in 7.983s
```

```shell

Eddies-MacBook-Pro-2:javascript eddiehuang$ nodemon example.js 
[nodemon] 2.0.7
[nodemon] to restart at any time, enter `rs`
[nodemon] watching path(s): *.*
[nodemon] watching extensions: js,mjs,json
[nodemon] starting `node example.js`
It is listening to the 127.0.0.1:3000
```






