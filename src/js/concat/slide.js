$(function() {

	//スライド猫会編
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
		}
	});
});

$(function() {
//スライド ドットインストール編
//1　縮小画像表示
//2 clickイベント
//3　前へ
//4 次へ
//5 縮小画像の強調表示
//6　自動再生
//7 タイマーの重複起動


//1　縮小画像表示
//1-1　配列作成
//1-2 画像の変数を作成
//1-3 画像がある分だけループさせる
//1-4 .thumbnailsに変数Imgを表示させる
//1-4 縮小画像用のクラスをつける thumbnailList

//2クリックイベントの設定
//2-1 .tnmainの中にimgを表示してクラスを表示するtnMainImg
//2-2 .thumbnailListをクリックするごとにtnMainImgに画像が表示されるようにする

//3前へボタンの実装
//3-1 .prevをクリックする
//3-2 もしcurrentNumが0より小さければfiles.length-1;を代入する
//3-3 .tnMainImgの画面が変化する　currentNumを変数で宣言する

//4次へボタンの実装
//４-1 .nextをクリックする
//４-2 もしcurrentNumがfiles.length -1より大きければ0を代入する
//４-3 .tnMainImgの画面が変化する　currentNumを変数で宣言する

//5 thumbnailListとボタンとの連動
//5-1 カレントナンバー取得のコードを挿入

//6 縮小画像を表示
//6-1 scssをいじる
//6-2 thumbnailList opacity:0.5; current opacity: 1.0;
//6-3 最初の画像だけcurrentする
//6-4 クリックした時にその画像をcurrent
//6-5 クリック以外の画像はcurrentを削除 を使用
//6-6 前へ次へボタンも、上記と同じようなcurrentを実装
//6-7 thumbnailListのcurrentをremoveして、次の番号にcurrentをaddClass

//7 自動再生機能を作ろう
//7-1 タイマー用の変数timerを宣言
//7-2 .playを押した時次の画像を表示。そのための繰り返し処理を作成。　別関数にする
//7-3 別関数にnextをクリックした時の処理をしてくれるコードを記述
//7-4 .playに関数を記述
//7-5 止める時は、stopに止めるためのコードを記述

//8　タイマーの重複起動を防ぐ
//8-1 nowPlayingの変数をfalseで宣言 
//8-2 もしnowPlayingがtrueだったらそれ以降の処理をしない。もしfalseならtrueにする
//8-3 停止の時はnowPlayingをfalseにする。


	var files = ['../dist/img/food1.jpg','../dist/img/food2.jpg','../dist/img/food3.jpg','../dist/img/food4.jpg'];
	var Img;
	var currentNum = 0;
	var timer;
	var nowPlaying = false;

	for(var i=0; i<files.length; i++) {
		Img = $('<img>').attr('src', files[i]).addClass('thumbnailList');
		$('.thumbnails').append(Img);
	}
	$('.tnMain').append(
		$('<img>').attr('src', files[0]).addClass('tnMainImg')
	);
	$('.thumbnailList:first').addClass('current');
	$('.thumbnailList').on('click', function() {
		$('.tnMainImg').attr('src', $(this).attr('src'));
		currentNum = $(this).index();
		$(this).addClass('current').siblings().removeClass('current');
	});
	$('.prev').on('click', function() {
		currentNum--;
		if(currentNum<0) {
			currentNum = files.length-1;
		}
		$('.tnMainImg').attr('src',files[currentNum]);
		$('.thumbnailList').removeClass('current');
		$('.thumbnailList').eq(currentNum).addClass('current');
	});
	$('.next').on('click', function() {
		currentNum++;
		if(currentNum > files.length -1) {
			currentNum = 0;
		}
		$('.tnMainImg').attr('src', files[currentNum]);
		$('.thumbnailList').removeClass('current');
		$('.thumbnailList').eq(currentNum).addClass('current');
	});
	function autoPlay() {
		$('.next').click();
		timer = setTimeout(function() {
			autoPlay();
		},1000);
	}
	$('.play').on('click', function() {
		if(nowPlaying) return;
		nowPlaying = true;
		autoPlay();
	});
	$('.stop').on('click', function() {
		clearTimeout(timer);
		nowPlaying = false;
	});
});


