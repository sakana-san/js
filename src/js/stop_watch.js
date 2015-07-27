(function() {
	'user strict';
	var startTime;
	var timerId;
	var elapsedTime = 0;
	var isRunning = false; //タイマーの状態を保持 (初期状態:false)
	var startBtn = document.getElementById('s-js-start');
	var stopBtn = document.getElementById('s-js-stop');
	var resetBtn = document.getElementById('s-js-reset');
	var timerTxt = document.getElementById('s-js-timerTxt');

	function setBtnState(start, stop, reset)  {
		startBtn.className = start ? 's-btn is-active' : 's-btn is-in-active';
		stopBtn.className = stop ? 's-btn is-active' : 's-btn is-in-active';
		resetBtn.className = reset ? 's-btn is-active' : 's-btn is-in-active';
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
		clearTimeout(timerId);
		elapsedTime += Date.now() - startTime;
		setBtnState(true, false, true);
	});

	resetBtn.addEventListener('click', function() {
		if(isRunning) return;//タイマーが走っている時に何もして欲しくない。
		timerTxt.innerHTML = '0.00';
		elapsedTime = 0;
		setBtnState(true, false, false);
	});

	function updateTimerTxt() {
		timerId = setTimeout(function() {
			var t = Date.now() - startTime + elapsedTime;
			timerTxt.innerHTML = (t / 1000).toFixed(2);
			updateTimerTxt();
		}, 10);
	}
})();
/*
結合代入演算子
var a = 0;
a += 10 - 2;
console.log(a); 
*/

/*
(function(){
	'use strict';
	var startTime;
	var timerId;
	var elapsedTime = 0;
	var isRunning = false;//タイマーの状態を保持 (初期状態:false)


	var startBtn = document.getElementById('s-js-start');
	var stopBtn = document.getElementById('s-js-stop');
	var resetBtn = document.getElementById('s-js-reset');
	var timerTxt = document.getElementById('s-js-timerTxt');

	function setBtnState(start,stop,reset) {
		startBtn.className = start ? 's-btn is-active' : 's-btn is-in-active';
		stopBtn.className = stop ? 's-btn is-active' : 's-btn is-in-active';
		resetBtn.className = reset ? 's-btn is-active' : 's-btn is-in-active';
	}

	setBtnState(true, false, false);


	startBtn.addEventListener('click', function() {
		if(isRunning) return; //もしタイマーが走っていたら二重起動したくないので、ここで処理を止める。returnを指定するとこれ以降の処理が実行されない。
		isRunning = true;
		startTime = Date.now();
		updateTimerText();
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
		if(isRunning) return;
		timerTxt.innerHTML = '0.00';
		elapsedTime = 0;
		setBtnState(true, false, false);
	});

	function updateTimerText(){
		timerId = setTimeout(function(){
			var t = Date.now() - startTime + elapsedTime;
			timerTxt.innerHTML = (t / 1000).toFixed(2);
			updateTimerText();
		}, 10);
	}
})();
*/