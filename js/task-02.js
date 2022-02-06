const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

// const ingridintsEll = document.querySelector("ul");
// console.log(ingridintsEll);
// const createIngridients = document.createElement("li");
// createIngridients.textContent = "Potatoes";
// createIngridients.classList.add("item");
// ingridintsEll.append(createIngridients);
// console.log(createIngridients);
// const addIngredients = document.querySelector("#ingredients");
// for (let i = 0; i < ingredients.length; i += 1) {
// 	const addLi = document.createElement("li");
// 	addLi.textContent = ingredients[i];
// 	addLi.classList.add("item");
// 	addIngredients.append(addLi);

// };
const ulIngridients = document.querySelector("#ingredients");
// console.log(qqq);

const mapIngr = ingredients.map(element => {
	const liCreate = document.createElement("li");
	liCreate.textContent = element;
	liCreate.classList.add("item");
return liCreate;

});
ulIngridients.append(...mapIngr);

// const notebooks = [
// 'Accer',
// 'Asus',
// 'lenovo',
// 'Aorus'
// ];

// const pcnotes = document.querySelector("#ingredients");

// const notebookModels = notebooks.map(element => {
// 	const nootebook = document.createElement("li");
// 	nootebook.textContent = element;
// 	nootebook.classList.add("item");
// 	return nootebook;
// });
// pcnotes.append(...notebookModels);

// const fruits = [
// 	'Apple',
// 	'Banana',
// 	'Coconut',
// 	'Orange'
// 	];
// const allFruits =document.querySelector("#fruit")
// const fruitMap = fruits.map(element => {
// 	const fruitLi = document.createElement("li");
// 	fruitLi.textContent = element;
// 	fruitLi.classList.add("item");
// 	return fruitLi;
// });
// allFruits.append(...fruitMap);