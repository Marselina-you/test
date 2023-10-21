const btnHelp = document.querySelector('.help-button');
const help = document.querySelector('.modal-help');

const btns = document.querySelectorAll('.auto-button');
const modalOverlay = document.querySelector('.modal-auto-overlay ');
const modals = document.querySelectorAll('.modal-auto');
const close = document.querySelector('.modal-auto__close-img');
console.log(close)

btnHelp.addEventListener('click', () => {
  help.classList.toggle('modal-help--visible');
});

help.addEventListener('click', (e) => {
  console.log(e.target)
  //if (!e.target.classList.contains('modal-help') && e.target.closest('.modal-help') && !e.target.classList.contains('help-button')) {
   help.classList.remove('modal-help--visible');
  //}
});

btns.forEach((el) => {
	el.addEventListener('click', (e) => {
		let path = e.currentTarget.getAttribute('data-path');

		modals.forEach((el) => {
			el.classList.remove('modal-auto--visible');
		});

		document.querySelector(`[data-target="${path}"]`).classList.add('modal-auto--visible');
		modalOverlay.classList.add('modal-auto-overlay--visible');
	});
});

modalOverlay.addEventListener('click', (e) => {


	if (e.target == close  || e.target == modalOverlay) {

		modalOverlay.classList.remove('modal-auto-overlay--visible');
		modals.forEach((el) => {
			el.classList.remove('modal-auto--visible');
		});
	}
});


