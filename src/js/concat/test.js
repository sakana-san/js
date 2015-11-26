(function() {
	var main = document.getElementById('main');
	//main.innerHTML = 'tesuto';

	var item =  document.createElement('li');
	item.textContent = '要素を入れます';
	console.log(main);
	main.appendChild(item);

})();