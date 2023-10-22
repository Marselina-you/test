document.addEventListener('DOMContentLoaded', () => {
	const accordions = document.querySelectorAll('.accordion');
  const acc = document.querySelectorAll('.accordion-content');
  const btn = document.querySelectorAll('.accordion-icon');


    accordions.forEach(el => {
      el.addEventListener('click', (e) => {
        const self = e.currentTarget;

        const control = self.querySelector('.accordion-control');
        const btn = control.querySelector('.accordion-icon');
        console.log(btn);
        const content = self.querySelector('.accordion-content');
        self.classList.toggle('open');


          if (self.classList.contains('open')) {
            control.setAttribute('aria-expanded', true);
            content.setAttribute('aria-hidden', false);


            content.style.maxHeight = content.scrollHeight + 25 +'px';
          } else {
            control.setAttribute('aria-expanded', false);

            content.setAttribute('aria-hidden', true);
            content.style.maxHeight = null;
          }



      });
    });











});

