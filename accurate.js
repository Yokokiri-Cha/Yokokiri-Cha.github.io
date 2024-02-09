function ps(){
navigator.geolocationgetCurrentPosision(sl);
}
function sl(pos){


	lat = pos.coords.latitude;
	lon = pos.coords.longitude;


	document.getElementById("table_lat").innerHTML = lat;
	document.getElementById("table_lon").innerHTML = lon;
}
setInterval('sl(pos)',1000);
//参考:https://systemexpress.co.jp/htmlcss/geolocation.html
//ありがとうございます!!
