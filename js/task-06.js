const validation = document.querySelector("#validation-input");
const validationLength = document.querySelector('[data-length="6"]');
const validInput = document.querySelector
// console.log(validationLength);
// console.log(validation);

const checkLength = event => {
// 	console.log(Number(validation.value.length));
// console.log(Number(validationLength.dataset.length));
	if (validation.value.length  === Number(validationLength.dataset.length)) {
		validation.classList.add("valid")
		validation.classList.remove("invalid")
	} else {
		validation.classList.add("invalid")
		validation.classList.remove("valid")
	}
	 
};
// console.log (checkLength);
validation.addEventListener("blur", checkLength);
// console.log(validation.value.length);
// console.log(validationLength.dataset.length);