const accordion = () => {
	const accordionBlock = document.querySelector('.accordeon');
	const accordionElem = accordionBlock.querySelectorAll('.element');
	const accordionText = accordionBlock.querySelectorAll('.element-content');

	accordionElem.forEach((accrodItem, accordIndex) => {
		accrodItem.addEventListener('click', () => {
			if (accrodItem.classList.contains('active')) {
				accrodItem.classList.remove('active')
				accordionText[accordIndex].style.display = 'none'
			}
			else {
				accordionElem.forEach((accordion, index) => {
					console.log(accordion);
					if (accordion.classList.contains('active')) {
						accordion.classList.remove('active')
						accordionText[index].style.display = 'none'
					}
				})
				accrodItem.classList.add('active')
				accordionText[accordIndex].style.display = 'block'
			}
		})
	})
}
export default accordion