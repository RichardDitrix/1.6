function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}
const changeColor = document.querySelector('.change-color');
// console.dir(changeColor.style);
const currentColor = document.querySelector('.color');
// console.log(currentColor.value);
const bodyColor = document.querySelector('body');
// console.log(bodyColor.style.backgroundColor);

const magicBackgroundColor = event => {
	// console.log(bodyColor.style.backgroundColor);
	// console.log(bodyColor.style);
	bodyColor.style.backgroundColor = getRandomHexColor();
	currentColor.textContent = getRandomHexColor();
}

changeColor.addEventListener('click', magicBackgroundColor)