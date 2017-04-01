var request = require("request");
var cheerio = require("cheerio");
var URL = require("url-parse");
var http = require("http");
var fs = require("fs") ;
var path = require('path');

//get gameIdlist, stored as array
function gIdlist(){
	var fReadName = path.resolve(__dirname, "../src/gameIDlist.txt"); 
	var array=[];
	fs.readFile(fReadName, function(err, data) {
    	if(err) throw err;
	    array = data.toString().split("\n");
    	for(i in array) {
        	console.log(array[i]);
	    }
	});
	return array;
}

//crawl the file from website
function visitPage(url, id) {
	var html = "";
	//send get
  	http.get(url, function(res) {
  		res.on("data",function(data){
  			html+=data;
  		});
  		res.on("end",function(){
  			var $ = cheerio.load(html); //采用cheerio模块解析html
  			var description = $("#game_area_description").text();
  			console.log(description);
  			//write to file
  			write("./src/"+id+".txt",description);
  		})
  	});
}
//write content to file
function write(fWriteName,content){
	fs.writeFile(fWriteName,content,function (err) {
		if (err) throw err ;
		console.log("File Saved !"); //文件被保存
	}); 
}

//main 
var IdList = gIdlist();

var raw_url = "http://store.steampowered.com/app/570/";
// var raw_url ="http://store.steampowered.com/app/570/";
var url =raw_url;
// visitPage(url);




