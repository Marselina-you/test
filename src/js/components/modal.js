const btns = document.querySelectorAll('.help-button');
const modalOverlay = document.querySelector('.modal-help-overlay ');
const modals = document.querySelectorAll('.modal-help');

btns.forEach((el) => {
	el.addEventListener('click', (e) => {
		let path = e.currentTarget.getAttribute('data-path');

		modals.forEach((el) => {
			el.classList.remove('modal-help--visible');
		});

		document.querySelector(`[data-target="${path}"]`).classList.add('modal-help--visible');
		modalOverlay.classList.add('modal-help-overlay--visible');
	});
});

modalOverlay.addEventListener('click', (e) => {


	if (e.target == modalOverlay) {
    console.log(modalOverlay)
		modalOverlay.classList.remove('modal-help-overlay--visible');
		modals.forEach((el) => {
			el.classList.remove('modal-help--visible');
		});
	}
});
