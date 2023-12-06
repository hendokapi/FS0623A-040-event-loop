document
	.querySelector('#clickme')
	.addEventListener('click', () =>
		console.log('hai cliccato il bottone', Date.now())
	)

document.querySelector('#block').addEventListener('click', () => {
	let sum
	for (let i = 0; i < 10000000000; i++) {
		sum = sum + i
	}
	console.log('ciclo finito', Date.now())
})
