const joke = document.querySelector("#joke");
const jokeBtn = document.querySelector("#jokeBtn");

jokeBtn.addEventListener('click', () => {
    getJoke();
});

getJoke();

async function getJoke() {
    const config = {
        headers: {
            'Accept': 'application/json'
        }
    }

    const response = await fetch("https://icanhazdadjoke.com/", config);
    const jokeData = await response.json();
    joke.innerHTML = jokeData.joke;
}
