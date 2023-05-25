import { PRIVATE_MOVIEDB_TOKEN } from "$env/static/private";
import type { PageServerLoad } from "../$types";

export const load = (async ({fetch, params}) => {
	const id = (params as any).id;
    const apiUrl = `https://api.themoviedb.org/3/movie/${id}?language=en-US`
	const reviewApiUrl = `https://api.themoviedb.org/3/movie/${id}/reviews?language=en-US`

    const options = {
		method: 'GET',
		headers: {
			accept: 'application/json',
			Authorization: `Bearer ${PRIVATE_MOVIEDB_TOKEN}`
		}
	};

    const res = await fetch(apiUrl, options);
	const item = await res.json();

	const reviewRes = await fetch(reviewApiUrl, options);
	const review = await reviewRes.json()

	return {
		item,
		review
	};
}) satisfies PageServerLoad;