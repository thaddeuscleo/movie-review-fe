<script lang="ts">
	import type { PageData } from './$types';

	export let data: PageData;
	const movie = data.item;
	const reviews = data.review.results;

	const emojis = ['😁', '😍', '😭', '😡', '😱', '😨'];
</script>

<div class="relative min-h-screen">
	<div
		class="opacity-25 absolute left-0 top-0 flex h-screen w-full flex-col items-start justify-between overflow-hidden bg-cover brightness-50"
	>
		<img src={`https://image.tmdb.org/t/p/original/${movie.backdrop_path}`} alt="" />
	</div>
	<div class="flex justify-center items-center grayscale-0 w-full h-screen">
		<img
			class="w-1/3 h-auto p-20 rounded-lg object-cover -rotate-6"
			src={`https://image.tmdb.org/t/p/original/${movie.poster_path}`}
			alt="poster_path_image"
		/>
		<div class="w-2/4">
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

<div>
	<h3 class="mx-5 p-5 text-white text-5xl font-bold">Reviews</h3>
	<div class="p-5">
		{#each reviews as review}
			<div class="bg-white m-2 p-5">
				<h4 class="font-semibold text-xl">{review.author}</h4>
				<div class="w-1/4 h-0.5 mt-1 bg-slate-500" />
				<p class="mt-2 text-slate-800">{review.content}</p>
				<div class="m-2 p-3 bg-slate-200 rounded-md">
					<p class="font-bold">Analyzed by AI Model</p>
					<div class="flex mt-5">
						{#each emojis as emoji}
							<div
								class="flex justify-center items-center text-xl mr-3 bg-slate-100 rounded-full px-2 py-1"
							>
								{emoji}
								<p class="ml-3">10</p>
							</div>
						{/each}
					</div>
				</div>
			</div>
		{/each}
	</div>
</div>