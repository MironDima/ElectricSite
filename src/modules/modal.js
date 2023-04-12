import { animate } from "./helpers"
const modal = () => {
	const header = document.querySelector('.header')
	const modalOverlay = document.querySelector('.modal-overlay')
	const modalCallback = document.querySelector('.modal-callback')
	const width = document.documentElement.clientWidth
	const sliderCarusel = document.querySelector('.services-elements')
	console.log(sliderCarusel);

	// const sliderCaruselImg = document.querySelectorAll('.services-section .element .img-wrapper')
	// console.log(sliderCaruselImg);

	header.addEventListener('click', (e) => {
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

	// sliderCarusel.addEventListener('click', (e) => {
	// 	if(!e.target.matches('.img-wrapper::before')){
	// 		console.log('yes');
	// 	}
	// })

	// sliderCaruselImg.forEach(slidesImg => {
	// 	slidesImg.addEventListener('click', (e) => {
	// 		console.log(e.target);
	// 	})
	// })


	modalOverlay.addEventListener('click', (e) => {
		if (!e.target.closest('.modal-callback') || e.target.closest('.modal-close')) {
			modalOverlay.style.display = 'none'
		}
	})
}
export default modal
