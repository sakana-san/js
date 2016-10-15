// $(function() {
// 	var answer = document.getElementById(('answer'));
// 	var answerResult = document.getElementById(('answerResult'));
// 	answer.addEventListener('click', function() {
// 		kigsOrder();
		
// 	});
// 	function kigsOrder() {
// 		var num = document.getElementById('num').value;
// 		var p1 = Math.floor(Math.random() * num + 1);
// 		var orders = [
// 			'クイズを出しなさい',
// 			'褒めなさい',
// 			'ドリンクを注ぎなさい',
// 			'クイズを出しなさい'
// 		];
// 		var order = orders[Math.floor(Math.random() * orders.length)];
// 		answerResult.innerHTML = p1 + 'の人が ' + order;
// 	}
// });