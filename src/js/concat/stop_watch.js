(function() {
	//STARTボタンを押した時にtimerを起動させる
	//押した時の時間(startTime)、タイマーの変数(timerId)を作る
	//押した時の時刻を取得
	//関数を作る。タイマー変数(timerId)にこれらを代入する → 関数を使って回す
	//time変数を用意て、今の時間からstartimeを引く
	//それを表示させる。timeを1000で割って小数点二桁まで。

	//STARTした秒数をストップさせる関数を実装

	//止まった時からの秒数から再開させる。
	//elapsedTime変数
	//足し上げていく

	//リセットで0の表示
	//STARTした時の0からのSTARTにさせる

	//ボタンの状態を管理
	//function setButtonState関数を作る
	//trueの時はis-active falseの時はis-in-active

	//ボタンの起動を管理する関数をつくる

	var startBtn = document.getElementById('s-js-start');
	var stopBtn = document.getElementById('s-js-stop');
	var resetBtn = document.getElementById('s-js-reset');
	var timerTxt = document.getElementById('s-js-timerTxt');
	var startTime;
	var timerId;
	var elapsedTime = 0;
	var isRunning = false;

	function setBtnState(start, stop, reset) {
		startBtn.className = start ? 'c-btn c-btn__timerBtn is-active' : 'c-btn c-btn__timerBtn is-in-active';
		stopBtn.className = stop ? 'c-btn c-btn__timerBtn is-active' : 'c-btn c-btn__timerBtn is-in-active';
		resetBtn.className = reset ? 'c-btn c-btn__timerBtn is-active' : 'c-btn c-btn__timerBtn is-in-active';
	}

	setBtnState(true, false, false);

	startBtn.addEventListener('click', function() {
		if(isRunning) return; //もしタイマーが走っていたら二重起動したくないので、ここで処理を止める。returnを指定するとこれ以降の処理が実行されない。
		isRunning = true;
		startTime = Date.now();
		updateTimerTxt();
		setBtnState(false, true, false);
	});

	stopBtn.addEventListener('click', function() {
		if(!isRunning) return; //タイマーが止まっている時に何もして欲しくない。
		isRunning = false;
		elapsedTime += Date.now() - startTime;
		clearTimeout(timerId);
		setBtnState(true, false, true);
	});

	resetBtn.addEventListener('click', function() {
		if(isRunning) return; //タイマーが起動中にクリックしても何もしてほしくないので、returnを返す。
		timerTxt.innerHTML = '0:00';
		elapsedTime = 0;
		setBtnState(true, false, false);
	});

	function updateTimerTxt() {
		timerId = setTimeout(function() {
			var time = Date.now() - startTime + elapsedTime;
			timerTxt.innerHTML = (time / 1000).toFixed(2);
			updateTimerTxt();
		});
	}
})();