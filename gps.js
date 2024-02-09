

function test() {
    var errs="";
    watch_id = navigator.geolocation.watchPosition(test2,function(e) { errs = e.message}, {"enableHighAccuracy": true, "timeout": 20000, "maximumAge": 1000});
}


function test2(position) {

    var txt = "緯度:" + position.coords.latitude + "\n";
    txt += "経度:" + position.coords.longitude + "\n";

    document.getElementById('pss').innerHTML = txt;

}
//参考:https://blog.codecamp.jp/javascript-geolocation    
//ありがとうございます!!
