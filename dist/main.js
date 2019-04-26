//------------------------------------------------------------------------------------------------
// COMPONENT LOGIC
//------------------------------------------------------------------------------------------------

// Logic to get the components functioning on a basic level. Nothing too elaborate.

const expanders = document.querySelectorAll('.o-expander');
for(let i = 0; i < expanders.length; i++) {
	const triggers = expanders[i].querySelectorAll('.o-expander__trigger');
	for(let t = 0; t < triggers.length; t++) {
		triggers[t].addEventListener('click', () => {
			expanders[i].classList.toggle('is-active');
		})
		triggers[t].addEventListener('keypress', (e) => {
			if(e.which === 13) {
				expanders[i].classList.toggle('is-active');
			}
		});
	}
}

