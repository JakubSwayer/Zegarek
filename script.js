function Clock() {
  var d = new Date();
  var hour = (d.getHours() * 30) + (d.getMinutes() * 0.5);
  var minute = (d.getMinutes() * 6) + (d.getSeconds() * 0.1);
  var second = d.getSeconds() * 6;
  var h = "rotate(" + hour + "deg)";
  var m = "rotate(" + minute + "deg)";
  var s = "rotate(" + second + "deg)";
  $('.hour').css('transform', h);
  $('.minute').css('transform', m);
  $('.second').css('transform', s);
  setTimeout(Clock, 1000);
}
var check_box = document.getElementById("customSwitch1");
check_box.addEventListener('change', function() {
    $('#main_div').toggleClass('whole-night whole-day');
    $('#id_clock').toggleClass('clock-night clock-day');
    $('#id_hour-tip').toggleClass('hour-night hour-day');
    $('#id_minute-tip').toggleClass('minute-night minute-day');
    $('#id_second-tip').toggleClass('second-night second-day');
});
