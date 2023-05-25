import { PRIVATE_MOVIEDB_TOKEN } from '$env/static/private';

export const load = async () => {
	const url =
		'https://api.themoviedb.org/3/discover/movie?include_adult=false&include_video=false&language=en-US&page=1&sort_by=vote_average.desc&without_genres=99,10755&vote_count.gte=200';
	const options = {
		method: 'GET',
		headers: {
			accept: 'application/json',
			Authorization: `Bearer ${PRIVATE_MOVIEDB_TOKEN}`
		}
	};

	const res = await fetch(url, options);
	const item = await res.json();

	return {
		item
	};
};
