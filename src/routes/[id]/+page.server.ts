import type { PageServerLoad } from '../$types';
import { fetchFromMovieDB } from '../../lib/utils/fetch';

export const load = (async ({ params }) => {
	const id = (params as any).id;
	const movieDetailUrl = `https://api.themoviedb.org/3/movie/${id}?language=en-US`;
	const movieReviewApiUrl = `https://api.themoviedb.org/3/movie/${id}/reviews?language=en-US`;

	// const item = fetchFromMovieDB(movieDetailUrl);
	// const item = await res.json();

	// const reviewRes = await fetchFromMovieDB(movieReviewApiUrl);
	// const review = await reviewRes.json();

	return {
		moviePromise: fetchFromMovieDB(movieDetailUrl).then(res => res.json()),
		reviewPromise: fetchFromMovieDB(movieReviewApiUrl).then(res => res.json())
	};
}) satisfies PageServerLoad;
