const validation = () => {
	const form = document.querySelector('[name="form-callback"]');
	const inputs = form.querySelectorAll('.form-group > input');

	inputs.forEach(input => {
		input.addEventListener('blur', (e) => {
			e.preventDefault();
			if (e.target.name === 'fio') {
				const changeName = /[^а-яА-ЯёЁ]/g;
				e.target.value = e.target.value.replace(changeName, "");
				e.target.value = e.target.value.replace(/(\s|^)[а-яА-Я]/g, (str) => {
					return str.toUpperCase()
				})
			}
			if (e.target.name === 'tel') {
				const changeTel = /[^0-9\+]/g;
				e.target.value = e.target.value.replace(changeTel, "");
			}
		})
	})
}
export default validation