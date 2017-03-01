var express = require('express');
var app = express();


// Events in Node JS
var events = require('events');
var hello = new events.eventEmitter;

//listener
hello.on('click', function(msg){
	console.log('hello');
});

hello.emit('click',"hi there");


app.set('view engine','ejs');

app.get('/',function(req, res){
	res.sendfile(__dirname+'/simple.html');
})

app.get('/contact',function(req, res){
	res.send("This is contact Page");
})


app.get('/profile/:name', function(req, res){
	//res.send('You requested to see profile with the id of '+req.params.id);
	var data = {age: 29, job: 'ninja'};
	res.render('profile', {person: req.params.name, data:data});
});

app.listen(3000);


/*
* respond to request

app.get('route',fn);
app.post('route',fn);
app.delete('route',fn);

*/
