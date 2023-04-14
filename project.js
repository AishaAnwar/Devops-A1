const projectsList = document.querySelector('#projects');
const filterInput = document.querySelector('#filter');

filterInput.addEventListener('input', () => {
	const filterValue = filterInput.value.toLowerCase();
	const projectItems = projectsList.querySelectorAll('.project-item');

	projectItems.forEach(item => {
		const projectTech = item.getAttribute('data-tech').toLowerCase();

		if (projectTech.includes(filterValue) || filterValue === '') {
			item.style.display = 'block';
		} else {
			item.style.display = 'none';
		}
	});
});
