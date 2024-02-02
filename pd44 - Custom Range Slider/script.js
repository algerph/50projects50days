const range = document.getElementById('range')

range.addEventListener('input', (eve) => {
    const value =+ eve.target.value
    const label = eve.target.nextElementSibling

    const range_width = getComputedStyle(eve.target).getPropertyValue('width')
    const label_width = getComputedStyle(label).getPropertyValue('width')

    const num_width = +range_width.substring(0, range_width.length - 2)
    const num_label_width = +label_width.substring(0, label_width.length - 2)

    const max = +eve.target.max
    const min = +eve.target.min

    const left = value * (num_width / max) - num_label_width / 2 + scale(value, min, max, 10, -10)

    label.style.left = `${left}px`

    label.innerHTML = value
})

// Map a range of numbers to another range of number
const scale = (num, in_min, in_max, out_min, out_max) => {
    return (num-in_min) * (out_max - out_min) / (in_max - in_min) + out_min;
}