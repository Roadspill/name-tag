const nameInput = document.getElementById('name-input');
const changeButton = document.getElementById('name-change-button');
const nameDisplay = document.getElementById('name-display');

changeButton.addEventListener('click', () => {
  // console.log('Button Clicked');
  nameDisplay.textContent = nameInput.value;
  nameInput.value = '';
});