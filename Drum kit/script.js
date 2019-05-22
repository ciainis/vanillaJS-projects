function playAudio(e) {
    const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);
    const key = document.querySelector(`div[data-key="${e.keyCode}"]`);

    if (!audio) {
        return;
    }

    key.classList.add('playing');
    audio.currentTime = 0;
    audio.play();
}

function removeTransition(e) {
    if (e.propertyName !== 'transform') {
        return;
    }
    e.target.classList.remove('playing');
}

document.addEventListener('keydown', playAudio);
document.addEventListener('transitionend', removeTransition);