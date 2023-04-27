const modalClose = document.getElementById('modalClose');
const overlay = document.querySelector('.overlay');
const body = document.querySelector('body');
const serviceName = document.getElementById('serviceName');

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
    serviceName.textContent = serviceName.getAttribute('data-original-text');
})