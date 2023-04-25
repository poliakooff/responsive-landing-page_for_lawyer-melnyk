const modalClose = document.getElementById('modalClose');
const overlay = document.querySelector('.overlay');
const body = document.querySelector('body');

addEventListener('click', function () {
    if (overlay.classList.contains('active')) {
        body.style.overflow = 'hidden'
    }
})

modalClose.addEventListener('click', function() {
    if (overlay.classList.contains('active')) {
        overlay.classList.remove('active');
        body.style.overflow = 'scroll';
    }
})