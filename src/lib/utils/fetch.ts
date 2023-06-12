import { PRIVATE_MOVIEDB_TOKEN } from '$env/static/private';

const options = {
	method: 'GET',
	headers: {
		accept: 'application/json',
		Authorization: `Bearer ${PRIVATE_MOVIEDB_TOKEN}`
	}
};

export const fetchFromMovieDB = (url: string): Promise<any> => {
	return fetch(url, options);
};
