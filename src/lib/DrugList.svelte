<script>
	import { drugStorem } from '../stores';
	import Lump from '$lib/Lump.svelte';
</script>

<main class="mainy">
	<main class="main-container">
		{#each $drugStorem as aDrugStore}
			<!-- <Lump id={aDrugStore.title} oneDrugStore={aDrugStore} /> -->
			<Lump oneDrugStore={aDrugStore} />
		{/each}
	</main>
</main>

<style>
	.main-container {
		display: flex;
		justify-content: center;

		background: hsla(222, 50%, 75%, 1);
	}
	main {
		gap: 2px;
	}
	.mainy {
		width: 99.3vw;
		display: flex;
		overflow: scroll;
		margin: 5px;
		/* width: 10000px; */
	}
</style>
