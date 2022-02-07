const validation = document.querySelector("#validation-input");
const validationLength = document.querySelector('[data-length="6"]');
const validInput = document.querySelector
console.log(validationLength);
console.log(validation);

const checkLength = event => {
	console.log(validation.value.length);
console.log(validationLength.dataset.length);
	if (validation.value.length  !== validationLength.dataset.length) {
		validation.classList.add("valid")
	} else {
		validation.classList.add("invalid")
	}
	 
};
console.log (checkLength);
validation.addEventListener("blur", checkLength);
console.log(validation.value.length);
console.log(validationLength.dataset.length);