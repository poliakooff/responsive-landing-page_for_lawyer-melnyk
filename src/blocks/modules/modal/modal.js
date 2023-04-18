const modalClose = document.getElementById('modalClose');
const overlay = document.querySelector('.overlay');
const body = document.querySelector('body');

modalClose.addEventListener('click', function() {
    if (overlay.classList.contains('active')) {
        overlay.classList.remove('active');
        body.style.overflow = 'scroll';
    }
})