const callBackLinks = document.querySelectorAll('.contacts__person');
const overlay = document.querySelector('.overlay');

callBackLinks.forEach(callBackLink => {
    callBackLink.addEventListener('click', function (e) {
        e.preventDefault();
        overlay.classList.add('active');
    })
});

