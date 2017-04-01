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
			//				alert("responce begin");
			xmlDoc = xmlhttp.responseText;
			txt = "";
			//				alert("前端返回结果"+xmlDoc);
			DisplaySch(xmlDoc);
		}
		//			else{
		//				alert("not valid path");
		//			}
	}
	xmlhttp.open("GET", "http://localhost:8080/SteamGame/Game", true);
	xmlhttp.setRequestHeader("MyHeader", inputSearch);
	xmlhttp.send();
}

function DisplaySch(data) {
	$("#show_Sch_Rlt").text(data);
	x = xmlDoc.getElementsByTagName("ARTIST");
	for(i = 0; i < x.length; i++) {
		txt = txt + x[i].childNodes[0].nodeValue + "<br>";
	}
	document.getElementById("myDiv").innerHTML = txt;
}