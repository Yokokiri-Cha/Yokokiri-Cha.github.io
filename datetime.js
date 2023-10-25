function set2fig(num) {
   var ret;
   if( num < 10 ) { ret = "0" + num; }
   else { ret = num; }
   return ret;
}
function showClock2() {
   var nowTime = new Date();
   var nowHour = set2fig( nowTime.getHours() );
   var nowMin  = set2fig( nowTime.getMinutes() );
   var nowSec  = set2fig( nowTime.getSeconds() );
   var msg =  nowHour + ":" + nowMin + ":" + nowSec;
   document.getElementById("Clockvalue").innerHTML = msg;
      var fulldata = new Date();
   var year = fulldata.getFullYear();
  var month=fulldata.getMonth()+1;
  var day=fulldata.getDate();
  var dayvalue=fulldata.getDay();
  var temp=new Array("日曜日","月曜日","火曜日","水曜日","木曜日","金曜日","土曜日");
document.getElementById("datevalue").innerHTML=("今日は"+year+"年"+month+"月"+day+"日"+temp[dayvalue]+"です")
}
setInterval('showClock2()',1000);
