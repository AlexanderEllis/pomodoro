$(document).ready(function(){
  var startMinutes, minutes, startSeconds, seconds, running, intervalOne, startMinutesTwo, minutesTwo, startSeconds, secondsTwo, runningTwo, intervalTwo;

  var whichClock = true; //true = clockOne, false = clockTwo
  var changeTomatoOne = $("#tomato");
  var changeTomatoTwo = $("#tomatoTwo");

var audioElement = document.createElement('audio');
  audioElement.setAttribute('src', 'http://soundbible.com/grab.php?id=1599&type=wav');

 audioElement.addEventListener("load", function() {
  audioElement.play();
 }, true);

  running = false;
  runningTwo = false;

startMinutes = 25;
startMinutesTwo = 5;
  
  var resetOne = function(){
  minutes = startMinutes;
  startSeconds = 0;
  if (startSeconds < 10) {
    startSeconds = "0" + startSeconds;
  }
  seconds = startSeconds;
  running = false;
  intervalOne;
  $("#minutes").text(minutes);
  $("#seconds").text(seconds);
  };
  
  var resetTwo = function() {
  minutesTwo = startMinutesTwo;
  startSecondsTwo = 0;
  if (startSecondsTwo < 10) {
    startSecondsTwo = "0" + startSecondsTwo;
  }
  secondsTwo = startSecondsTwo;
  runningTwo = false;
  intervalTwo;
  $("#minutesTwo").text(minutesTwo);
  $("#secondsTwo").text(secondsTwo);
  };
  
  var runClockOne = function(){
    changeTomatoOne.animate({backgroundColor: 'red'}, 'slow');
    whichClock = true;
    if (!running) {
    running = true;
    intervalOne = setInterval(function(){
    if ((minutes === 0) && (seconds === "01")) {
      audioElement.play();
      clearInterval(intervalOne);
      changeTomatoOne.animate({backgroundColor: '#73D424'}, 'slow');
      resetTwo();
      runClockTwo();
    }
    if (seconds > 0) {
    seconds = seconds - 1;
    if (seconds < 10) {
      seconds = "0" + seconds;
    }
    }
    else {
      seconds = 59;
      minutes = minutes - 1;
      $("#minutes").text(minutes);
    }
    $("#seconds").text(seconds);
  }, 1000);   
  }};
  var runClockTwo = function(){
    changeTomatoTwo.animate({backgroundColor: 'red'}, 'slow');
    whichClock = false;
    if (!runningTwo) {
    runningTwo = true;
    intervalTwo = setInterval(function(){
    if ((minutesTwo === 0) && (secondsTwo === "01")) {
      audioElement.play();
      clearInterval(intervalTwo);
      changeTomatoTwo.animate({backgroundColor: '#73D424'}, 'slow');
      resetOne();
      runClockOne();
    }
    if (secondsTwo > 0) {
    secondsTwo = secondsTwo - 1;
    if (secondsTwo < 10) {
      secondsTwo = "0" + secondsTwo;
    }
    }
    else {
      secondsTwo = 59;
      minutesTwo = minutesTwo - 1;
      $("#minutesTwo").text(minutesTwo);
    }
    $("#secondsTwo").text(secondsTwo);
  }, 1000);   
  }};

$(document).ready(function(){

  
  
  resetOne();
  resetTwo();
  

  $("#starter").click(function() {
    if (!running) {  
      audioElement.play();
    }
    if (whichClock){
    runClockOne();
    }
    else if (!whichClock) {
    runClockTwo();
    }
  });
  
  $("#pause").click(function(){
    if (running) {
      clearInterval(intervalOne);
      running = false;
    }
    if (runningTwo) {
      clearInterval(intervalTwo);
      runningTwo = false;
    }
    
  });
  
  $("#reset").click(function(){
    running = false;
    clearInterval(intervalOne);
    resetOne();
    changeTomatoOne.animate({backgroundColor: '#73D424'}, 'slow');

    runningTwo = false;
    clearInterval(intervalTwo);
    resetTwo();
    changeTomatoTwo.animate({backgroundColor: '#73D424'}, 'slow');
    whichClock = true;
  });
  
  $("#plus").click(function(){
    startMinutes += 1;
    minutes += 1;
    $("#minutes").text(minutes);
  });
  
  $("#plusTwo").click(function(){
    startMinutesTwo +=1;
    minutesTwo += 1;
    $("#minutesTwo").text(minutesTwo);
  });
  
  $("#minus").click(function(){
    if (minutes !== 1) {
      startMinutes -= 1;
      minutes -= 1;
      $("#minutes").text(minutes);
  }});
  
  $("#minusTwo").click(function(){
    if (minutesTwo !== 1) {
      startMinutesTwo -= 1;
      minutesTwo -= 1;
      $("#minutesTwo").text(minutesTwo);
  }});
  
  $(".button").hover(function(){
    $(this).css("background-color", "red");
  }, function(){
    $(this).animate({backgroundColor: 'green'}, 'fast');
  });
  
  $(".button").mousedown(function(){
    $(this).css("background-color", "#CC0000");
  });
  
  $(".button").mouseup(function(){
    $(this).css("background-color", "red");
  });
  
});
});