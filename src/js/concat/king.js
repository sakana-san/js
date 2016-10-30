$(function() {
	var answer = document.getElementById(('answer'));
	var answerResult = document.getElementById(('answerResult'));
	answer.addEventListener('click', function() {
		kingsOrder();
		
	});
	function kingsOrder() {
		var num = document.getElementById('num').value;
		var orders = [
			'クイズを出しなさい',
			'褒めなさい',
			'ドリンクを注ぎなさい',
			'クイズを出しなさい'
		];
		if (num.match(/^[1-9][1-9]*$/) && num != '') {
			var order = orders[Math.floor(Math.random() * orders.length)];
			answerResult.innerHTML = num + 'の人が ' + order;
		} else {
			alert('数字を入力してください');
			answerResult.innerHTML = 'こちらに結果が表示されます。';
		}
	}
});