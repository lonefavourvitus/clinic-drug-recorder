<script>
	import { v4 as uuidv4 } from 'uuid';
	import { drugStorem, drugs } from '../stores';

	// import { gg } from '$lib/Func.svelte';

	import MenuAndOptionsLabel from '$lib/MenuAndOptionsLabel.svelte';

	// import { c } from '$lib/Lump.svelte';
	export let drugName = '';
	// export let iddy = null;
	let typedName = '';
	let altName = '';
	let mainName = '';
	let price;
	let message = null;
	let brandName = '';
	console.log($drugs);
	// $: console.log(iddy);
	function handleSubmitDrugValues(typedName, altName, mainName, price) {
		if (drugName == typedName || drugName == altName) {
			drugName = mainName;
			let newDrugInput = {
				id: uuidv4(),
				drugName,
				price
			};

			console.log('hehe');

			drugName = '';
			message = null;

			drugStorem.update((currentDrugs) => {
				const index = currentDrugs.findIndex(
					(drug) => drug[1][0] === typedName || drug[1][0] === altName
				);
				const newDrugs = [...currentDrugs];
				newDrugs[index][2].push(newDrugInput);
				console.log(index);
				return newDrugs;
			});

			return { typedName, altName, mainName, price };
		}
	}
	function handleSubmit() {
		if (drugName == typedName || drugName == altName) {
			handleSubmitDrugValues(typedName, altName, mainName, price);
		} else {
			message = `Drug name is incorrect, not accepted!`;
		}
		// $drugs.push([typedName, altName, mainName, price]);
		$drugs.forEach((drug) => {
			handleSubmitDrugValues(...drug);
		});
	}

	function addNewDrug() {
		drugStorem.update((newArray) => {
			newArray.push([[brandName], [typedName], []]);
			console.log(newArray.length);
			$drugs.push([typedName, altName, mainName, price]),
				$drugs.forEach((drug) => {
					handleSubmitDrugValues(...drug);
				});
			console.log('inside addnewdrug', $drugs);
			return newArray;
		});
		// brandName = '';
		// typedName = '';
		// altName = '';
		// mainName = '';
		// price = '';
	}
</script>

{#if message}
	<p class="message">{message}</p>
{/if}
<form on:submit|preventDefault={handleSubmit}>
	<div class="input-group">
		<input type="text" bind:value={drugName} placeholder="input drug name..." />
	</div>
	<button type="submit">Submit</button>
</form>
<MenuAndOptionsLabel />
<!-- <div>
	<input type="text" bind:value={brandName} placeholder="Enter Brand Name" />

	<input type="text" bind:value={typedName} placeholder="Enter Typed Name" />
	<input type="text" bind:value={altName} placeholder="Enter Alternate Name" />
	<input type="text" bind:value={mainName} placeholder="Enter Main Name" />
	<input type="number" bind:value={price} placeholder="Enter Price" />
	<button on:click={addNewDrug}>Add Drug</button>
</div> -->

<!-- <form on:submit|preventDefault={newInput}>
	<div class="input-group">
		<input type="text" bind:value={drugName} placeholder="input drug name..." />
		<input type="text" bind:value={altName} placeholder="input drug name..." />
		<input type="text" bind:value={mainName} placeholder="input drug name..." />
		<input type="number" bind:value={price} placeholder="input drug name..." />
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
		border: none;
		display: flex;
		bottom: 40px;
		left: 5px;
		text-align: center;
	}
	nav {
		background-color: hsla(222, 50%, 90%, 1);
		padding: 10px;
		margin-left: 6rem;
		color: hsla(0, 0%, 25%, 1);
		border-radius: 5px;
		text-align: center;
	}

	form {
		padding: 0;
		margin: 0;
		/* position: fixed; */
		width: 100vw;
		border: none;
		display: flex;
	}
	input {
		width: 20vw;
		border: none;
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
		padding: 10px;
		align-items: center;
		justify-content: center;
	}
</style>
