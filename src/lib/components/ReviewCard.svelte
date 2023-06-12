<script lang="ts">
	export let review: any;
    const emojis = ['😁', '😍', '😭', '😡', '😱', '😨'];
</script>

<div class="bg-slate-300 m-10 p-5">
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
