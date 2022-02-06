// const nameInput = document.querySelector("#name-input");
// console.log(nameInput);
// const nameOutput = document.querySelector("#name-output");
// console.log(nameOutput);

// let textOutputs = nameInput.namespaceURI ;

// const texInput = event => {
// 	nameOutput.textContent = textOutputs  ;
// }
// // const textOutput = event => {
// // 	nameOutput.textContent = textOutputs += textOutputs.textContent;
// // }
//  nameInput.addEventListener("input", texInput);
// // nameOutput.addEventListener("input", textOutputs);
// console.log (nameInput);
const textOutput = document.querySelector("#name-output");
const textInput = document.querySelector("#name-input");
// let textOutputs = textInput.textContent  ;
 
const finish = event => {
	  textOutput.textContent = textInput.value;
	  if (textInput.value === "") {
		  textOutput.textContent = "Anonymous"
	  }
};
 
textInput.addEventListener("input",finish);
console.log(textInput);
console.log(textOutput);
