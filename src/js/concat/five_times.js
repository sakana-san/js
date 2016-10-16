function FiveTimes() {
	this.initialize();
}

FiveTimes.prototype = {
	initialize: function() {
		this.flag = false;
		this.startTime = 0;
		this.resultText = document.getElementById('f-js-result');
		this.countDownText = document.getElementById('f-js-countDown');
		this.btn = document.getElementById('f-js-btn');
		this.bindClick();
	},
	bindClick: function() {
		var _this = this;
		this.btn.addEventListener('click', function() {
			if (!_this.flag) {
				_this.flag = true;
				_this.bindStart();


			} else {
				_this.flag = false;
				_this.bindStop();
			}

		});
	},
	bindStart: function() {
		this.startTime = Date.now();
		this.bindUpdate();
		this.btn.innerHTML = 'STOP';
	},
	bindStop: function() {
		var diff = (Date.now() - this.startTime) / 1000 - 5;
		clearTimeout(this.timerId);
		this.resultText.innerHTML = 'STOP at 00:05!';
		this.btn.innerHTML = 'START';
		if (diff <= 0.1 && diff >= -0.1) {
			this.resultText.innerHTML = 'perfectです';
		} else if (diff > 0.1) {
			this.resultText.innerHTML = diff.toFixed(2) + '秒遅いです！';
		} else {
			this.resultText.innerHTML = Math.abs(diff).toFixed(2) + '秒速いです！';
		}
	},
	bindUpdate: function() {
		var _this = this;
		this.timerId = setTimeout(function() {
			//Date.now() - _this.startTimeで1000桁になる
			_this.timer = Date.now() - _this.startTime;
			//ここで秒数に変換する
			_this.countDownText.innerHTML = (_this.timer / 1000).toFixed(2);
			_this.bindUpdate();
		});
	}
};

new FiveTimes();


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

//Date.nowを秒数にするには、Date.now() / 1000にする

