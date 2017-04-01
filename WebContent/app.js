var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');

// var index = require('./routes/index');
// var users = require('./routes/users');

//qifei
// var routes=require('./routes');

var app = express();
//齐飞：set up server
var http=require('http');
http.createServer(function(req,res){
	res.write('<h1>hi,I am Fei</h1>');

}).listen(3000);
// 
// // view engine setup
// app.set('views', path.join(__dirname, 'views'));
// app.set('view engine', 'jade');
// 
// // uncomment after placing your favicon in /public
// //app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
// app.use(logger('dev'));
// app.use(bodyParser.json());
// app.use(bodyParser.urlencoded({ extended: false }));
// app.use(cookieParser());
// app.use(express.static(path.join(__dirname, 'public')));
// 
// app.use('/', index);
// app.use('/users', users);
// 
// var url='http://api.steampowered.com/ISteamUserStats/GetSchemaForGame/' +'v2/?key=C4003348E14613D9E3D4FDB26F4F0814&appid=8930';
// app.get("url",function(req,res){
// 	var html ='';
// 	res.on('data',function(data){
// 		html+=data;
// 	});
// 	res.on('end',function(){
// 		console.log(html);
// 	})
// }).on('error',function(){
// 	console.log("访问的路径出错了");
// });
// 
// // catch 404 and forward to error handler
// app.use(function(req, res, next) {
//   var err = new Error('Not Found');
//   err.status = 404;
//   next(err);
// });
// 
// // error handler
// app.use(function(err, req, res, next) {
//   // set locals, only providing error in development
//   res.locals.message = err.message;
//   res.locals.error = req.app.get('env') === 'development' ? err : {};
// 
//   // render the error page
//   res.status(err.status || 500);
//   res.render('error');
// });
// 
// module.exports = app;
