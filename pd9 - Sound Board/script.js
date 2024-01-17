const sounds = ["applause", "boo", "gasp", "tada", "victory", "wrong"];

sounds.forEach(sound => {
    const btn = document.createElement('button');
    btn.classList.add('btn');
    btn.innerText = sound;

    btn.addEventListener('click', () => {
        stopSongs();

        const audioElement = document.getElementById(sound);
        audioElement.play();

        // Add an event listener to reset the currentTime when the sound ends
        audioElement.addEventListener('ended', () => {
            audioElement.currentTime = 0;
        });
    });

    document.getElementById('buttons').appendChild(btn);
});

function stopSongs() {
    sounds.forEach(sound => {
        const song = document.getElementById(sound);

        if (song) {
            song.pause();
            song.currentTime = 0;
        }
    });
}
