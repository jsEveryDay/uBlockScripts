//Dont Forget to minify for the ultimate performance.
//pass any arg for testing purposes.
argTest.js application/javascript
(function() {
	document.addEventListener('DOMContentLoaded', function() {
		var arg = '{{1}}';
	    copyText(arg);
	    alert(arg);
	});
})();
//Many webites, using blow wordpress bullshit follow this pattern, page/1/ 2/ 3/ etc. Why not use the arrow keys, life is short.
arrowNextPage.js application/javascript
(function() {
	const isNumeric = n => !isNaN(parseFloat(n)) && isFinite(n);
	const nextPage = gonext => {
		const fullURL = document.location.href;
		let url = fullURL.split('/');
		let currpage = parseFloat(url[url.length - 2]);
		if (isNumeric(currpage)) {
			gonext ? ++currpage : --currpage;
			url.splice(-2, 1, currpage.toString());
			location.href = url.join('/');
		} else {
			location.href = fullURL + 'page/2/';
		};
	};
	window.onkeydown = function(e) {
		switch (e.key) {
			case 'ArrowRight':
				nextPage(true);
				break;
			case 'ArrowLeft':
				nextPage(false);
				break
			default:
				return true;
		}
	};
})();
//Website Specific, you dont need this
arrowMoveFast.js application/javascript
const myGame = document.getElementsByName('f_game')[0].contentDocument;
myGame.body.onkeydown = function(e) {
	e.preventDefault();
	const game = myGame.querySelector('body > div');
	switch (e.key) {
		case 'ArrowUp':
			window.scrollTo({ top: 0 });
			game.scrollTo({ top: 0 });
			break;
		case 'ArrowDown':
			window.scrollTo({ top: document.body.scrollHeight });
			game.scrollTo({ top: game.scrollHeight });
			break;
		case 'ArrowLeft':
			window.scrollTo({ left: 0 });
			game.scrollTo({ left: 0 });
			break;
		case 'ArrowRight':
			window.scrollTo({ left: document.body.scrollWidth });
			game.scrollTo({ left: game.scrollWidth });
			break;
	}
};
