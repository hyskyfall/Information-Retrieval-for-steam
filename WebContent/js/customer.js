window.onload = function() {
	//	alert("web ready");
}

function gameSearchBtn() {
	var inputSearch = $('#User_Sch_input').val();
	//		alert("inputSearch is"+inputSearch);
	/*
	 * Ajax
	 */
	var xmlhttp;
	var txt, x, i;
	if(window.XMLHttpRequest) {
		// IE7+, Firefox, Chrome, Opera, Safari 浏览器执行代码
		xmlhttp = new XMLHttpRequest();
	} else {
		// IE6, IE5 浏览器执行代码
		xmlhttp = new ActiveXObject("Microsoft.XMLHTTP");
	}
	xmlhttp.onreadystatechange = function() {
		if(xmlhttp.readyState == 4 && xmlhttp.status == 200) {
			xmlDoc = xmlhttp.responseText;
			txt = "";
			DisplaySch(xmlDoc);
		} 
//		else {
//			alert("not valid path");
//		}
	}
	xmlhttp.open("GET", "http://localhost:8080/SteamGame/GameResult", true);
	xmlhttp.setRequestHeader("MyHeader", inputSearch);
	xmlhttp.send();
}

function DisplaySch(jsonmsg) {
//	$("#show_Sch_Rlt").text(data);
	var jsonText = JSON.stringify(jsonmsg);
	var data = jsonText.data;
	var txt ="";
//	for(i = 0; i < 2; i++) {
//		txt = txt + data[i].childNodes[0].nodeValue + "<br>";
//	}
	$("#show_Sch_Rlt").innerHTML = data;
}