<script>
	import { v4 as uuidv4 } from 'uuid';
	import {
		drugStore,
		drugStore_hydracP,
		drugStore_jawasil,
		drugStore_emtrisil,
		newone
	} from '../stores';

	export let drugName = '';
	let message = null;
	function handleSubmit() {
		function perplexedByThisWrapperFunction(anyName) {
			if (drugName === anyName) {
				function seriouslyConfusedHere(typedName, altName, mainName, drugStoreName, price) {
					handleSubmitDrugValues(typedName, altName, mainName, drugStoreName, price);
				}
			} else {
				message = `Drug name is incorrect, not accepted!`;
			}
		}
		perplexedByThisWrapperFunction('gsk');
		handleSubmitDrugValues('gsk', 'ren', 'gsk antacid suspension', drugStore, 500);
		handleSubmitDrugValues('hydrac', 'hy', 'Hydrac P', drugStore_hydracP, 300);
		handleSubmitDrugValues('jawa', 'ja', 'jawasil declofenac', drugStore_jawasil, 900);
		handleSubmitDrugValues('emtrisil', 'emt', 'emtrisil', drugStore_emtrisil, 700);
		handleSubmitDrugValues('winart', 'win', 'winart forte', newone, 400);
	}
	function handleSubmitDrugValues(typedName, altName, mainName, drugStoreName, price) {
		if (drugName == typedName || drugName == altName) {
			drugName = mainName;
			let newDrugInput = {
				id: uuidv4(),
				drugName,
				price
			};
			console.log(drugName, drugStoreName);

			drugName = '';
			message = null;

			drugStoreName.update((currentDrug) => {
				return [newDrugInput, ...currentDrug];
			});
			console.log('yay');
		}
	}
</script>

{#if message}
	<p class="message">{message}</p>
{/if}
<form on:submit|preventDefault={handleSubmit}>
	<div class="input-group">
		<input type="text" bind:value={drugName} placeholder="input drug name..." />
		<button type="submit">Submit</button>
		<nav>
			SOME ------------------------- OPTIONS ------------------------- WILL
			------------------------- BE ------------------------- HERE
		</nav>
	</div>
</form>

<!-- <form on:submit|preventDefault={newInput}>
	<div class="input-group">
		<input type="text" bind:value={a} placeholder="input drug name..." />
		<input type="text" bind:value={b} placeholder="input drug name..." />
		<input type="text" bind:value={c} placeholder="input drug name..." />
		<input type="text" bind:value={d} placeholder="input drug name..." />
		<input type="number" bind:value={e} placeholder="input drug name..." />
		<button type="submit">Submit</button>
	</div>
</form> -->
<style>
	.message {
		background: hsla(0, 100%, 85%, 1);
		color: hsla(0, 100%, 35%, 1);
		font-weight: 500;
		border-radius: 5px;
		display: flex;
		width: 23vw;
		position: absolute;
		/* margin: 1rem 1rem 1rem 0.6rem; */
		border: none;
		display: flex;
		bottom: 40px;
		left: 5px;
		text-align: center;
	}
	nav {
		background-color: hsla(222, 50%, 90%, 1);
		/* width: 66vw; */
		padding: 10px;
		margin-left: 6rem;
		color: hsla(0, 0%, 25%, 1);
		border-radius: 5px;
		text-align: center;
	}

	form {
		padding: 0;
		margin: 0;
		/* background: hsla(222, 50%, 80%, 1); */

		width: 100vw;
		border: none;
		display: flex;
	}
	input {
		width: 20vw;
		border: none;
		/* border-top: 1px solid red; */
		background: hsla(222, 50%, 90%, 1);
		padding: 10px;
		transition: all ease-in-out 0.3s;
		border-radius: 5px;
	}
	input:hover {
		background: hsla(222, 50%, 80%, 1);
		transition: all ease-in-out 0.3s;
	}
	button {
		background: hsla(222, 50%, 85%, 1);
		border: none;
		padding: 3px 5px;
		padding: 10px;

		border-radius: 5px;
		transition: all ease-in-out 0.3s;
		margin-left: 0.5rem;
	}
	button:hover {
		background: hsla(222, 50%, 80%, 1);
		transition: all ease-in-out 0.3s;
	}
	p {
		padding: 10px;
		background: hsla(222, 50%, 85%, 1);
	}
	.input-group {
		display: flex;
		/* margin: 3rem; */
		padding: 10px;
		align-items: center;
		justify-content: center;
	}
</style>
