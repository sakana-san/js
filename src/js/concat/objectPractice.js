//dafault
/*
var omikuji;
var a = ['大吉','吉','中吉','凶'];

getOmikuji();

console.log(omikuji);
function getOmikuji() {
	var result = Math.floor(Math.random() * a.length);
	omikuji = result;
}
*/


//returnを返す
/*
//var omikuji;
//var a = ['大吉','吉','中吉','凶'];

var omikuji = getOmikuji(['大吉','吉','中吉','凶']);

console.log(omikuji);
function getOmikuji(a) {
	var result = Math.floor(Math.random() * a.length);
	return result;
}
*/

//名前のない関数
/*
var omikujiName = ['大吉', '吉', '中吉', '凶'];
var func = function() {
	var omikujiRandom = Math.floor(Math.random() * omikujiName.length);
	return omikujiRandom;
};

var result = func();
console.log(result);

func = function(OutputName) {
	var outPut = omikujiName[OutputName];
	return outPut;
}
result = func(result);
console.log(result);
*/

/*
//1-3　関数の因数と戻り値
//var salary = 200000;
var usedMoney = Math.floor(Math.random() * 45000);
//var result;
var result = getMoney(200000);
console.log(result);
function getMoney(salary) {
	var poolMoney = salary - usedMoney;
	//変数に代入して処理ができるようになる
	//result = poolMoney;
	return poolMoney;
}

// ※ function関数の場合h先に読み込まれる
*/

/*
//2-1
//関数をメソッドとして定める
var obj = {
	x: 'さえば',
	y: 'まきむら'
};

obj.getDistance = function () {
	var cityHunter = this.x + 'と' + this.y;
	return cityHunter;
}

console.log(obj.getDistance());

var obj2 = {
	x: 'りょう',
	y: 'かおり'
};

obj2.getDistance = obj.getDistance;
console.log(obj2.getDistance());
*/

/*
//2-2
//コンストラクタからインスタンスをつくる
//コンストラクタ
function Product(title, hero) {
	//プロパティ
	this.mangaName = title;
	this.character = hero;
}

//インスタンス
var saeba = new Product('cityHunter', 'さえばりょう');
var hanma = new Product('刃牙道', '範馬勇次郎');

console.log(saeba, hanma);
*/

/*
//2-3
//コンストラクタにメッソッドを定める
//コンストラクタ
function cityHunter(title, hero) {
	this.className = 'cityHunter';
	//プロパティ
	this.mangaName = title;
	this.character = hero;
}
cityHunter.prototype.toString = 
bakidou.prototype.toString = 
function() {
	return '[object ' + this.className + ']';
};

function bakidou(title, hero) {
	this.className = 'bakidou';
	//プロパティ
	this.mangaName = title;
	this.character = hero;
}

//インスタンス
var saeba = new cityHunter('cityHunter', 'さえばりょう');
var hanma = new bakidou('刃牙道', '範馬勇次郎');

console.log(saeba.toString(), hanma.toString());
//alert(saeba);

// ※ toStringメソッドは引数をとらない
*/

/*
//2-7
//returnの機能
function includeNegative(array) {
	var count = array.length;
	for (var i=0; i<count; i++) {
		//確認のコンソール
		console.log(i,array[i]);
		if (array[i] < 0) {
			//一つでもマイナスが含まれてたらtrueを返す
			return true;
		}
	}
	//マイナスがなければfalseを返す
	return false;
}
console.log(includeNegative([0,-1,2,3,4,5]));

// ※ returnは値を返す機能の前に、functionの実行をそこで止めるという機能がある。
*/
