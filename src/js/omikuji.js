(function(){
	var btn = document.getElementById('js-btn');
	var resultName =  document.getElementById('js-result');
	btn.addEventListener('click',function(){
		var results = ['大吉','中吉','小吉','凶','吉'];
		var result = Math.floor(Math.random() * results.length);
		resultName.innerHTML = results[result];
	});
	btn.addEventListener('mousedown',function(){
		this.className = 'pushed';
	});
	btn.addEventListener('mouseup',function(){
		this.className = 'btn';
	});
})();