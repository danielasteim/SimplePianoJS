document.addEventListener("DOMContentLoaded", (evento) => {
    // tocar o som
    function playSound(e) {
        const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);

        if (!audio)
            return;

        audio.currentTime = 0;
        audio.play();
    }

    function transition(e) {
        const key = document.querySelector(`.key[data-key="${e.keyCode}"]`);
        key.classList.add('playing');

        setTimeout(() => {
            key.classList.remove('playing');
        }, 100);
    }

    window.addEventListener('keydown', playSound);
    window.addEventListener('keydown', transition);


});
