
setInterval(function() {

  const newDate = new Date();
  let hour = newDate.getHours();
  let minutes = newDate.getMinutes();
  let seconds = newDate.getSeconds();

  const am = "AM";
  const pm = "PM";
  if (minutes < 10) {
    minutes = "0" + minutes;
  }
  if (seconds < 10) {
    seconds = "0" + seconds;
  }
  if (hour > 12) {
    hour = hour - 12;
    time = `0${hour} : ${minutes} : ${seconds} am`;
    document.getElementById("clock").innerHTML = time;
  }

  time = `0${hour} : ${minutes} : ${seconds} pm`;
  document.getElementById("clock").innerHTML = time;

}, 1000);
