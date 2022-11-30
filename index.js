let text = document.querySelector('#text');
let char = document.querySelector('#char');
let word = document.querySelector('#word');

text.addEventListener('input', function () {
	
	let content = this.value;
	char.textContent = content.length;

	
	content.trim();
	console.log(content);

	let wordList = content.split(/\s/);

	
	let words = wordList.filter(function (element) {
		return element != "";
	});

	
	word.textContent = words.length;
});
