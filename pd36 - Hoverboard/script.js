const container = document.getElementById('container')
const colors = ['#F3F8FF', '#E26EE5', '#7E30E1', '#49108B']
// https://colorhunt.co/palette/f3f8ffe26ee57e30e149108b
const neons = ['#4deeea', '#74ee15', '#ffe700', '#f000ff', '#001eff']
// https://www.color-hex.com/color-palette/8618
const SQUARES = 500

for(i = 0; i < SQUARES; i++) {
    const square = document.createElement('div')
    square.classList.add('square')

    square.addEventListener('mouseover', () => setColor(square))

    square.addEventListener('mouseout', () => removeColor(square))

    container.appendChild(square)
}

function setColor(element) {
    const setColor = getRandomColor()
    element.style.background = setColor
    element.style.boxShadow = `0 0 2px ${setColor}, 0 0 10px ${setColor}`
}

function removeColor(element) {
    element.style.background = '#1d1d1d'
    setTimeout(() => {
        element.style.boxShadow = '0 0 2px #000'
    }, 2500);
}

function getRandomColor() {
    return colors[Math.floor(Math.random() * colors.length)]
}