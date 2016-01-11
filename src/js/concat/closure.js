$(function() {

//jQuery入門
// http://www.jquerystudy.info/tutorial/lab/closure1.html

//クロージャー失敗例
// 
// 	function countMaster() {
// 		var count = 0;
// 		count++;
// 		$('.p-cnt').html(count);
// 	}

// 	$('.up').on('click', function() {
// 		countMaster();
// 	});

// 	$('.disp').on('click', function() {
// 		alert(count);
// 	});
//変数countはcountMaster()のローカル変数。なので、countMaster()が実行される（upボタンクリック）される度、countが作成（初期値は0）されるため値が１から増えない。
//外側から内側のローカルん変数を参照できない。そのためwatchボタンをクリックしても値が表示されない。



//クロージャー ver.1
	// function countMaster() {
	// 	var count = 0;
	// 	function countUpFunc() {
	// 		count++;
	// 		$('.p-cnt').html(count);
	// 	}
	// 	return countUpFunc;
	// }

	// var countUp = countMaster();

	// $('.up').on('click', function() {
	// 	countUp();
	// });

	// $('.disp').on('click', function() {
	// 	alert(count);
	// });
	//countは出来たが、アラートが表示されない。外側から内側のローカル変数を参照できないからだ。



//クロージャー ver.2
	// function countMaster() {
	// 	var count = 0;
	// 	var myObj = new Object();
	// 	myObj.countUpFunc = function() {
	// 		count++;
	// 		$('.p-cnt').html(count);
	// 	}

	// 	myObj.countGetFunc = function() {
	// 		return count;
	// 	}
	// 	return myObj;
	// }

	// cntObj = countMaster();

	// $('.up').on('click', function() {
	// 	cntObj.countUpFunc();
	// });

	// $('.disp').on('click', function() {
	// 	var count = cntObj.countGetFunc();
	// 	alert(count);
	// });
	// //objectプロパティとして複数のfunctionを設定し、そのオブジェクトをreturnによって返す。
	// //myObjには２つのfunctionが設定されていて、インスタンスでも２つの機能が利用できる。



//クロージャー ver.3
	// function countMaster() {
	// 	var count = 0;
	// 	var myObj = new Object();
	// 	myObj.countUpFunc = function(i) {
	// 		count += i;
	// 		$('.p-cnt').html(count);
	// 	}

	// 	myObj.countGetFunc = function() {
	// 		return count;
	// 	}
	// 	return myObj;
	// }

	// cntObj = countMaster();

	// $('.up').on('click', function() {
	// 	cntObj.countUpFunc(10);
	// });

	// $('.disp').on('click', function() {
	// 	var count = cntObj.countGetFunc();
	// 	alert(count);
	// });
	//クロージャ内で作成したfunctionも引数を利用することが可能。



//クロージャー ver.4
	// function countMaster(selector) {
	// 	var myTarget = $(selector);
	// 	var count = 0;
	// 	var myObj = new Object();
	// 	myObj.countUpFunc = function(i) {
	// 		count += i;
	// 		myTarget.html(count);
	// 	}

	// 	myObj.countGetFunc = function() {
	// 		return count;
	// 	}
	// 	return myObj;
	// }

	// cntObj = countMaster('.p-cnt');

	// $('.up').on('click', function() {
	// 	cntObj.countUpFunc(10);
	// });

	// $('.disp').on('click', function() {
	// 	var count = cntObj.countGetFunc();
	// 	alert(count);
	// });
	//countMasterを実行する際に引数で「.p-cnt」を渡すことにより、.p-cntクラスの付いた要素にカウンタの数字を表示できるようになる。



	// 猿でもわかるクロージャ超入門
	// http://dqn.sakusakutto.jp/2009/01/javascript.html
	// クロージャを作成するために必要な３つのこと

	// ● 関数内の関数
	// ● 関数を返す関数
	// ● 無名関数

	// function outer()  {
	// 	var x = 0;
	// 	return function(){
	// 		x += 1;
	// 		alert(x);
	// 	}
	// }
	// var f = outer();
	// f();
	// f();
	// f();

	// function countTest() {
	// 	var count = 0;
	// 	function upCount() {
	// 		count++;
	// 		console.log(count);
	// 	}
	// 	return upCount;
	// }
	// var f = countTest();
	// f();
	// f();
	// f();

	//実例 いまのところ、これのどこがクロージャなのか謎
	// var isClicked = false;
	// $('#frm').on('click', function() {
	// 	if(isClicked) {
	// 		alert('二回押してますよ');
	// 		return false;
	// 	}
	// 	isClicked = true;
	// 	return false;
	// });



	//[javascript]はじめてのクロージャ
	//http://qiita.com/shuuuuun/items/7ddf77573f1169e61b51
	// var countup = (function() {
	// 	var num = 0;
	// 	return function() {
	// 		return num++;
	// 	}
	// })();

	// console.log(countup());
	// console.log(countup());
	// num = 0;
	// console.log(countup());
	// クロージャーとは、
	// (外側の)関数の中にnumが宣言されていることで、スコープが切れていて、
	// (内側の)関数の外にnumが宣言されていることで、状態が保持されている。
	// ポイント
	// スコープ
	// 関数の中の関数
	// 状態を保持する関数



	//jQueryを用いてクロージャーを理解する
	//http://qiita.com/t4kmru/items/6440dc2a91feccee0332

	//失敗例　これでは実行すると全てCになる
	// var items = [
	// 	{'id': '#link-a', 'text': 'A'},
	// 	{'id': '#link-b', 'text': 'B'},
	// 	{'id': '#link-c', 'text': 'C'}
	// ];
	// for (var i=0; i<items.length; i++) {
	// 	var item = items[i];
	// 	$(item.id).on('click', function(e) {
	// 		e.preventDefault();
	// 		alert(item.text);
	// 	});
	// }

	var items = [
		{'id': '#link-a', 'text': 'A'},
		{'id': '#link-b', 'text': 'B'},
		{'id': '#link-c', 'text': 'C'}
	];

	var fn = function(item) {
		return function(e) {
			e.preventDefault();
			alert(item.text);
		};
	};
	for (var i = 0; i < items.length; i++) {
		var item = items[i];
		$(item.id).on('click', fn(item));
	}

});