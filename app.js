
  var eidDate = new Date('2024-07-31T00:00:00');


function updateCountdown() {
  var currentDate = new Date();
  var difference = eidDate - currentDate;

  if (difference <= 0) {
    
    clearInterval(timer);
    alert("Eid Mubarak!");
    return;
  }

  
  var days = Math.floor(difference / (1000 * 60 * 60 * 24));
  var hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  var minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
  var seconds = Math.floor((difference % (1000 * 60)) / 1000);
  var milliseconds = difference % 1000;

  
  document.getElementById('days').innerText = days;
  document.getElementById('hrs').innerText = hours;
  document.getElementById('mins').innerText = minutes;
  document.getElementById('secs').innerText = seconds;
  document.getElementById('ms').innerText = milliseconds.toString().padStart(3, '0');
}

updateCountdown();

var timer = setInterval(updateCountdown, 10);