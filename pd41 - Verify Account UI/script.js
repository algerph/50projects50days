const  codes = document.querySelectorAll('.code')

codes[0].focus()

codes.forEach((code, idx) => {
    code.addEventListener('keydown', (eve) => {
        if (eve.key >= 0 && eve.key <= 9) {
            codes[idx].value = ''
            setTimeout(() => codes[idx + 1].focus(), 10)
        } else if (eve.key === "Backspace") {
            setTimeout(() => codes[idx - 1].focus(), 10)
        }

        console.log(code, idx)
    })
})