$(function() {
	$('#getResult').on('click', function() {
		if(name == '') {
			alert("名前を入力してください");
			return;
		}
		var name = $('#name').val();

		var types = ['勇者', '魔法使い', '戦士', '遊び人'];
		var type = types[Math.floor(Math.random() * types.length)];

		var characters = ['賢い', '勇ましい', 'かわいい', '情けない'];
		var character = characters[Math.floor(Math.random() * characters.length)];

		var result = name + 'さんは' + '「' + character + type + '」です。';
		
		$('#result').text(result);

		var tweetLink = '<a href=\"#\">ツイートする</a>';
		$('#tweet').html(tweetLink);
	});
});