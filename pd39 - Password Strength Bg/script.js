const bgImage = document.querySelector('#background')
const passInput = document.querySelector('#password')

let blurDefault = 20
let blurMin = 0

//** Method 2 */
passInput.addEventListener('input', () => {
    let blurNew = blurDefault - passInput.value.length
    
    // Ensure the blur doesn't go below the minimum value
    blurNew = Math.max(blurNew, blurMin)

    if (passInput.value.length) {
        bgImage.style.filter = `blur(${blurNew}px)`
    }
})

//** Method 1 */
// passInput.addEventListener('input', () => {
//     let blurNew = 0

//     if(passInput.value.length) {
//         blurNew = blurDefault - passInput.value.length
//         bgImage.style.filter = `blur(${blurNew}px)`
//     } else {
//         bgImage.style.filter = `blur(${blurDefault})`
//     }
// })

