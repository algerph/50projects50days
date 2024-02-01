const ratings = document.querySelectorAll('.rating')
const ratingBox = document.querySelector('.ratings-container')
const sendBtn = document.querySelector('#send')
const panel = document.querySelector('#panel')

let selectedRating = null

removeActive()

ratingBox.addEventListener('click', (eve) => {
    if (eve.target.parentNode.classList.contains('rating')) {
        removeActive()
        eve.target.parentNode.classList.add('active')

        // Check if nextElementSibling exists before accessing its innerHTML
        selectedRating = eve.target.nextElementSibling ? eve.target.nextElementSibling.innerHTML : null;
    }
})

sendBtn.addEventListener('click', (eve) => {
    // Check if selectedRating is not null before using it
    if (selectedRating !== null) {
        panel.innerHTML = `
        <i class="fas fa-heart"></i>
        <strong>Thank you!</strong>
        <br>
        <strong>Feedback: ${selectedRating}</strong>
        <p>We'll use your feedback to improve our customer support</p>
        `;
    } else {
        // Handle the case where no rating is selected
        window.alert('Please select a rating before sending feedback.');
    }
})

function removeActive() {
    for (let i = 0; i < ratings.length; i++) {
        ratings[i].classList.remove('active')
    }
}