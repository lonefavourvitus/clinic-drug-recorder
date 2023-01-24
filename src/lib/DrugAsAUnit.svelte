<script>
	// import { drugStore, drugStore_hydracP, drugStore_jawasil } from '../stores';
	import { handleDrugRemoval } from '$lib/HandleDrugRemovalFunction.svelte';
	export let unit;
	export let n = 1;
</script>

<main>
	<div>
		<slot />
		<p class="none">{unit.id}:</p>
		<p>{n + 1}</p>
		<p>{unit.drugName}</p>
		<p class="naira-symbol">N</p>
		<p>{unit.price}</p>
		<button on:click={handleDrugRemoval(unit.id)}>remove</button>
	</div>
</main>

<style>
	.naira-symbol {
		transform: translateX(11px);
		text-decoration: line-through;
	}
	main {
		display: flex;
		background: hsla(222, 50%, 96%, 1);
	}

	button {
		border-radius: 10px;
		margin: auto 0;
		margin-left: 1rem;
		padding: 5px 10px;
		background: hsla(222, 50%, 90%, 1);
		border: none;
	}
	.none {
		display: none;
	}
	p {
		margin: 0;
		font-size: 0.9rem;
		padding: 5px;
		font-weight: 500;
		color: hsla(0, 0%, 25%, 1);
	}

	div {
		border-bottom: 1px solid hsla(0, 0%, 70%, 1);
		display: flex;
		align-items: center;
		justify-content: space-around;
		padding: 5px;
		width: 100%;
		background: hsla(200, 50%, 95%, 1);
	}
</style>
