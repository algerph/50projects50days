const buttons = document.querySelectorAll('.ripple');

buttons.forEach(button => {
    button.addEventListener('click', function(eve) {
        const x = eve.clientX;
        const y = eve.clientY;

        const buttonTop = eve.target.offsetTop;
        const buttonLeft = eve.target.offsetLeft;

        const yInside = y - buttonTop;
        const xInside = x - buttonLeft;

        const circle = document.createElement('span');
        circle.classList.add('circle');
        circle.style.top = yInside + 'px';
        circle.style.left = xInside + 'px';

        this.appendChild(circle);

        setTimeout(() => circle.remove(), 500);
        // console.log(xInside,yInside)
    })
})