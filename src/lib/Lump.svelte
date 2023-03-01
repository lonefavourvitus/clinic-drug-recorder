<script>
	import { handleDrugRemoval } from '$lib/HandleDrugRemovalFunction.svelte';
	import { doubleLinerValue } from '../stores';
	import { fade } from 'svelte/transition';
	import { nodeUnitFunction, time } from '$lib/Func.svelte';
	// import { time } from '../stores';
	// onMount(()=>
	// )
	export let oneDrugStore = [];
	// console.log('and', qq);
	// $: trenny = $time;
	// const time = new Date().toLocaleTimeString();
	// const time = new Date();
	const date = new Date();
	const year = date.getFullYear().toString().substr(-2);
	const month = date.getMonth() + 1;
	const dayOfWeek = date.toLocaleString('default', { weekday: 'short' });
	$: totalAmountInUnits = oneDrugStore[2].length;
	$: totalAmountInNaira = oneDrugStore[2].reduce((a, { price }) => a + price, 0);
	console.log(time);
	// $: console.log(time);
	console.log($doubleLinerValue);
	let darkyAlphaMainAndDestructured = 1;
	let darkyPs = 1;
	let darkyP1P3 = 1;
	let darkyP2P4 = 1;
	let darkyTotalAmountContainer = 1;
	let darkyDrugTitle = 1;
	let darkyH2AndP = 1;
	let darkyButton = 1;
</script>

<main class:darkyAlphaMainAndDestructured transition:fade style="width:{$doubleLinerValue}">
	<!-- <div transition:fade class="ui-layout">
		<p>ui layout</p>
	</div> -->
	{#each oneDrugStore[0] as drug}
		<div transition:fade>
			<main class="drug-title" class:darkyDrugTitle>
				<h2 class:darkyH2AndP>
					{drug}
				</h2>
			</main>
		</div>
	{/each}
	{#each oneDrugStore[2] as drug, i}
		<div transition:fade>
			<main>
				<div class="destructured" class:darkyAlphaMainAndDestructured>
					<slot />
					<div use:nodeUnitFunction class="ps" class:darkyPs id={drug.id}>
						<p class="none">{drug.id}</p>
						<p>{i + 1}</p>
						<p>{drug.drugName}</p>
						<p>₦{drug.price}</p>
						<p>{time}</p>
						<p>
							{dayOfWeek} -
							{month} -
							{year}
						</p>
						<button class:darkyButton on:click={handleDrugRemoval(drug.id)}>remove</button>
					</div>
				</div>
			</main>
		</div>
	{/each}
	<main class="total-amount-container" class:darkyTotalAmountContainer>
		<div class="p-container1">
			<p class="p1" class:darkyP1P3>T.A In Units:</p>
			<p class="p2" class:darkyP2P4>{totalAmountInUnits}</p>
		</div>
		<div class="p-container2">
			<p class="p3" class:darkyP1P3>T.A In Naira:</p>
			<p class="p4" class:darkyP2P4>{totalAmountInNaira}</p>
		</div>
	</main>
</main>

<style>
	/* :global(.ps) {
	
		background: hsla(200, 50%, 28%, 1);
	} */
	main {
		display: flex;
		flex-direction: column;
		background: hsla(200, 50%, 98%, 1);
		/* max-width: 100%; */
		/* width: 15.3rem; */
		/* width: max-content; */
		overflow: scroll;
		flex-wrap: nowrap;
		transition: 5s;
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
	.darkyPs p {
		background: hsla(222, 100%, 10%, 1);
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
		border-right: 2px solid hsla(100, 100%, 20%, 1);

		padding: 5px;
	}
	.p2 {
		background: hsla(100, 50%, 62%, 1);
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
		background: hsla(100, 50%, 62%, 1);
		border-radius: 0 10px 10px 0;
		padding: 5px;
	}
	.darkyP1P3 {
		background: hsla(222, 100%, 10%, 1);
		border-right: 2px solid hsla(100, 100%, 10%, 1);
	}

	.darkyP2P4 {
		background: hsla(222, 100%, 10%, 1);
	}
	.total-amount-container {
		border-bottom: 1px solid hsla(0, 0%, 70%, 1);
		display: flex;
		border-right: 2px solid hsla(222, 50%, 75%, 1);
		width: 100%;
		padding: 5px 0;
		border-right: unset;
		background: hsla(100, 50%, 85%, 1);
		justify-content: space-between !important;
		flex-direction: row;

		margin: 0;
	}
	.darkyTotalAmountContainer {
		background: hsla(100, 50%, 15%, 1);
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
		display: flex;
		align-items: center;
		width: 100%;

		background: hsla(222, 50%, 80%, 1);
	}

	.darkyDrugTitle {
		background: hsla(222, 50%, 10%, 1);
	}
	h2 {
		margin: 0;
		color: hsla(0, 0%, 25%, 1);
		padding: 2px;
		display: flex;
		align-items: center;
		justify-content: center;
		text-align: center;
		font-size: 0.7rem;
		border: unset;
		letter-spacing: 1px;
		font-weight: 600;
	}

	.darkyH2AndP {
		color: hsla(0, 0%, 95%, 1);
	}
	button {
		border-radius: 10px;
		/* margin: auto 0;
		margin-left: 1rem;
		padding: 5px 10px; */
		background: hsla(222, 50%, 90%, 1);
		border: none;
		font-size: 0.65rem;
		display: flex;
		margin-right: 0.3rem;
		justify-self: center;
		align-self: center;
		cursor: pointer;
	}

	.darkyButton {
		background: hsla(222, 50%, 10%, 1);
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
		background: hsla(222, 100%, 70%, 1);
	}
	.darkyAlphaMainAndDestructured {
		background: hsla(200, 50%, 18%, 1);
	}
</style>
