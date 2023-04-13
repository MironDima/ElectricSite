const arrowUp = () => {
	const arrowUp = document.querySelector('.up')
	
	const hiddenUp = () => {
		arrowUp.style.display = 'none'
	}
	hiddenUp()
	const showUp = () => {
		arrowUp.style.display = 'block'
	}
	document.addEventListener('scroll', () => {
		let scrollY = window.scrollY
		console.log(scrollY);
		if (scrollY > 450) {
			showUp()
		}
		else if (scrollY < 450) {
			hiddenUp()
		}
	})
	arrowUp.addEventListener('click', () => {
		window.scrollTo({
			top: 0,
			left: 0,
			behavior: 'smooth'
		  })
	})
}

export default arrowUp