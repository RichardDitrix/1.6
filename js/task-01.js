const liEl = document.querySelectorAll(".item");
// console.log(liEl);
//  Number of Categories
const numberOfCategories = liEl.length;
console.log("Number of categories:",numberOfCategories);
// Name & Number of Categories
// const navEl = document.querySelector("#categories")
// console.log(navEl);

// const firstItem = navEl.firstElementChild;
// console.log(firstItem);
// const title = firstItem.querySelector('h2');
// console.log("Category:", title.textContent);
// const firstElements = firstItem.querySelectorAll("li");
// const firstElem = firstElements.length;
// console.log("Elements:", firstElem);

// const secondItem = firstItem.nextElementSibling;
// console.log(secondItem);
// const secondTitle = secondItem.querySelector('h2');
// console.log("Category:", secondTitle.textContent);

// const thirdItem = navEl.lastElementChild;
// console.log(thirdItem);
// const thirdTitle = thirdItem.querySelector('h2');
// console.log("Category:", thirdTitle.textContent);

// liEl.forEach(element => {
// 	const categories = element.querySelector('h2').textContent;
// 	console.log("Category:",categories);
// 	const  numberOfElements = element.querySelectorAll('li').length;
// 	console.log("Elements:", numberOfElements);
// });
// liEl.forEach(element => {
// 	console.log("Category:", element.querySelector('h2').textContent);
// 	console.log("Elements:", element.querySelectorAll('li').length);
// });
liEl.forEach(element => {
	console.log("Category:", element.querySelector('h2').textContent,  "\nElements:", element.querySelectorAll('li').length);
});