$(function() {
	///スライド　さかな屋cafe編 count = 0にする
	var slideImg = $('.p-slideAnimation');
	var slideImgList = slideImg.find('.p-slideAnimation__list');
	var slideWidth = slideImgList.width();
	var slideMargin = parseInt(slideImgList.css('margin-right'));
	var slideWidthTotal = (slideWidth + slideMargin);
	var count = 0;

	$('.c-slidePrev').on('click', function() {
		count--;
		if (count < 0) {
			count = slideImgList.length - 1;
			console.log(count);
		} 
		slideImg.animate({left: - slideWidthTotal * (count) + 70}, 1000);
		$('.c-slideNav__listBtn').removeClass('cur');
		$('.c-slideNav__listBtn').eq(count).addClass('cur');
	});

	$('.c-slideNext').on('click', function() {
		count++;
		if (count > slideImgList.length - 1) {
			count = 0;
		}
		slideImg.animate({left: - slideWidthTotal * (count) + 70}, 1000);
		$('.c-slideNav__listBtn').removeClass('cur');
		$('.c-slideNav__listBtn').eq(count).addClass('cur');
	});
	
	$('.c-slideNav__listBtn:first').addClass('cur');
	$('.c-slideNav__listBtn').on('click', function() {
		count = $(this).index();
		slideImg.animate({left: - slideWidthTotal * (count) + 70}, 1000);
		$(this).addClass('cur').siblings().removeClass('cur');
	});

/*
	//スライド　さかな屋cafe編 js名変えた
	var slideImg = $('.p-slideAnimation');
	var slideImgList = slideImg.find('.p-slideAnimation__list');
	var slideWidth = slideImgList.width();
	var slideMargin = parseInt(slideImgList.css('margin-right'));
	var slideWidthTotal = (slideWidth + slideMargin) * slideImgList.length;
	var count = 1;

	$('.c-slidePrev').on('click', function() {
		//countが1以下の時
		if (count <= 1) {
			//countに.p-slideAnimation__listを代入する
			count = slideImgList.length;
		} else {
			//countが1以上の時countを1減らす
			count = count - 1;
		}

		slideImg.animate({left: -(slideWidth + slideMargin) * (count - 1) + 70}, 1000);
	});
	$('.c-slideNext').on('click', function() {
		//countが2以上の時
		if (count >= slideImgList.length) {
			//countに1を代入する
			count = 1;
		} else {
			//そうではなく2以下の時countに1足す
			count = count + 1;
			
		}
		slideImg.animate({left: -(slideWidth + slideMargin) * (count - 1) + 70}, 1000);
	});

	$('.c-slideNav__listBtn').on('click', function() {
		count = $(this).index() + 1;
		slideImg.animate({left: -(slideWidth + slideMargin) * (count - 1) + 70}, 1000);
		$(this).removeClass('cur').eq(count -1).addClass('cur');
	});
*/
/*
	//スライド　さかな屋cafe編 基本コード
	var slider = $('.p-slideAnimation');
	var img = $('.p-slideAnimation__list');
	var imgW = img.width();
	var imgM = parseInt(img.css('margin-right'));
	var sliderWidth = (imgW + imgM) * img.length;
	var imgID = 1;
	slider.css('width', sliderWidth);

	$('.c-slideNav__listBtn:not(.cur), .c-slidePrev, .c-slideNext').click(function() {
		if ($(this).is('.c-slidePrev')) {
			if (imgID <= 1) {
				imgID = img.length;
			} else {
				imgID = imgID - 1;
			}
		} else if ($(this).is('.pcslideNext')) {
			if (imgID >= img.length) {
				imgID = 1;
			} else {
				imgID = imgID + 1;
			}
		} else if ($(this).is('.c-slideNav__listBtn')) {
			imgID = $(this).index() + 1;
		}
		//console.log(imgID);
		slider.animate({ left: -(imgW + imgM) * (imgID - 1) + 70 }, 1000);
		$('.c-slideNav__listBtn').removeClass('cur').eq(imgID - 1).addClass('cur');
		return false;
	});
*/
//.is(':visible' 表示されている場合
//「:visible」は表示されている要素を抽出するためのもので、これとis()を組む合わせて利用します。
//.append() 各要素に引数で指定したコンテンツを追加する。
//index() jQueryオブジェクト内で、引数で指定されたエレメントのインデックス番号を返す。インデックスは、ゼロから始まる連番。
//eq() 引数にインデックスを指定し、ひとつだけの要素を選択する。
/*
var sum = 0;
for (var i = 0; i < 10; i++){
  sum+=2;
  console.log(sum);
}
document.write("<p>2を10回加えた合計は" + sum + "</p>");
*/

});