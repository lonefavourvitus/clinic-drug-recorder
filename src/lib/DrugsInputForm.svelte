<script>
	import { v4 as uuidv4 } from 'uuid';
	import { drugStore, drugProperties } from '../stores';
	import ThemeToggler from '$lib/ThemeToggler.svelte';
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
	console.log($drugProperties);
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

			drugStore.update((currentDrugs) => {
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
		$drugProperties.forEach((drug) => {
			handleSubmitDrugValues(...drug);
		});
	}

	function addNewDrug() {
		drugStore.update((newArray) => {
			newArray.push([[brandName], [typedName], []]);
			console.log(newArray.length);
			$drugProperties.push([typedName, altName, mainName, price]),
				$drugProperties.forEach((drug) => {
					handleSubmitDrugValues(...drug);
				});
			console.log('inside addnewdrug', $drugProperties);
			return newArray;
		});
		// brandName = '';
		// typedName = '';
		// altName = '';
		// mainName = '';
		// price = '';
	}
	let darkyMessage = 1;
	let darkyInput = 1;
	let darkyButtonAndP = 1;
</script>

{#if message}
	<p class="message" class:darkyMessage>{message}</p>
{/if}
<main>
	<form on:submit|preventDefault={handleSubmit}>
		<div class="input-group">
			<input class:darkyInput type="text" bind:value={drugName} placeholder="input drug name..." />
		</div>
		<div class="input-group submit-button">
			<button class:darkyButtonAndP type="submit">Submit</button>
		</div>
	</form>
	<ThemeToggler />
	<MenuAndOptionsLabel />
</main>
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
	main {
		display: flex;
		width: 100vw;
		/* position: fixed; */
		/* position: relative; */
	}
	.input-group.submit-button {
		transform: translateX(-12px);
	}
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
	.darkyMessage {
		background: hsla(0, 100%, 15%, 1);
		/* color: hsla(0, 100%, 5%, 1); */
	}
	/* nav {
		background-color: hsla(222, 50%, 90%, 1);
		padding: 10px;
		margin-left: 6rem;
		color: hsla(0, 0%, 25%, 1);
		border-radius: 5px;
		text-align: center;
	} */

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
	.darkyInput {
		background: hsla(222, 50%, 20%, 1);
	}
	input:hover {
		background: hsla(222, 50%, 80%, 1);
		transition: all ease-in-out 0.3s;
	}
	.darkyInput:hover {
		background: hsla(222, 50%, 10%, 1);
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
	.darkyButtonAndP {
		background: hsla(222, 50%, 15%, 1);
	}
	.darkyButtonAndP:hover:not(p) {
		background: hsla(222, 50%, 5%, 1);
	}
</style>
