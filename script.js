const projects = [
	{
		name: 'CountdownTimer',

	},
	{
		name: 'quiz',

	}, 
	{
		name: 'recipe',

	},
	{
		name: 'weather',

	},
	{
		name: 'ToDo',

	},
	{
		name: 'BlackJack',

	},
	{
		name: 'solresol'
	},
	{
		name: 'zegar'
	},
	{
		name: 'blur'
	},
	{
		name: 'randomUser'
	},
	{
		name: 'textStatistics'
	},
	{
		name: 'appGeoWeather'
	},
	{
		name: 'calculator'
	},
	{
		name: 'checkbox'
	},
	{
		name: 'basket'
	},
	{
		name: 'arrayTrenning'
	},
	{
		name: 'restaurant'
	},
	{
		name: 'exChange'
	},
		{
		name: 'divination'
	},
		
		
	

];

const list = document.getElementById('list');

projects.forEach(({ name}, i) => {
	const listItem = document.createElement('li');

	listItem.innerHTML = `
		<a href="https://michal198711.github.io/JavaScript/${name}/index.html">
			<img src="https://michal198711.github.io/JavaScript/${name}/screen.jpg" alt="${name}" />
			<p>${i + 1}. ${formatProjectName(name)}</p>
		</a>

		<div class="links-container">
			<a href="htt
			
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
