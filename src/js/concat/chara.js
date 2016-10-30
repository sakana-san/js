$(function() {
	var btn = document.getElementById('getResult');
	var result = document.getElementById('result');
	btn.addEventListener('click', function() {
		var name = document.getElementById('name').value;
		var types = ['勇者', '魔法使い', '戦士', '遊び人'];
		var type = types[Math.floor(Math.random() * types.length)];
		// var characters = ['賢い', '勇ましい', 'かわいい', '情けない'];
		// var character = characters[Math.floor(Math.random() * characters.length)];
		if (name == '') return alert('入力してください');
		(isNaN(name)) ? result.innerHTML = name + "さんは" + type + "です。" : result.innerHTML = '数字以外を入力してください';
	});
});