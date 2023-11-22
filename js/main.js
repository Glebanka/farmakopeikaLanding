const openPopUp = document.getElementById('openPopUp');
const closePopUp = document.getElementById('closePopUp');
const popUp = document.getElementById('popUp');

openPopUp.addEventListener('click', () => {
    popUp.classList.add('active');
});

closePopUp.addEventListener('click', () => {
    popUp.classList.remove('active');
});

