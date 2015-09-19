(function() {
	'use strict';
	var btn = document.getElementById('f-js-btn');
	var result = document.getElementById('f-js-result');
	var isStarted = false;
	var startTime;
	var diff;
	var msg = 'STOP at 00:05!';

	btn.addEventListener('click',function() {
		if(!isStarted) {
			isStarted = true;
			this.innerHTML  ='STOP';
			startTime = Date.now();
			result.innerHTML = msg;
		} else {
			isStarted = false;
			this.innerHTML = 'START';
			diff = (Date.now() - startTime) / 1000 -5;
			if(diff >= -0.1 && diff <= 0.1 ) {
				result.innerHTML = 'Perfect!';
			} else if(diff > 0) {
				result.innerHTML = 'あなたは' + diff.toFixed(2) + '遅いです。';
			} else {
				result.innerHTML = 'あなたは' + Math.abs(diff).toFixed(2) + '速いです。';
			}
		}
	});
})();

//★ Date.now();
//現在の日付と時刻を取得します。
//1970年1月1日00時00分00秒から現在までの経過ミリ秒を返します。

//★ toFixed();
//toFixedは、小数点以下の桁数を指定して変換した値を返します。

//例
//toFixed(0) ---> 1235
//toFixed(1) ---> 1234.5
//toFixed(2) ---> 12345.54

//★Math.abs();
//引数として与えた数の絶対値を返します

//数ではない文字列、もしくは、undefined/空である変数を渡した場合は、NaNを返します。
//nullを渡した場合は、0を返します。
//例
//Math.abs('-1');     // 1
//Math.abs(-2);       // 2
//Math.abs(null);     // 0
//Math.abs("string"); // NaN
//Math.abs();         // NaN
