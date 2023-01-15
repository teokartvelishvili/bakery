// let play = document.getElementById("play");

// function playMusic() {
//     let audio = new Audio("audio/bakery-Yshwa.mp3");
//     audio.play()
// }

// play.addEventListener("click", playMusic);




function Play()
    {
    let myAudio = document.getElementById("audioval");
    if(myAudio.paused) {
        myAudio.play();
    }
    else {
        myAudio.pause();
    }
    }