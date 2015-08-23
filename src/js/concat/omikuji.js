(function(){
	var btn = document.getElementById('js-btn');
	var resultName = document.getElementById('js-result');

	btn.addEventListener('click', function(){
		var results = ['大吉','小吉','中吉','吉','凶'];
		var result = Math.floor(Math.random() * results.length);
		resultName.innerHTML = results[result];
	});
	btn.addEventListener('mousedown', function(){
		this.className = 'pushed';
	});
	btn.addEventListener('mouseup', function(){
		this.className = 'btn';
	});
})();

/*
(function() {
 document.getElementById('js-btn').addEventListener('click', function() {
 	var results = ['大吉','小吉','吉','凶'];
 	var result = Math.floor(Math.random() * results.length);
 	document.getElementById('js-result').innerHTML = results[result];
 });
 document.getElementById('js-btn').addEventListener('mousedown', function() {
 	this.className = 'pushed'
 });
 document.getElementById('js-btn').addEventListener('mouseup', function() {
 	this.className = 'btn'
 });
})();
*/

//乱数表示
//Math.floor(Math.random() * 3);

//配列の個数を表す
//length