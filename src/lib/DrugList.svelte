<script context="module">
	import { drugStore } from '../stores';
	import Lump from '$lib/Lump.svelte';
	let darky = 1;
</script>

<main class="mainy">
	<main class="main-container" class:darky>
		{#each $drugStore as aDrugStore}
			<Lump oneDrugStore={aDrugStore} />
		{/each}
	</main>
</main>

<style>
	.main-container {
		display: flex;
		width: auto;
		justify-content: center;
		flex-wrap: nowrap;
		background: hsla(222, 50%, 75%, 1);
	}
	main {
		gap: 2px;
	}
	.mainy {
		display: flex;
		overflow: scroll;
		margin: 5px 0;
		width: 100vw;
	}
	.darky {
		background: hsla(222, 50%, 15%, 1);
	}
</style>
