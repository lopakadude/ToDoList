const up = document.querySelector('.ergonomics__button_type_up');
const bottom = document.querySelector('.ergonomics__button_type_bottom');
const table = document.querySelector('.ergonomics__table_type_top');
const legsTable = document.querySelector('.ergonomics__table_type_bottom');
const hole = document.querySelector('.control__hole')
const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
		const girl = document.querySelector('.control__girl-image');
    if (entry.isIntersecting) {
      girl.classList.add('control__girl-image-appearance');
			hole.classList.add('control__hole-sizing');
			setTimeout(() => {
				girl.classList.remove('control__girl-image-appearance');
				hole.classList.remove('control__hole-sizing');
				girl.classList.add('control__girl-image-levitation');
			}, 30000)
    }
		console.log('ok')
  });
});
observer.observe(hole);

up.addEventListener('click', () => {
	if (table.classList.contains('ergonomics__table_type_top-bottom')) {
		table.classList.remove('ergonomics__table_type_top-bottom')
	};
	table.classList.add('ergonomics__table_type_top-top');

	if (legsTable.classList.contains('ergonomics__table_type_bottom-top')) {
		legsTable.classList.remove('ergonomics__table_type_bottom-top')
	};
	legsTable.classList.add('ergonomics__table_type_bottom-bottom');
})

bottom.addEventListener('click', () => {
	if (table.classList.contains('ergonomics__table_type_top-top')) {
		table.classList.remove('ergonomics__table_type_top-top')
	};
	table.classList.add('ergonomics__table_type_top-bottom');
	if (legsTable.classList.contains('ergonomics__table_type_bottom-bottom')) {
		legsTable.classList.remove('ergonomics__table_type_bottom-bottom')
	};
	legsTable.classList.add('ergonomics__table_type_bottom-top');
})