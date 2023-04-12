import Swiper, { Pagination, Autoplay } from 'swiper';
const swiper = () => {
	const swiper = new Swiper('.top-slider', {
		modules: [Pagination, Autoplay],
		loop: true,
		pagination: {
			el: ".swiper-pagination",
			clickable: true,
		},
		autoplay: {
			delay: 3000,
			disableOnInteraction: false,
		},
	});
}

export default swiper