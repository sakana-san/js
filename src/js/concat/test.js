$(function() {

/*
	$('.p-box').on('mouseover', function() {
		$(this).css('background', 'red');
	});
	$('.p-box').on('mouseout', function() {
		$(this).css('background', 'blue');
	});
	$('.p-box').on('mousemove', function(e) {
		$(this).text(e.pageX);
	});

	$('button').on('click', function() {
		var p = $('<p>').text('テストですよ！').addClass('test');
		$(this).before(p);
	});
	$('body').on('click', '.test', function() {
		$(this).remove();
	});
*/
	//Ajax
	//Asynchronous Javascript + XML
	//サーバーと通信 + ページの書き換え
	//非同期: 処理が終わる前に次の処理に移る
	//$.post データを更新したりするならpost
	//$.get  データを取得するだけならget

	$('#greet').on('click', function() {
		$.get('greet.php', {
			name: $('#name').val()
		}, function(data) {
			$('.result').html(data);
		});
	});
/*
	$('button').on('click', function() {
		$('.result').load('more.html' , function() {
			//コールバック関数
			$('.message').css('color', 'red');
		});
	});
*/
});