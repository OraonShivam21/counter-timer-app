let minute = document.getElementById("minute");
let second = document.getElementById("second");

let edit = document.getElementById("edit");
let reset = document.getElementById("reset");
let start = document.getElementById("start");
let stop = document.getElementById("stop");
let edit_timer_box = document.getElementById("edit-timer-box");
let edit_time = document.getElementById("edit-time");

let startTimer = false;
let min = "";
let sec = "";

edit.addEventListener("click", function () {
  edit_time.classList.toggle("edit-class");
});

start.addEventListener("click", function () {
  let time = edit_time.value.split(":");
  edit_time.value = "00:00";
  console.log(time);
  if (time[0] == 0 && time[1] > 0) {
    min = 0;
    sec = Number(time[1]) + 1;
  } else {
    min = Number(time[0]) || min || 2;
    sec = (Number(time[1]) || sec || 0) + 1;
  }
  edit_time.classList.add("edit-class");
  start.style.display = "none";
  stop.style.display = "block";
  reset.style.opacity = 1;
  startTimer = true;
  // console.log(min, sec);
  startingTimerFunction();
});

stop.addEventListener("click", function () {
  startTimer = false;
  start.style.display = "block";
  stop.style.display = "none";
  edit_time.classList.add("edit-class");
});

reset.addEventListener("click", function () {
  startTimer = false;
  min = 0;
  sec = 0;
  minute.innerText = "02";
  second.innerText = "00";
  start.style.display = "block";
  stop.style.display = "none";
  edit_time.classList.add("edit-class");
});

function startingTimerFunction() {
  if (startTimer) {
    if (sec == 1 && min == 0) {
      startTimer = false;
      start.style.display = "block";
      stop.style.display = "none";
    }

    if (sec == 0) {
      min--;
      sec = 60;
    }

    sec--;

    let strMin = min;
    let strSec = sec;

    if (min < 10) {
      strMin = "0" + strMin;
    }

    if (sec < 10) {
      strSec = "0" + strSec;
    }

    minute.innerText = strMin;
    second.innerText = strSec;

    setTimeout(startingTimerFunction, 1000);
  }
}
