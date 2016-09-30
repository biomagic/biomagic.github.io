var t = [0];

var firstsplitflag = 0;
var btnStartStop = document.getElementById("start-stop-button");
var btnReset = document.getElementById('reset-button');
var btnSplit = document.getElementById('split-button');
var elSplit = document.getElementById('split');
var elDisplay = document.getElementById('disp');
var dateVal = +new Date(1970, 1, 1);
var step = 1;
var counOfStarts = 0;
var difference = 0;
var startFlag = 0;
var dateCurrent = 0;
var datePastPerfect = 0;

btnStartStop.addEventListener("click", stopStart);
btnSplit.addEventListener("click", doSplit);
btnReset.addEventListener("click", resetIt);

function disp() {

  if (startFlag) {
    dateCurrent = +new Date();
  }
  elDisplay.innerHTML = format(difference + dateCurrent - datePastPerfect);
}

function format(ms) {
  var d = new Date(ms + dateVal).toString().replace(/.*([0-9][0-9]:[0-9][0-9]:[0-9][0-9]).*/, '$1');
  var mseconds = String(ms % 1000);
  while (mseconds.length < 3) mseconds = '0' + mseconds;
  d += '.' + mseconds;
  return d;
}

function stopStart() {

  if (startFlag == 0) {
    datePastPerfect = +new Date();
  }

  startFlag = 1 - startFlag;  

  if (0 == startFlag) {
    clearInterval(counOfStarts);
    difference += dateCurrent - datePastPerfect;
    btnStartStop.innerHTML = "Start"
    btnStartStop.className = 'btn btn-success';
    elSplit.innerHTML += (step++) + ' Stop: ' + format(dateCurrent - datePastPerfect) + '<br>';
    counOfStarts = dateCurrent = datePastPerfect = 0;
    disp();
    firstsplitflag = 0;
  } else {
    btnStartStop.innerHTML = "Stop";
    btnStartStop.className = 'btn btn-danger';
    counOfStarts = setInterval(disp, 43);
  }
}

function doSplit() {
  if (0 !== startFlag) {
    elSplit.innerHTML += (step++) + ' Split: ' + format(dateCurrent - datePastPerfect) + '<br>';
  }
}

function resetIt() {
  if (startFlag) stopStart();
  counOfStarts = difference = startFlag = dateCurrent = datePastPerfect = 0;
  disp();
  elSplit.innerHTML = '';
  step = 1;
}

disp();
