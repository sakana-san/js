/*
var obj = {a:'大阪代表', b:'大阪桐蔭'};
obj.baseball = function() {
	var introduce = '平成最強の強豪校、' + this.a + 'の' + this.b + 'です';
	return introduce;
};

var obj2 = {a: '和歌山代表', b: '智弁和歌山'};
obj2.baseball = obj.baseball;
*/

/*
//通常
var cast;
var cityHunter = ['さえば', 'まきむらかおり','ファルコン', '野上冴子'];
function member() {
	var list = Math.floor(Math.random() * cityHunter.length);
	cast = cityHunter[list];
}
member();
console.log(cast);
*/

/*
//引数と返り値
var testName = document.getElementById('testCity');
var cast = member(['さえば', 'まきむらかおり', '海坊主', '野上冴子']);
testName.innerHTML = cast;
function member(cityHunter) {
	var list = Math.floor(Math.random() * cityHunter.length);
	return cityHunter[list];
}

var testes = test(['大吉','中吉','小吉']);
function test(omikuji) {
	var resultTest = Math.floor(Math.random() * omikuji.length);
	testes = omikuji[resultTest];
	return testes;
}
console.log(testes);
*/

/*
//無名関数
var func = function() {
	var randomint = Math.floor(Math.random() * 6) + 1;
	return randomint;
};
var result = func();
console.log(result);

func = function(radius) {
	var circleArea = Math.pow(radius,2) * Math.PI;
	return circleArea;
};
result = func(result);
console.log(result);
func = null;
console.log(null);
*/
/*
//コンストラクタからインスタンス
//コンストラクタにする場合頭は大文字
function Product(name, version) {
	this.name = name;
	this.version = version;
}
//インスタンスを作る
var st = new Product('sublimeText', '3');
var ae = new Product('afterEffect','CC2015');
console.log(st, ae);
*/

//コンストラクタにメソッドを定める
function SublimeText(year, version) {
	this.className = 'sublimeText';
	this.year = year;
	this.version = version;
}

SublimeText.prototype.toString = 
AfterEffect.prototype.toString = 
function() {
	return '[object ' + this.className + ']';
};

function AfterEffect(year, version) {
	this.className = 'afterEffect';
	this.year = year;
	this.version = version;
}
var st = new SublimeText('2015', '3');
var ae = new AfterEffect('2015', 'CC');
console.log(st.toString(),ae.toString());
//alert(st);
















