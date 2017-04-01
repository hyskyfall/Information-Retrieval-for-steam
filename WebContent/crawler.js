var request = require("request");
var cheerio = require("cheerio");
var URL = require("url-parse");
var http = require("http");
var fs = require("fs") ;

//crawl the file from website
function visitPage(url, callback) {
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
  			// console.log(html);
  			//write to file
  			write("570"+".txt",description);
  		})
  	});
}
//write content to file
function write(file_name,content){
	fs.writeFile(file_name,content,function (err) {
		if (err) throw err ;
		console.log("File Saved !"); //文件被保存
	}); 
}


var gamelist = new Array();
gamelist[0] = 20;
gamelist[1] = 10;
var raw_url = "http://store.steampowered.com/app/570/";
// var raw_url ="http://store.steampowered.com/app/570/";
var url =raw_url;
visitPage(url);




