
$(function() {
	//アコーディオン
	$('.jsAdBtn').on('click', function() {
		var adMove = $('+.ad-list', this);
		
		adMove.slideToggle();
		//クリックした以外の.ad-listを上げる
		$('.ad-list').not(adMove).slideUp();
		console.log(adMove);
	});


//.is(':visible' 表示されている場合
//「:visible」は表示されている要素を抽出するためのもので、これとis()を組む合わせて利用します。

	//スライド
	var slideImg = $('.slide-list');
	var slideWidth = slideImg.width();
	var slideImgList = slideImg.find('.slide-list__image');
	var count = 0;
	for(var i=0; i<slideImgList.length; i++){
		slideImgList.eq(i).css('left',i * slideWidth + 'px');
	}
	$('.jsSlideBtn').on('click',function() {
		
		if(count != slideImgList.length -1) {
			slideImg.animate({left: '-=' + slideWidth}, 1000);
			count++;
		}else{
			slideImg.animate({left: 0},1000);
			count = 0;
			console.log(count);
		}
	});
});


/*
var sum = 0;

for (var i = 0; i < 10; i++){
  sum+=2;
  console.log(sum);
}
document.write("<p>2を10回加えた合計は" + sum + "</p>");
*/

/*
$(function() {
	$('p').click(function(){
		$(this).next().slideToggle();
	});

	var t = $('.slide > ul');
	var w = t.width();
	console.log(w);
	var list = t.find('li');
	
	for(var i=0; i<list.length; i++){
		list.eq(i).css('left',i * w + 'px');
		console.log(i);	
	}

	var count = 0;
	$('.slideBtn').on('click',function() {
		if(count != list.length-1) {
			t.animate({left: '-=' + w},1000);
			count++;
		} else {
			t.animate({left: 0},1000);
			count = 0;
		}
	});
});
*/