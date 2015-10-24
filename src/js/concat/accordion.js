$(function() {
	//アコーディオン
	$('.jsAdBtn').on('click', function() {
		var adMove = $('+.ad-list', this);
		adMove.slideToggle();
		//クリックした以外の.ad-listを上げる
		$('.ad-list').not(adMove).slideUp();
	});

	//実験的アコーディオン
	$("dl.subList").hide().children("dd").hide();
	$("ul#accordionBox h3").click(function () {
		funcClickEvent($(this), $("dl.subList"), $("ul#accordionBox h3"));	
		console.log($(this));				  
	});
	$("dl.subList dt").click(function () {
		//funcClickEvent($(this), $("dl.subList dd"), $("dl.subList dt"));	
	});
	function funcClickEvent(dw, dt, h3){
		$(h3).toggleClass("mainOpened");
		$(h3).not($(dw)).removeClass("mainOpened");
		//$(dt)//.next(dd).slideToggle('normal');
		//$(dd).not(dt.next(dd)).slideUp();
	}

	//アコーディオン　さかな屋Cafe
	$('.c-AdBtn').on('click', function() {
		//.c-AdBtn: .c-AdBtnクラスを全て指定、$(this) : $('.c-AdBtn').on('click')を指定
		currentEvent($('.c-AdBtn'),$(this)); 
		var adMove = $('+.p-accordionList__title', this);
		adMove.slideToggle();
		$('.p-accordionList__title').not(adMove).slideUp();
	});

	function currentEvent(display, hide) {
		//クリックした時に.c-AdBtnにcurrentクラス表示
		display.toggleClass('current');
		//クリックした時にクリックされてない.c-AdBtnにあるcurrentクラスを削除
		display.not($(hide)).removeClass('current');
	}
});