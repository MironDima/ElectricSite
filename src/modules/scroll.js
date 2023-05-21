const scroll = () => {
	const linkMenu = document.querySelectorAll('.top-menu > ul > li > a')
	linkMenu.forEach(link => {
		link.addEventListener('click', (e) => {
			e.preventDefault()
			const hrefLink = link.getAttribute('href')
			const fixedHeigthBlock = 100;
			const top = document.querySelector('' + hrefLink).offsetTop - fixedHeigthBlock;
			window.scrollTo({
				top,
				left: 0,
				behavior: 'smooth',
			})
		})
	})
}
export default scroll