function TimerBtn() {
  this.initialize();
}

TimerBtn.prototype = {
  initialize: function() {
    this.flag = false;
    //初期値としてelapsedTimeに0を入れておかないと、
    // startTimeにtimerが入らずエラーを返してしまう
    this.elapsedTime = 0;
    this.startBtn = document.getElementById('s-js-start');
    this.stopBtn = document.getElementById('s-js-stop');
    this.resetBtn = document.getElementById('s-js-reset');
    this.result = document.getElementById('s-js-timerTxt');
    this.bindStart();
    this.bindStop();
    this.bindReset();
  },
  bindStart: function() {
    var _this = this;
    this.startBtn.addEventListener('click', function() {
      //もしtrueだったらreturnしてボタンを押させない
      if (_this.flag) return;
      //_this.flagがfalseで入ってくるので、trueを代入する。
      //if文でtrueのときにreturnしてボタン操作無効にする。
      _this.flag = true;
      _this.startTime = Date.now();
      _this.bindUpDate();
      _this.bindSetState(false, true, false)
    });
  },
  bindStop: function() {
    var _this = this;
    this.stopBtn.addEventListener('click', function() {
      //もしfalseだったらreturnしてボタンを押させない。
      if (!_this.flag) return;
      //_this.flagがtrueで入ってくるので、falseを代入する。
      //if文でfalseのときにreturnしてボタン操作無効にする。
      _this.flag = false;
      // 今の秒数 - スタートした時の秒数をelapsedTimeに上乗せ代入
      _this.elapsedTime += Date.now() - _this.startTime;
      //setTimeout停止
      clearTimeout(_this.timerId);
      _this.bindSetState(true, false, true)
    });
  },
  bindReset: function() {
    var _this = this;
    this.resetBtn.addEventListener('click', function() {
      // タイマーが走っている(true)時はボタン操作無効にする
      if (_this.flag) return;
      _this.result.innerHTML = '0.00';
      _this.elapsedTime = 0;
      _this.bindSetState(true, false, false)
    });

  },
  bindUpDate: function() {
    var _this = this;
    //setTimeoutで秒数を動かしている。
    this.timerId = setTimeout(function() {
      //今の秒数 - スタートした秒数 + 上乗せ秒数
      //Date.now()いらないかもしれん
      var timer = Date.now() - _this.startTime + _this.elapsedTime;
      _this.result.textContent = (timer / 1000).toFixed(2);
      _this.bindUpDate();
    });
  },
  bindSetState: function(start, stop, reset) {
    (start) ? this.startBtn.classList.remove('is-disable') : this.startBtn.classList.add('is-disable');
    (stop) ? this.stopBtn.classList.remove('is-disable') : this.stopBtn.classList.add('is-disable');
    (reset) ? this.resetBtn.classList.remove('is-disable') : this.resetBtn.classList.add('is-disable');

    //わかりやすくif文をのこす
    // if (start) {
    //  this.startBtn.classList.remove('is-disable');
    // } else {
    //  this.startBtn.classList.add('is-disable');
    // }
    // if (stop) {
    //  this.stopBtn.classList.remove('is-disable');
    // } else {
    //  this.stopBtn.classList.add('is-disable');
    // }
    // if (reset) {
    //  this.resetBtn.classList.remove('is-disable');
    // } else {
    //  this.resetBtn.classList.add('is-disable');
    // }
  }
};

new TimerBtn();

// 旧式: javascript
// (function() {
//  //STARTボタンを押した時にtimerを起動させる
//  //押した時の時間(startTime)、タイマーの変数(timerId)を作る
//  //押した時の時刻を取得
//  //関数を作る。タイマー変数(timerId)にこれらを代入する → 関数を使って回す
//  //time変数を用意て、今の時間からstartimeを引く
//  //それを表示させる。timeを1000で割って小数点二桁まで。
//
//  //STARTした秒数をストップさせる関数を実装
//
//  //止まった時からの秒数から再開させる。
//  //elapsedTime変数
//  //足し上げていく
//
//  //リセットで0の表示
//  //STARTした時の0からのSTARTにさせる
//
//  //ボタンの状態を管理
//  //function setButtonState関数を作る
//  //trueの時はis-active falseの時はis-in-active
//
//  //ボタンの起動を管理する関数をつくる
//
//  var startBtn = document.getElementById('s-js-start');
//  var stopBtn = document.getElementById('s-js-stop');
//  var resetBtn = document.getElementById('s-js-reset');
//  var timerTxt = document.getElementById('s-js-timerTxt');
//  var startTime;
//  var timerId;
//  var elapsedTime = 0;
//  var isRunning = false;
//
//  function setBtnState(start, stop, reset) {
//    startBtn.className = start ? 'c-btn c-btn__timerBtn is-active' : 'c-btn c-btn__timerBtn is-in-active';
//    stopBtn.className = stop ? 'c-btn c-btn__timerBtn is-active' : 'c-btn c-btn__timerBtn is-in-active';
//    resetBtn.className = reset ? 'c-btn c-btn__timerBtn is-active' : 'c-btn c-btn__timerBtn is-in-active';
//  }
//
//  setBtnState(true, false, false);
//
//  startBtn.addEventListener('click', function() {
//    if(isRunning) return; //もしタイマーが走っていたら二重起動したくないので、ここで処理を止める。returnを指定するとこれ以降の処理が実行されない。
//    isRunning = true;
//    startTime = Date.now();
//    updateTimerTxt();
//    setBtnState(false, true, false);
//  });
//
//  stopBtn.addEventListener('click', function() {
//    if(!isRunning) return; //タイマーが止まっている時に何もして欲しくない。
//    isRunning = false;
//    elapsedTime += Date.now() - startTime;
//    clearTimeout(timerId);
//    setBtnState(true, false, true);
//  });
//
//  resetBtn.addEventListener('click', function() {
//    if(isRunning) return; //タイマーが起動中にクリックしても何もしてほしくないので、returnを返す。
//    timerTxt.innerHTML = '0:00';
//    elapsedTime = 0;
//    setBtnState(true, false, false);
//  });
//
//  function updateTimerTxt() {
//    timerId = setTimeout(function() {
//      var time = Date.now() - startTime + elapsedTime;
//      timerTxt.innerHTML = (time / 1000).toFixed(2);
//      updateTimerTxt();
//    });
//  }
// })();