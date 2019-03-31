let countdown;
const timerDisplay = document.querySelector('.display__time-left')
const buttons = document.querySelectorAll('[data-time]')
var audio = document.getElementById('myAudio')


function timer (seconds)  {
    //clear any existing timers
    clearInterval(countdown)
    const now = Date.now();
    const then = now + seconds * 1000;
    displayTimeLeft(seconds);
    countdown = setInterval(() => {
        const secondsLeft = Math.round((then - Date.now()) / 1000);
        if(secondsLeft < 0 ){
                playAudio()
         Push.create("Time is Up!", {
             icon: "imgs/tomato.png"
         })
            clearInterval(countdown)
            return;
        }
        displayTimeLeft(secondsLeft)
    }, 1000)
}

function stopAudio(){
    audio.pause();
    clearInterval(countdown)
}


function playAudio() { 
    audio.play(); 
    clearInterval(countdown)
  } 


displayTimeLeft = (seconds) => {
    const minutes = Math.floor(seconds / 60);
    const remainderSeconds = seconds % 60;
    //Add a 0 if remainder seonds is less than 10 or dont add anything
    const display = `${minutes}:${remainderSeconds < 10 ? '0' : ''}${
        remainderSeconds}`
    timerDisplay.textContent = display;
}


function startTimer() {
    const seconds = parseInt(this.dataset.time)
    timer(seconds);
}







buttons.forEach(button => button.addEventListener('click', startTimer))

