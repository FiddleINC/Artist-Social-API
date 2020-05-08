const searchBar = document.getElementById('searchBar');
const searchButton = document.getElementById('searchButton');

searchBar.addEventListener('keyup', (e) => {
	const searchString = e.target.value;
	var hugeList = document.getElementById('huge_list');
	huge_list.innerHTML = '';
	axios
		.get('https://musicbrainz.org/ws/js/artist?q=' + searchString)
		.then((res) => {
			res.data.forEach((artist) => {
				var option = document.createElement('option');
				option.value = artist.name;

				// attach the option to the datalist element
				huge_list.appendChild(option);
			});
		})
		.catch((err) => {
			console.error(err);
		});

	searchButton.addEventListener('click', () => {
		axios
			.post('/data', {
				name: e.target.value
			})
			.then((res) => {
				console.log(res.data);
			})
			.catch((err) => {
				console.error(err);
			});
	});
});
