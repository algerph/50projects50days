const toggleBtns = document.querySelectorAll('.faq-toggle');

toggleBtns.forEach(toggleBtn => {
    toggleBtn.addEventListener('click', function(eve) {
        eve.target.parentNode.classList.toggle('active');
    });
});