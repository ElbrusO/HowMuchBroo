/*Start programm*/

let inputP = document.querySelector('.persons'); 
let inputS = document.querySelector('.salary');
let inputR = document.querySelector('.renta');

let butn = document.querySelector('button'); 

let div = document.querySelector('.result');


butn.onclick = function () {
	let per = +inputP.value;
	let sal = +inputS.value;
	let ren = +inputR.value;

	let day = (per*sal+ren)/30;
	let sum1 = day * 4 * 1.1;
	let sum2 = day * 10 * 1.2;
	let sum3 = day * 18 * 1.3;

	console.log('Легкий проект = ' + sum1);
	console.log('Средний проект = ' + sum2);
	console.log('Тяжелый проект = ' + sum3);

	ph = document.getElementById('dos');
	ph2 = document.getElementById('dos2');
	ph3 = document.getElementById('dos3');

	ph.innerHTML = ('Маленький проект = ' + Math.floor(sum1) + ' руб');
	ph2.innerHTML = ('Средний проект = ' + Math.floor(sum2) + ' руб');
	ph3.innerHTML = ('Крупный проект = ' + Math.floor(sum3) + ' руб');

	inputS.value = '';
	inputR.value = '';
}