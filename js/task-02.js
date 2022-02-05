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
const addIngredients = document.querySelector("#ingredients");
// for (let i = 0; i < ingredients.length; i += 1) {
// 	const addLi = document.createElement("li");
// 	addLi.textContent = ingredients[i];
// 	addLi.classList.add("item");
// 	addIngredients.append(addLi);

// };
// const qqq = document.querySelector("#ingredients");
// console.log(qqq);

const mapIngr = ingredients.map(element => {
	const qwe = document.createElement("li");
	qwe.textContent = element;
	qwe.classList.add("item");
return qwe;

});

addIngredients.append(...mapIngr);