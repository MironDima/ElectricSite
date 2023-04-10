const modal = () => {
	const header = document.querySelector('.header')
	const modalOverlay = document.querySelector('.modal-overlay')
	const modalCallback = document.querySelector('.modal-callback')
	const modalClose = document.querySelector('.modal-close')

	header.addEventListener('click', (e) => {
		if (e.target.classList.contains('fancyboxModal')) {
			modalCallback.style.display = 'block'
			modalOverlay.style.display = 'block'
		}
	})

	modalOverlay.addEventListener('click', (e) => {
		if (!e.target.closest('.modal-callback') || e.target.closest('.modal-close')) {
			modalOverlay.style.display = 'none'
		}
	})
}
export default modal
