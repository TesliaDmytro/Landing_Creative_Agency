'use strict';


//change columns when window < md

const orderElemFirst = [...document.querySelectorAll('#order-1')];
const orderElemSecond = [...document.querySelectorAll('#order-2')];

 if (window.innerWidth < 768) {
	orderElemFirst.forEach(el => {
		el.classList.add('order-1')
	});

	orderElemSecond.forEach(el => {
		el.classList.add('order-2')
	});
}

// _________________________