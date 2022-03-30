function Clock() {

  var d = new Date();

  var hour = (d.getHours() *30) + (d.getMinutes()*0.5);
  var minute = d.getMinutes() * 6;
  var second = d.getSeconds() * 6;

  var h = "rotate(" + hour + "deg)";
  var m = "rotate(" + minute + "deg)";
  var s = "rotate(" + second + "deg)";

  $('.hour').css('transform', h);
  $('.minute').css('transform', m);
  $('.second').css('transform', s);

  setTimeout(Clock, 1000);
}
