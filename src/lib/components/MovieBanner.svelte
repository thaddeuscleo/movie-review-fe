<script lang="ts">
	export let movie: any;
</script>

<a href={`/${movie.id}`}>
	<div class="m-2 flex flex-col justify-center items-start">
		<img
			class="w-5/6 rounded-md"
			src={`https://image.tmdb.org/t/p/original${movie.poster_path}`}
			alt="poster_path_image"
		/>
		<p class="m-2 text-white text-xl font-bold">{movie.original_title}</p>
		<div class="flex">
			<svg
				xmlns="http://www.w3.org/2000/svg"
				viewBox="0 0 24 24"
				fill="currentColor"
				class="w-6 h-6 text-yellow-400"
			>
				<path
					fill-rule="evenodd"
					d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z"
					clip-rule="evenodd"
				/>
			</svg>
			<p class="mx-3 text-slate-400 font-bold">{movie.vote_average}</p>
		</div>
	</div>
</a>
