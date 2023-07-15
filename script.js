// Set the date we're counting down to
var countDownDate = new Date("July 23, 2023 23:59:59").getTime();

// Update the countdown every 1 second
var x = setInterval(function() {

  // Get today's date and time
  var now = new Date().getTime();
    
  // Find the distance between now and the countdown date
  var distance = countDownDate - now;
    
  // Calculate the days, hours, minutes, and seconds remaining
  var days = Math.floor(distance / (1000 * 60 * 60 * 24));
  var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  var seconds = Math.floor((distance % (1000 * 60)) / 1000);
    
  // Display the result in the elements with corresponding IDs
  document.getElementById("days").innerHTML = days + "d ";
  document.getElementById("hours").innerHTML = hours + "h ";
  document.getElementById("minutes").innerHTML = minutes + "m ";
  document.getElementById("seconds").innerHTML = seconds + "s ";
    
  // If the countdown is finished, display a message
  if (distance < 0) {
    clearInterval(x);
    document.getElementById("countdown").innerHTML = "EXPIRED";
  }
}, 1000);
