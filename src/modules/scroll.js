const scroll = () => {
	const linkMenu = document.querySelectorAll('.top-menu > ul > li > a')
	console.log(linkMenu);
	linkMenu.forEach(link => {
		console.log(link);
		link.addEventListener('click', (e) => {
			e.preventDefault()
			const hrefLink = link.getAttribute('href').substring(1)
			document.getElementById(hrefLink).scrollIntoView({
				behavior: 'smooth',
				block: 'start'

			})
		})
	})

}


export default scroll