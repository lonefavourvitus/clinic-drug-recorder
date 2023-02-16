<script>
	import { handleDrugRemoval } from '$lib/HandleDrugRemovalFunction.svelte';
	import { fade } from 'svelte/transition';
	import { qq } from '$lib/Func.svelte';
	// import { iddy } from '$lib/DrugsInputForm.svelte';
	export let oneDrugStore = [];
	// let iddy = '';
	// let el = 'oo';
	console.log('and', qq);

	const time = new Date().toLocaleTimeString();
	const date = new Date();
	const year = date.getFullYear().toString().substr(-2);
	const month = date.getMonth() + 1;
	const dayOfWeek = date.toLocaleString('default', { weekday: 'short' });
	$: totalAmountInUnits = oneDrugStore[2].length;
	$: totalAmountInNaira = oneDrugStore[2].reduce((a, { price }) => a + price, 0);
	console.log(time);
	// $: console.log(iddy);
	// let b;
	// export let smooth = 'smooth';
	// export let abrupt = 'auto';
</script>

<!-- <main bind:this={el}>rrr</main> -->
<main>
	{#each oneDrugStore[0] as drug}
		<div transition:fade>
			<main class="drug-title">
				<h2>{drug}</h2>
			</main>
		</div>
	{/each}
	{#each oneDrugStore[2] as drug, i}
		<div transition:fade>
			<main>
				<div class="destructured">
					<slot />
					<div use:qq class="ps" id={drug.id}>
						<p class="none">{drug.id}:</p>
						<p>{i + 1}</p>
						<p>{drug.drugName}</p>
						<p>₦{drug.price}</p>
						<p>{time}</p>

						<p>
							{dayOfWeek} -
							{month} -
							{year}
						</p>
						<button on:click={handleDrugRemoval(drug.id)}>remove</button>
					</div>
				</div>
			</main>
		</div>
	{/each}
	<main class="total-amount-container">
		<div class="p-container1">
			<p class="p1">T.A In Units:</p>
			<p class="p2">{totalAmountInUnits}</p>
		</div>
		<div class="p-container2">
			<p class="p3">T.A In Naira:</p>
			<p class="p4">{totalAmountInNaira}</p>
		</div>
	</main>
</main>

<style>
	/* .main-container {
		display: flex;
		justify-content: center;
	} */
	main {
		display: flex;
		flex-direction: column;
		background: hsla(200, 50%, 98%, 1);

		width: 15.3rem;
	}
	.ps {
		display: flex;
		border-radius: 5px;
		width: 100%;
		flex-wrap: wrap;
		margin: 0.05rem;
	}
	.ps p {
		background: hsla(222, 100%, 90%, 1);

		border-radius: 5px;
		margin: 7px 5px;
		display: flex;
		width: fit-content;
		flex-wrap: wrap;
	}

	main:last-child {
		border: none;
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

	.p1 {
		background: hsla(100, 50%, 70%, 1);
		border-radius: 10px 0px 0 10px;
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
	}
	.p4 {
		background: hsla(100, 50%, 65%, 1);
		border-radius: 0 10px 10px 0;
		padding: 5px;
	}
	.total-amount-container {
		border-bottom: 1px solid hsla(0, 0%, 70%, 1);
		display: flex;
		border-right: 2px solid hsla(222, 50%, 75%, 1);
		padding: 5px 0;
		border-right: unset;
		background: hsla(100, 50%, 85%, 1);
		justify-content: space-between !important;
		flex-direction: row;

		margin: 0;
	}
	.total-amount-container div {
		display: flex;
		flex-direction: row;
		align-items: center;
		justify-content: center;
		padding: 0 3px;
	}

	.drug-title {
		padding: 0;
		/* border-right: 2px solid hsla(222, 50%, 75%, 1); */
		border: none;
		background: hsla(222, 50%, 80%, 1);
	}
	h2 {
		margin: 0;
		color: hsla(0, 0%, 25%, 1);
		padding: 2px;
		text-align: center;
		font-size: 0.7rem;
		border: unset;
		letter-spacing: 1px;
		font-weight: 600;
	}
	/*  */

	button {
		border-radius: 10px;
		/* margin: auto 0;
		margin-left: 1rem;
		padding: 5px 10px; */
		background: hsla(222, 50%, 90%, 1);
		border: none;
		font-size: 0.65rem;
		display: flex;
		justify-self: center;
		align-self: center;
		cursor: pointer;
	}

	.none {
		display: none !important;
	}

	p {
		/* margin: 0.3rem 0; */
		/* font-size: 0.95rem; */
		margin: 0;
		font-size: 0.65rem;
		font-size: 0.8rem;
		padding: 0 3px;
		font-weight: 500;
		color: hsla(0, 0%, 25%, 1);
	}

	.destructured {
		border-bottom: 1px solid hsla(0, 0%, 70%, 1);
		/* border-right: 2px solid hsla(222, 50%, 75%, 1); */
		display: flex;
		align-items: center;
		justify-content: space-around;
		/* padding: 5px; */
		/* width: 100%; */
		background: hsla(200, 50%, 98%, 1);
	}

	.ps p:nth-child(2) {
		background: hsla(0, 100%, 90%, 1);
		background: hsla(222, 100%, 70%, 1);
	}
	.damn {
		display: flex;
		flex-direction: column;
	}
</style>
