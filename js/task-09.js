function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}
const changeColor = document.querySelector('.change-color');
// console.dir(changeColor);
const currentColor = document.querySelector('.color');
// console.log(currentColor.textContent);
const bodyColor = document.querySelector('body');
// console.log(bodyColor.style.backgroundColor);

const magicBackgroundColor = event => {
	const randomColor = getRandomHexColor();
	bodyColor.style.backgroundColor = randomColor;
	currentColor.textContent = randomColor;
	// console.log(currentColor.textContent);
	// console.log(bodyColor.style.backgroundColor);
}

changeColor.addEventListener('click', magicBackgroundColor)