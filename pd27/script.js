const button = document.getElementById("button");
const toasts = document.getElementById("toasts");

const messages = ["Message 1", "Message 2", "Message 3", "Message 4"];

button.addEventListener("click", () => createNotification());

async function createNotification() {
    const toast = document.createElement("div");

    toast.classList.add("toast");
    // toast.textContent = 'TESTING SHYT';
    // toast.innerHTML = getJoke();
    const config = {
        headers: {
            Accept: "application/json",
        },
    };

    const response = await fetch("https://icanhazdadjoke.com/", config);
    const jokeData = await response.json();
    toast.innerHTML = jokeData.joke;
    toast.style.color = getrandomColor();
    toast.style.backgroundColor = getrandomColor();

    toasts.appendChild(toast);

    // removeNotification();
    setTimeout(() => {
        toast.remove();
    }, 6000);
}

function getrandomColor() {
    //  single random color
    const randomColor = "#" + Math.floor(Math.random() * 16777215).toString(16);
    return randomColor;

    /** multiple random colors
    const colors = [];
    for (let i = 0; i < 10; i++) {
        const randomColor =
            "#" + Math.floor(Math.random() * 16777215).toString(16);
        colors.push(randomColor);
    }
    console.log(colors);
    */
}
