const callBackButtons = document.querySelectorAll('.button_call')
const overlay = document.querySelector('.overlay');
const body = document.querySelector('body');

callBackButtons.forEach(callBackButton => {
    callBackButton.addEventListener('click', function () {
        overlay.classList.add('active');
        body.style.overflow = 'hidden'
      }); 
});
