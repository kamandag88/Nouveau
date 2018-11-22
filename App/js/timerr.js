window.onload = function () {
  
  var seconds = 0; 
  var tens = 0; 
  var minutes = 0;
  var appendTens = document.getElementById("tens")
  var appendSeconds = document.getElementById("seconds")
  var appendMinutes = document.getElementById("minutes")
  var buttonStart = document.getElementById('button-start');
  var buttonStop = document.getElementById('button-stop');
  var buttonReset = document.getElementById('button-reset');
  var timervisibility = document.getElementById('timerdiv').className;
  var Interval ;

    buttonStart.onclick = function(){
     clearInterval(Interval);
     Interval = setInterval(startTimer, 10);
    document.getElementById("button-start").style.visibility = "hidden";
  }

  
    buttonStop.onclick = function() {
       clearInterval(Interval);
  }
  
  function startTimer () {
    tens++; 
    
    if(tens < 9){
      appendTens.innerHTML = "0" + tens;
    }
    
    if (tens > 9){
      appendTens.innerHTML = tens;
      
    } 
    
    if (tens >= 60) {
      seconds++;
      appendSeconds.innerHTML = "0" + seconds;
      tens = 0;
      appendTens.innerHTML = "0" + 0;
    }
    
    if (seconds > 9){
      appendSeconds.innerHTML = seconds;
    }

    if(seconds >=60){
      minutes++;
      appendMinutes.innerHTML = "0" + minutes;
      seconds = 0;
      appendSeconds.innerHTML = "0" + 0;
    }
  
    if(minutes > 9){
      appendMinutes.innerHTML = minutes;
    }
  }
  

}