const sendForm = (formId) => {
	const form = document.getElementById(formId);
	const statusBlock = document.createElement('div');
	statusBlock.classList.add('style')
	const startLoad = 'Идет отправка...';
	const errorLoad = 'Ошибка..';
	const successLoad = 'Отправлено!С вами свяжется наш специалист';
	const prelouder = document.createElement('div')
	prelouder.classList.add('prelouder')
	prelouder.innerHTML = `<img src = images/prelouder.gif alt = "prelouder">`

	const sendValidate = (inputs) => {
		let success = true;
		inputs.forEach(input => {
			if (input.name === "fio") {
				if (input.value.length <= 2) {
					success = false;
				}
			} else if (input.name === "tel") {
				if (input.value.length <= 9) {
					success = false;
				}
			}
		})
		return success
	}

	const sendData = (data) => {
		return fetch('https://jsonplaceholder.typicode.com/posts', {
			method: 'POST',
			body: JSON.stringify(data),
			headers: {
				"Content-type": "application/json"
			}
		}).then(res => res.json());
	}

	const submitForm = () => {
		const inputs = form.querySelectorAll('[type="text"]');
		console.log(inputs);
		const formdata = new FormData(form);
		const formBody = {}

		form.append(prelouder)
		setTimeout(() => {
			prelouder.classList.add('hide-prelouder')
		},1500)
		form.append(statusBlock);

		formdata.forEach((value, key) => {
			formBody[key] = value
		})

		if (sendValidate(inputs)) {
			sendData(formBody)
				.then(data => {
					inputs.forEach(input => {
						statusBlock.textContent = successLoad;
						statusBlock.style.color = 'green';
						input.value = ''
						setTimeout(() => {
							statusBlock.textContent = '';
						}, 3000)
					})
				})
				.catch(error => statusBlock.textContent = errorLoad);
		} else {
			statusBlock.style.color = 'red';
			statusBlock.textContent = errorLoad;
			alert('Данные не валидны!');
		}
	}

	try {
		form.addEventListener('submit', (e) => {
			e.preventDefault();
			submitForm();
		})
	} catch (error) {
		console.log(error.message);
	}

}
export default sendForm


// const services = document.querySelectorAll('#info')
		// console.log(services);

		// services.forEach(service => {
		// 	service.addEventListener('click', (e) => {
		// 		e.stopPropagation()
		// 		console.log(e.target);
		// 	})
		// })