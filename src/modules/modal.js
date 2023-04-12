import { animate } from "./helpers"
const modal = () => {
	const modalOverlay = document.querySelector('.modal-overlay')
	const modalCallback = document.querySelector('.modal-callback')
	const width = document.documentElement.clientWidth
	document.addEventListener('click', (e) => {
		if (e.target.classList.contains('fancyboxModal')) {
			if (width >= 768) {
				animate({
					duration: 1000,
					timing(timeFraction) {
						return timeFraction;
					},
					draw(progress) {
						modalCallback.style.opacity = progress
						modalCallback.style.display = 'block'
						modalOverlay.style.display = 'block'
					}
				});
			}
			else {
				modalCallback.style.display = 'block'
				modalOverlay.style.display = 'block'
			}
		}
	})
	modalOverlay.addEventListener('click', (e) => {
		if (!e.target.closest('.modal-callback') || e.target.closest('.modal-close')) {
			modalOverlay.style.display = 'none'
		}
	})
}
export default modal
