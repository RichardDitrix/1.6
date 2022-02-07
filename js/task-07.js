const fontSizeControl = document.querySelector("#font-size-control");
// console.log(fontSizeControl.value);
const inputText = document.querySelector("#text");
// console.log(inputText.style.fontSize);

const magic = event => {
	// console.log(inputText.style.fontSize);
	// console.log(fontSizeControl.value);
	inputText.style.fontSize = fontSizeControl.value + "px";
	
};
fontSizeControl.addEventListener('change', magic);