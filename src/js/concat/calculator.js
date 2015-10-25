



(function(){
	'use strict';
	var priceForm = document.getElementById('c-js-price');
	var numForm = document.getElementById('c-js-num');
	var btn = document.getElementById('c-js-btn');
	var result = document.getElementById('c-js-result');

	priceForm.addEventListener('click', function() {
		this.select();
	});
	numForm.addEventListener('click', function() {
		this.select();
	});

	btn.addEventListener('click', function() {
		var price = priceForm.value;
		var num = numForm.value;
		var x1, x2, y1, y2;
		var unit = 100;

		if(price.match(/^[1-9][0-9]*$/) && num.match(/^[1-9][0-9]*$/)) {
			//result.innerHTML = 'OK!';
			//priceをnumで割って余りが0
			if(price % num === 0) {
				result.innerHTML = '一人' +  (price / num) + '円ちょうどです！';
			} else {
				//result.innerHTML = 'something';
				x1 = Math.floor(price / num / unit) * unit;
				y1 = price - (x1 * num);
				x2 = Math.ceil(price / num / unit) * unit;
				y2 = Math.abs(price - (x2 * num));
				if (x1 == 0) {
					result.innerHTML = '一人' + x2 + '円だと' + y2 + '円余ります。';
				} else {
					result.innerHTML = '一人' + x1 + '円だと' + y1 + '円足りません。 <br>' + '一人' + x2 + '円だと' + y2 + '円余ります。';
				}
			}
		} else {
			result.innerHTML = '入力された値に誤りがあります。';
		}
	});
})();

//priceForm.value;
//.valueはinputのvalueにアクセスするという定義

//Math.floor
//小数点切り捨て

//Math.ceil
//小数点切り上げ

//正規表現
// . 任意の一文字
// ^ 行頭　否定の場合は[^abc]
// $ 行末

// /^ $/

