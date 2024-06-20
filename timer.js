var ms = 0, s = 0, m = 0 ;
var timer;

var swContent = document.querySelector('.swdisplay');
var lapHold = document.querySelector('.lapholder');

function startW() {
    swContent.textContent = timeRecorder();
    ms++;

    if(ms / 100 === 1){
        ms = 0;
        s++;
        
        if(s / 60 === 1){
            s = 0;
            m++;
        }
    }
}

function start() {
    if(!timer) {
        timer = setInterval(startW, 10);
    }

}
function pause() {
    counterStop();
}

function reset() {
    counterStop();
    ms = 0;
    s = 0;
    m = 0;
    swContent.textContent = timeRecorder();
}

function counterStop() {
    clearInterval(timer);
    timer = false;
}

function timeRecorder() {
    return (m < 10 ? "0" + m : m) + ":" + (s < 10 ? "0" + s : s) + ":" + (ms < 10 ? "0" + ms : ms);
}

function laps() {
    if(timer){
        var li = document.createElement('li');
        li.innerText = timeRecorder();
        lapHold.appendChild(li);
    }
}

function resetlap() {
    lapHold.innerHTML = "";
}