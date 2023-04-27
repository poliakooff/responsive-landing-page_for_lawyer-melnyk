const subtitle = document.querySelector('.modal__subtitle')
const linkNames = document.querySelectorAll('.services__link');
const serviceName = document.getElementById('serviceName');
const serviceMore = document.querySelector('.button__link_more');

linkNames.forEach(linkName => {
    linkName.addEventListener('click', () => {
        serviceName.innerHTML = 'по ' + linkName.innerHTML;
    })
});

serviceMore.addEventListener('click', () => {
    serviceName.innerHTML = "по другим услугам"
})