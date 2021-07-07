const projects = [
	{
		name: 'CountdownTimer',

	},
	{
		name: 'quiz',

	}, {
		name: 'recipe',

	},
	{
		name: 'weather',

	},
	{
		name: 'ToDo',

	},

];

const list = document.getElementById('list');

projects.forEach(({ name}, i) => {
	const listItem = document.createElement('li');

	listItem.innerHTML = `
		<a href="https://github.com/michal198711/JavaScript/${name}/index.html">
			<img src="/${name}/screen.jpg" alt="${name}" />
			<p>${i + 1}. ${formatProjectName(name)}</p>
		</a>

		<div class="links-container">
			<a href="https://github.com/michal198711/JavaScript/${name}/index.html" class="blue">
				
			</a>\
		</div>
	`;

	list.appendChild(listItem);
});

function formatProjectName(name) {
	return name
		.split('-')
		.map(word => word[0].toUpperCase() + word.slice(1))
		.join(' ');
}
