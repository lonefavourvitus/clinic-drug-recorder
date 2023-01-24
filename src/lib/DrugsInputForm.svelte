<script>
	import { v4 as uuidv4 } from 'uuid';
	import { drugStore, drugStore_hydracP, drugStore_jawasil } from '../stores';
	let drugName = '';
	let message;
	function sharpo(druName, drugStre) {
		drugName = druName;
		let newDrugInput = {
			id: uuidv4(),
			drugName,
			price: 300
		};
		drugName = '';

		drugStre.update((currentDrug) => {
			return [newDrugInput, ...currentDrug];
		});
	}
	function handleSubmit() {
		if (drugName == 'gsk' || drugName == 'ren') {
			sharpo('GSK antacid suspension', drugStore);
		} else {
			if (drugName == 'hydrac' || drugName == 'short') {
				sharpo('Hydrac P', drugStore_hydracP);
			} else {
				if (drugName == 'jawasil' || drugName == 'jawa') {
					sharpo('Jawasil Declofenac', drugStore_jawasil);
				} else {
					message = `Drug name is incorrect, not accepted!`;
				}
			}
		}
	}
</script>

{#if message}
	<p class="message">{message}</p>
{/if}
<form on:submit|preventDefault={handleSubmit}>
	<!-- Rating Select -->
	<div class="input-group">
		<input type="text" bind:value={drugName} placeholder="input drug name..." />
		<button type="submit">Submit</button>
	</div>
</form>

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
	form {
		width: 20vw;
		position: absolute;
		/* margin: 1rem 1rem 1rem 0.6rem; */
		border: none;
		display: flex;
		bottom: 5px;
		left: 5px;
		/* border-top: 1px solid red; */
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
	}
</style>
