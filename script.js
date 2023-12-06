document
	.querySelector('#clickme')
	.addEventListener('click', () =>
		console.log('hai cliccato il bottone', Date.now())
	)

document.querySelector('#block').addEventListener('click', () => {
	blockEventLoop(10)
})

function blockEventLoop(seconds) {
	const startTimestamp = Date.now()
	const endTimestamp = Date.now() + seconds * 1000
	while (endTimestamp - Date.now() > 0) {}
	const blockingTime = (Date.now() - startTimestamp) / 1000
	console.log(`Hai bloccato l'event loop per ${blockingTime} secondi`)
}
