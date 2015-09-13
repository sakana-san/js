
$(function() {
	//questionA
	$('.js-cl-change').css('color','red');
	$('.js-cb-change').css({'color':'blue','background':'yellow'});
	$('.js-txt').text('エレン');
	$('.js-txt-change').html('はい、変わりました。');
	$('.js-list').addClass('js-A-list');
	$('.js-list li').remove();
	$('.js-btn').on('click', function() {
		alert('クリックしました。');
	});
	var inTxtClor = $('.js-cl-change-more').css('color','red');
	$('.js-cl-change-more').text('文章ブッコミます',inTxtClor);
	$('.js-click-class-add').on('click',function() {
		$(this).toggleClass('added');
	});
	$('.js-head-txt').prepend('丸いものには角がない。');
	$('.js-back-txt').append('はい！これで以上になります！');
	$('.js-list-txt-add li').eq(-1).after('<li>盛者必衰の理をあらはす</li>');
	//最後の要素 : obj.eq(-1)
	$('span').prependTo('.js-pTag-add');
	$('<span>始まるよ！</span>').appendTo('.js-pTag-add-back');
	$('<p>へいべいびー！</p>').insertBefore('.js-pTag-front');
	$('<p>藤木君ってさ</p>').insertAfter('.js-pTag-back');
	$('.js-divWrap').wrap('<div class="wrap"></div>');
	$('.js-divDelete').on('click', function() {
		$(this).unwrap('div.delete');
	});
	$('.is-wrap').wrapInner('<div class="wrap"></div>');
	$('.class-change-all a').attr('target','_blank');
	$('.class-change-all-dis a').removeAttr('href');
	$('.js-change-class').toggleClass('is-change');
	$('input').val('入力してください');
	$('.js-all-delete-btn').on('click',function() {
		$('.js-all-delete').remove();
	});


	//questionB
	$('.js-ResizeImg').load(function() {
		 $(this).css({'width':'500','height':'300'});
		 $(window).resize(function() {
		 	$('.js-ResizeImg').css({'width':'50','height':'30'});
		 });
	});
});

//prepend 
//引数で指定したコンテンツを各要素の先頭に挿入する。
//append
//各要素に引数で指定したコンテンツを追加する
//eq(-1)
//最後から1番目の要素が選択される
//prependTo
//要素の中身を他の要素の先頭に挿入する。
//例えば $(A).prepend(B) とした場合にAにBが挿入されるのに対して、$(A).prependTo(B) ではBにAが挿入される。
//load()　ページが読み込まれたらアクションを起こす
