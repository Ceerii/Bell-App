countdown();
  success();  

function success(){
     document.querySelector("#bikepick").innerHTML= localStorage.getItem('firstText') ;
console.log(bikepick);
    console.log("yyyy")
}

var successButton = document.querySelector(".success-button");

successButton.addEventListener("click", home);

function home(){
    window.location.assign("/slider.html");
}

function countdown(){
    var target_date = new Date().getTime() + (1000*3600*72); // set the countdown date
var days, hours, minutes, seconds; // variables for time units

var countdown = document.getElementById("time").innerHTML; // get tag element

getCountdown();

setInterval(function () { getCountdown(); }, 1000);

function getCountdown(){

  // find the amount of "seconds" between now and target
  var current_date = new Date().getTime();
  var seconds_left = (target_date - current_date) / 1000;

  days = pad( parseInt(seconds_left / 86400) );
  seconds_left = seconds_left % 86400;
       
  hours = pad( parseInt(seconds_left / 3600) );
  seconds_left = seconds_left % 3600;
        
  minutes = pad( parseInt(seconds_left / 60) );
  seconds = pad( parseInt( seconds_left % 60 ) );

  // format countdown string + set tag value
  countdown =  days + ":" +  hours + ":" + minutes + ":" + seconds ; 
  localStorage.setItem("clock", countdown)
  console.log(countdown)
}

function pad(n) {
  return (n < 10 ? '0' : '') + n;
}


  }