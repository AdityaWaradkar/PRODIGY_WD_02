let seconds = 0;
let minutes = 0;
let hours = 0;
let intervalId;
let laps = [];

document.getElementById('start').addEventListener('click', function() {
    if (!intervalId) {
        intervalId = setInterval(function() {
            seconds++;
            if (seconds === 60) {
                seconds = 0;
                minutes++;
            }
            if (minutes === 60) {
                minutes = 0;
                hours++;
            }
            document.getElementById('display').textContent =
                (hours? (hours > 9? hours : "0" + hours) : "00") +
                ":" +
                (minutes? (minutes > 9? minutes : "0" + minutes) : "00") +
                ":" +
                (seconds > 9? seconds : "0" + seconds);
        }, 1000);
    }
});


document.getElementById('pause').addEventListener('click', function() {
    clearInterval(intervalId);
    intervalId = null;
});


document.getElementById('reset').addEventListener('click', function() {
    clearInterval(intervalId);
    intervalId = null;
    seconds = 0;
    minutes = 0;
    hours = 0;
    document.getElementById('display').textContent = "00:00:00";
    laps = [];
});


document.getElementById('lap').addEventListener('click', function() {
    const currentTime = document.getElementById('display').textContent;
    laps.push(currentTime);
    let lapsDisplay = '<ul>';
    laps.forEach(lap => {
        lapsDisplay += `<li>${lap}</li>`;
    });
    lapsDisplay += '</ul>';
    document.getElementById('laps').innerHTML = lapsDisplay;
});
