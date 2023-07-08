console.log('a');
new Promise((resolve, reject) => {
	console.log('b');
	setTimeout(() => {
		console.log('c');
		resolve();
	}, 0);
})
  .then(() => console.log('d'));

console.log('e');
setTimeout(() => console.log('f'), 0);
console.log('g');
