/*
function outer() {
	var isClicked = false;

	function inner() {
		console.log(isClicked);
		if (isClicked) {
			alert('すでにクリック済みです。');
		}
		isClicked = true;
		console.log(isClicked);
	}
	return inner;
}

var f = outer();

$('#frm').submit(function(){
	f();
	return false;
});
*/

$(function(){

    var isClicked = false;

    $('#frm').submit(function(){
    	console.log(isClicked);
        if (isClicked) {
            alert('すでにクリック済みです。');
        }
        isClicked = true;
        return false;
    });
});
z/*
function Point(x, y) {
	this.x = x;
	this.y = y;
}

Point.prototype.distance = function(point) {
	return Math.sqrt(this.x * this.x + this.y * this.y);
};


var point1 = new Point(3, 4);
console.log(point1.length());
console.log(point1);


/*クロージャー
window.onload=function(){
	var table=document.getElementById('js5-table');
	var trs = table.getElementsByTagName('tr');
	for (var i = 0, len=trs.length;i < len; i++){
		var tr = trs[i];
		(function(_tr){
			_tr.onmouseover = function(){
				_tr.className = 'hover';
			};
			_tr.onmouseout = function(){
				_tr.className = '';
			};
		})(tr);
	}
};
*/
/*
//失敗例
window.onload = function(){
  var table = document.getElementById('js5-table');
  var trs = table.getElementsByTagName('tr');
  for (var i = 0, len=trs.length; i<len; i++){
    var tr = trs[i];
    tr.onmouseover = function() {
      tr.className = 'hover';
    };
    tr.onmouseout = function() {
      tr.className = '';
    };
  }
};
*/

/*
//メソッド呼び出しパターン
var myObject = {
  value: 1,
  show: function() {
  	var that = this;
    console.log(that.value);

    function show() {
    	console.log(that.value);
    }
    show();
  }
};
myObject.show(); // 10
*/
/*
//コンストラクト呼び出しパターン
function MyObject(value) {
	this.value = value;
	this.increment = function() {
		this.value++;
	};
}

var myObject = new MyObject(0);
console.log(myObject.value);

myObject.increment();
console.log(myObject.value);
*/
/*
//クロージャ
function a() {
	var value = 0;

	function b() {
		return ++value;
	}
	return b;
}
var testA = a();
console.log(testA());
console.log(testA());

var testB = a();
console.log(testB());
console.log(testA());
*/