//関数無し
// var omikuji = ['大吉','吉','中吉','凶'];
// var resultName = document.querySelector('.test');
// var result = Math.floor(Math.random() * omikuji.length);
// var results = omikuji[result];

// resultName.innerHTML = results;

// //引数を渡す
// var omikuji = ['大吉','吉','中吉','凶'];
// var resultName = document.querySelector('.test');
// var answer;

// getOmikuji('今日の運勢は', omikuji);

// function getOmikuji(str1,str2) {
// 	var results = Math.floor(Math.random() * str2.length);
// 	answer = str1 + str2[results] + 'です。';
// 	resultName.innerHTML = answer;
// }

// //returnを返す
// var omikuji = ['大吉','吉','中吉','凶'];
// var resultName = document.querySelector('.test');
// var answer;
// resultName.innerHTML = getOmikuji('今日の運勢は', omikuji);
// function getOmikuji(str1,str2) {
// 	var results = Math.floor(Math.random() * str2.length);
// 	answer = str1 + str2[results] + 'です。';
// 	return answer;
// }

// //名前のない関数
// var omikujiName = ['大吉', '吉', '中吉', '凶'];
// var resultName = document.querySelector('.test');

// var getOmikuji = function() {
// 	var omikujiRandom = Math.floor(Math.random() * omikujiName.length);
// 	return omikujiRandom;
// };

// var result = getOmikuji();
// console.log(result);
// getOmikuji = function(key) {
// 	var outPut = omikujiName[key];
// 	return outPut;
// };
// result = getOmikuji(result);
// console.log(result);

// var omikujiName = ['大吉', '吉', '中吉', '凶'];
// var func = function() {
// 	var omikujiRandom = Math.floor(Math.random() * omikujiName.length);
// 	return omikujiRandom;
// };

// var result = func();
// console.log(result);

// func = function(OutputName) {
// 	var outPut = omikujiName[OutputName];
// 	return outPut;
// }
// result = func(result);
// console.log(result);


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

/*
//3-1
//ローカル変数とグローバル変数
var count = 0;
function countUp() {
	var count = 10;
	count++;
	this.count++; //グローバルな変数を参照
	console.log(count); //11
}

countUp();
console.log(count); //0、グローバル参照時は1になる
*/

//3-2
// プロトタイプオブジェクトを変数に収める
// function Point(title, magazine) {
// 	 this.title = '少年ジャンプ';
// 	 this.magazine = 'シティーハンター';
// }
// var p = Point.prototype;
// p.getDistance = function() {
// 	var saebaRyo = '雑誌' + this.title + 'の人気作品' + this.magazine;
// 	return saebaRyo;
// };

// p.add = function(title, magazine) {
// 	this.title += 'とある雑誌';
// 	this.magazine += 'と見せかけて少年マガジン';
// };

// // p.scale = function(scale) {
// // 	this.title *= scale;  
// // 	this.magazine *= scale;  
// // };

// var point = new Point('雑誌名', '漫画名');
// point.add('出身地', '何歳なの');
// // point.scale('どこで連載している');
// console.log(point);
// console.log(point.getDistance());
// var Point;
// (function() {
// 	function Point(x, y) {
// 		this.x = x;
// 		this.y = y;
// 	}

// 	var p = Point.prototype;
// 	p.getDistance = function() {
// 		var square = Math.pow(this.x, 2) + Math.pow(this.y, 2);
// 		return Math.sqrt(square);
// 	};
// 	p.add = function(x, y) {
// 		this.x += x;
// 		this.y += y;
// 	};
// 	p.scale = function(scale) {
// 		this.x *= scale;
// 		this.y *= scale;
// 	};
// 	this.Point = Point;
// })();


// var point = new Point(2, 5);
// point.add(3, -2);
// point.scale(1);
// console.log(point);
// console.log(point.getDistance());
// console.log(p);

var test = 'かきくけこ';
(function() {
	var test = 'あいうえお';
	console.log(this.test);
	this.test = test;

	console.log(test);
})();

console.log(test);






