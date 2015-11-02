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
/*
(function(name) {
	console.log('hello' + name);
})('長澤まさみ');
var i = 0;
*/
/*
var i = 0;
function show() {
	console.log(i++);
	var timer = setTimeout(function() {
		show();
	}, 1000);
	if(i > 3) {
		clearTimeout(timer);
	}
}
show();
*/

//オブジェクト
/*
var user = {
	email: 'taguchi@gmail.com',
	score: 80,
	greet: function(name) {
		console.log('hello' + name + 'from' + this.email);
	}
};
*/
var koukouyakyu = {
	name: '大阪桐蔭',
	power: 90,
	protect: 85,
	strength: 95,
	greet: function(senbatu) {
		console.log('今年の' + senbatu + this.name + ' が出場します')
	}
};
koukouyakyu.greet('選抜');
//console.log(koukouyakyu.name + koukouyakyu.power);
//console.log(user['email']);
//console.log(user.email);
//user.score = 100;
//console.log(user);
//user.greet('Tom');
