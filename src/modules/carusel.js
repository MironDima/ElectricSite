import Swiper, { Navigation } from 'swiper';
const carusel = () => {
	

	const swiperCaresel = new Swiper('.services-elements', {
		modules: [Navigation],
		loop: true,
		navigation: {
			nextEl: '.slider-button-next',
			prevEl: '.slider-button-prev',
		},
		slidesPerView: 1,
		spaceBetween: 4,
		breakpoints: {
			320: {
				slidesPerView: 1,
				spaceBetween: 5,
			},
			576: {
				slidesPerView: 2,
				spaceBetween: 8,
			},
			991: {
				slidesPerView: 3,
				spaceBetween: 10,
			}
		}
	});

}

export default carusel

