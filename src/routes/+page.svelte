<script lang="ts">
	import MovieBanner from '../lib/components/MovieBanner.svelte';
	import type { PageData } from './$types';

	export let data: PageData;
</script>

<h1 class="mx-5 p-5 text-white text-5xl font-extrabold">Discover Movie</h1>

{#await data.moviesPromise}
	<p>Loading...</p>
{:then movieList}
	<div class="mx-10 grid grid-cols-4 grid-rows-5 gap-1">
		{#each movieList.results as movie}
			<MovieBanner {movie} />
		{/each}
	</div>
{/await}
