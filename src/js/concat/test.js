//即時関数バージョン
(function() {
	var onClick = document.getElementById('addUrl');

	onClick.addEventListener('click', function() {
		bar();
	});

	function bar() {
		var anchor = document.createElement('a');
		var inputTxt = document.createTextNode(document.getElementById('favTxt').value);
		anchor.appendChild(inputTxt);

		anchor.setAttribute('href', document.getElementById('favUrl').value);
		anchor.setAttribute('target', '_blank');

		var inputLi = document.createElement('li');
		inputLi.appendChild(anchor);

		var list = document.getElementById('favList');
		list.appendChild(inputLi);
	}
})();

//普通のバージョン

//html側にonclick="bar()"をつける
/*

function  bar() {
	var anchor = document.createElement('a');
	var inputTxt = document.createTextNode(document.getElementById('favTxt').value);
	anchor.appendChild(inputTxt);

	anchor.setAttribute('href', document.getElementById('favUrl').value);
	anchor.setAttribute('target', '_blank');

	var inputLi = document.createElement('li');
	inputLi.appendChild(anchor);

	var inputList = document.getElementById('favList');
	inputList.appendChild(inputLi);

*/

