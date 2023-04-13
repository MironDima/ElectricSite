const accordion = () => {
const accordionBlock = document.querySelector('.accordeon');
const accordionElem = accordionBlock.querySelectorAll('.element');
const accordionText = accordionBlock.querySelectorAll('.element-content');

accordionBlock.addEventListener('click',(e) => {
	if(e.target.closest('.element')){
		const newAccordion = e.target.closest('.element');
		
		accordionElem.forEach((accordion,index)=> {
			if(accordion === newAccordion) {
				accordion.classList.add('active');
				accordionText[index].style.display = 'block'
			}
			else{
				accordion.classList.remove('active');
				accordionText[index].style.display = 'none'
			}
		})
	}
})
}
export default accordion