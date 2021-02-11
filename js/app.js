const nameInput = document.getElementById('name-input');
const changeButton = document.getElementById('name-change-button');
const nameDisplay = document.getElementById('name-display');

changeButton.addEventListener('click', () => {
  // console.log('Button Clicked');
  nameDisplay.textContent = nameInput.value;
  nameDisplay.classList.add("extra-bold");
  nameInput.value = '';
});

nameInput.addEventListener('keyup', function(event) {
  var key = event.key || event.keyCode;
  if (key === 'Enter' || key === 13) {
    event.preventDefault
    
    changeButton.click();  // document.getElementById('name-change-button').click();
  }
});

console.log('Hello')

