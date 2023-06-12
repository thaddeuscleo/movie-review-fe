<script lang="ts">
	import ReviewCard from '../../lib/components/ReviewCard.svelte';
	import type { PageData } from './$types';

	export let data: PageData;
</script>

<svelte:head>
	<title>Movie Review Detail</title>
</svelte:head>

{#await data.moviePromise}
	<p>Loading</p>
{:then movie}
	<div class="relative min-h-screen">
		<div
			class="opacity-25 absolute left-0 top-0 flex h-screen w-full flex-col items-start justify-between overflow-hidden bg-cover brightness-50"
		>
			<img src={`https://image.tmdb.org/t/p/original/${movie.backdrop_path}`} alt="" />
		</div>
		<div class="flex justify-center items-center grayscale-0 w-full h-screen">
			<img
				class="w-2/4 h-auto p-20 rounded-lg object-cover -rotate-6"
				src={`https://image.tmdb.org/t/p/original/${movie.poster_path}`}
				alt="poster_path_image"
			/>
			<div class="w-2/4 p-5">
				<h2 class="text-white text-5xl font-bold">{movie.original_title}</h2>
				<div class="w-2/3 h-0.5 bg-slate-400 my-3" />
				<div class="flex my-3">
					{#each movie.genres as genre}
						<div class="bg-yellow-300 px-2 py-1 mr-2">
							<p class="text-gray-900">#{genre.name}</p>
						</div>
					{/each}
				</div>
				<p class="text-white">{movie.overview}</p>
				<div class="mt-7">
					<a
						class="hover:bg-yellow-300 hover:text-black px-4 py-3 bg-white rounded-full"
						href={movie.homepage}>View Moview Home Page</a
					>
				</div>
			</div>
		</div>
	</div>
{/await}

{#await data.reviewPromise}
	<p>Loading</p>
{:then reviews}
	<div class="relative bg-black min-h-screen">
		<h3 class="mx-5 p-5 text-white text-5xl font-bold">Reviews</h3>
		<div class="p-5">
			{#each reviews.results as review}
				<ReviewCard {review} />
			{/each}
		</div>
	</div>
{/await}
