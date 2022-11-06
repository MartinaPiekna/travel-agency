'use strict';

window.onload = function () {
  //EARTH
  //Showing the form
  const earth = document.getElementById('launchEarth');
  const formE = document.getElementById('alertEarth');

  function showFormEarth() {
    const orderForm = document.getElementById('formEarth');
    orderForm.style.display = 'block';
  }

  //Hiding the form
  const closeEarth = document.getElementById('closeEarth');
  function hideFormEarth() {
    const orderForm = document.getElementById('formEarth');
    orderForm.style.display = 'none';
    formE.reset();
  }

  //MOON
  //Showing the form
  const moon = document.getElementById('launchMoon');
  const formM = document.getElementById('alertMoon');

  function showFormMoon() {
    const orderForm = document.getElementById('formMoon');
    orderForm.style.display = 'block';
  }

  //Hiding the form
  const closeMoon = document.getElementById('closeMoon');

  function hideFormMoon() {
    const orderForm = document.getElementById('formMoon');
    orderForm.style.display = 'none';
    formM.reset();
  }

  //MARS
  //Showing the form
  const mars = document.getElementById('launchMars');
  const formMa = document.getElementById('alertMars');

  function showFormMars() {
    const orderForm = document.getElementById('formMars');
    orderForm.style.display = 'block';
  }

  //Hiding the form
  const closeMars = document.getElementById('closeMars');

  function hideFormMars() {
    const orderForm = document.getElementById('formMars');
    orderForm.style.display = 'none';
    formMa.reset();
  }

  function formSubmit(event) {
    event.preventDefault();
    hideFormEarth();
    hideFormMoon();
    hideFormMars();
    let pin = parseInt(Math.random() * 1000000);
    alert(
      'Congratulations, you has been successfully registrated. You PIN is: ' +
        pin +
        '.',
    );
  }

  //Calling the functions
  earth.addEventListener('click', showFormEarth);
  moon.addEventListener('click', showFormMoon);
  mars.addEventListener('click', showFormMars);
  formE.addEventListener('submit', formSubmit);
  formM.addEventListener('submit', formSubmit);
  formMa.addEventListener('submit', formSubmit);
  closeEarth.addEventListener('click', hideFormEarth);
  closeMoon.addEventListener('click', hideFormMoon);
  closeMars.addEventListener('click', hideFormMars);
};

// mobile menu
const items = document.querySelector('#items');
const menu = document.querySelector('.hamburger');
menu.addEventListener('click', (e) => {
  menu.classList.toggle('open');
  items.classList.toggle('opened-list');
});
