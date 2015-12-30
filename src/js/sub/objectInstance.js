var socialMedia = {
	facebook: 'https://www.facebook.com/',
	twitter: 'https://twitter.com/',
	youtube: 'https://www.youtube.com/'
};
function init() {
	var icons = document.querySelector('.p-socialMedia');
	var socialMediaList = '<ul class="p-socialMediaList">';
	for(key in socialMedia) {
		var url = socialMedia[key];
		var element = createA(url,key);
		sns();
	}
	socialMediaList += '</ul>';
	icons.innerHTML = socialMediaList;

	function sns() {
		var cN = ['c-iconFacebook', 'c-iconTwitter', 'c-iconYoutube'];
		if (key === 'facebook') {
			socialMediaList += '<li class="' + cN[0] + '">' + element + '</li>';
		} else if(key === 'twitter') {
			socialMediaList += '<li class="' + cN[1] + '">' + element + '</li>';
		} else if(key === 'youtube') {
			socialMediaList += '<li class="' + cN[2] + '">' + element + '</li>';
		}
	}
	function createA(url,child) {
		var output = '<a href="' + url + '">' + child + '</a>';
		return output;
	}
}

window.onload = init;

//ulで囲む
//for inでループさせる
//aタグつくる
//liつくる
//liにクラス名をif文でつける


/*
function createA(url,key) {
	var cN = ['c-iconFacebook', 'c-iconTwitter', 'c-iconYoutube'];
	for (var i=0; i<cN.length; i++) {
		var output = '<li class="' + cN[i] + '"><a href="' + url + '">'+ key + '</a></li>';
		console.log(output);
	}
}

function createA(url,child) {
		var output = '<a href="' + url + '">' + child + '</a>';

		return output;
	}
var cN = ['c-iconFacebook', 'c-iconTwitter', 'c-iconYoutube'];
var socialMedia = {
	facebook: 'https//www.facebook.com/',
	twitter: 'https//twitter.com/',
	youtube: 'https//www.youtube.com/'
};
*/