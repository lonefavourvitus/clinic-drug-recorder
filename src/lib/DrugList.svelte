<script>
	import { drugStore, drugStore_hydracP, drugStore_jawasil } from '../stores';
	// import { ,drugStore_hydracP } from '../stores';
	import { fade } from 'svelte/transition';
	import DrugAsAUnit from '$lib/DrugAsAUnit.svelte';
	$: totalAmountInUnitsGSK = $drugStore.length;
	$: totalAmountInNairaGSK = $drugStore.reduce((a, { price }) => a + price, 0);
	$: totalAmountInUnitsHydracP = $drugStore_hydracP.length;
	$: totalAmountInNairaHydracP = $drugStore_hydracP.reduce((a, { price }) => a + price, 0);
	$: totalAmountInUnitsJawasil = $drugStore_jawasil.length;
	$: totalAmountInNairaJawasil = $drugStore_jawasil.reduce((a, { price }) => a + price, 0);
</script>

<main class="main-container">
	<main>
		<main class="drug-title"><h2>GSK ANTACID SUSPENSION</h2></main>

		{#each $drugStore as drug, i (drug.id)}
			<!-- <p>{drug.price}</p> -->
			<div transition:fade>
				<DrugAsAUnit unit={drug} />
			</div>
		{/each}
		<main class="total-amount-container">
			<div class="p-container1">
				<p class="p1">T.A In Units:</p>
				<p class="p2">{totalAmountInUnitsGSK}</p>
			</div>
			<div class="p-container2">
				<p class="p3">T.A In Naira:</p>
				<p class="p4">{totalAmountInNairaGSK}</p>
			</div>
		</main>
	</main>
	<main>
		<main class="drug-title"><h2>HYDRAC P</h2></main>

		{#each $drugStore_hydracP as drug, i (drug.id)}
			<div transition:fade>
				<!-- <p>{i + 1}</p> -->
				<DrugAsAUnit unit={drug} />
			</div>
		{/each}

		<main class="total-amount-container">
			<div class="p-container1">
				<p class="p1">T.A In Units:</p>
				<p class="p2">{totalAmountInUnitsHydracP}</p>
			</div>
			<div class="p-container2">
				<p class="p3">T.A In Naira:</p>
				<p class="p4">{totalAmountInNairaHydracP}</p>
			</div>
		</main>
	</main>
	<main>
		<main class="drug-title"><h2>JAWASIL DEFLOCONAC</h2></main>

		{#each $drugStore_jawasil as drug, i (drug.id)}
			<!-- <p>{drug.price}</p> -->
			<div transition:fade>
				<DrugAsAUnit unit={drug} />
			</div>
		{/each}
		<main class="total-amount-container">
			<div class="p-container1">
				<p class="p1">T.A In Units:</p>
				<p class="p2">{totalAmountInUnitsJawasil}</p>
			</div>
			<div class="p-container2">
				<p class="p3">T.A In Naira:</p>
				<p class="p4">{totalAmountInNairaJawasil}</p>
			</div>
		</main>
	</main>
</main>

<style>
	.main-container {
		display: flex;
	}
	main {
		border-right: 2px solid hsla(222, 50%, 75%, 1);
		padding: 0 5px;
	}

	.p-container1 {
		display: flex;
		border-radius: 10px;
		align-items: center;
		justify-content: start;
		padding-left: 6px !important;
	}
	.p-container2 {
		display: flex;
		border-radius: 10px;
		align-items: center;
		padding-right: 6px !important;
		justify-content: end;
	}
	p {
		margin: 0.3rem 0;
		font-size: 0.95rem;
	}
	.p1 {
		background: hsla(100, 50%, 70%, 1);
		border-radius: 10px 0px 0 10px;
		border-right: 2px solid hsla(100, 100%, 20%, 1);
		padding: 5px;
	}
	.p2 {
		background: hsla(100, 50%, 65%, 1);
		border-radius: 0 10px 10px 0;
		padding: 5px;
	}
	.p3 {
		background: hsla(100, 50%, 70%, 1);
		border-radius: 10px 0px 0 10px;
		border-right: 2px solid hsla(100, 100%, 20%, 1);
		padding: 5px;
		/* font-size: 0.7rem; */
	}
	.p4 {
		background: hsla(100, 50%, 65%, 1);
		border-radius: 0 10px 10px 0;
		padding: 5px;
	}
	.total-amount-container {
		border-bottom: 1px solid hsla(0, 0%, 70%, 1);
		display: flex;
		padding: 5px;
		border-right: unset;
		background: hsla(100, 50%, 85%, 1);
		/* align-items: center; */
		justify-content: space-between !important;
		margin: 0;
	}
	.total-amount-container div {
		display: flex;
		align-items: center;
		justify-content: center;
		/* width: 100%; */
		padding: 0 3px;
	}
	.drug-title {
		padding: 0;
		border: none;
		background: hsla(222, 50%, 80%, 1);
	}
	h2 {
		/* background: hsla(100, 50%, 70%, 1);
		background: hsla(100, 50%, 85%, 1); */
		margin: 0;
		color: hsla(0, 0%, 30%, 1);
		padding: 2px;
		text-align: center;
		font-size: 0.85rem;
		border: unset;
		letter-spacing: 1px;
		font-weight: 500;
	}
</style>
