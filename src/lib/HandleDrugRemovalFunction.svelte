<script context="module">
	import { drugStore, drugStore_hydracP, drugStore_jawasil } from '../stores';
	export let unit;
	export let n = 1;

	export function handleDrugRemoval(drugId) {
		if (
			drugStore.update((currentDrug) => {
				return currentDrug.filter((drug) => drug.id != drugId);
			})
		);
		else {
			if (
				drugStore_hydracP.update((currentDrug) => {
					return currentDrug.filter((drug) => drug.id != drugId);
				})
			);
			else {
				if (
					drugStore_jawasil.update((currentDrug) => {
						return currentDrug.filter((drug) => drug.id != drugId);
					})
				);
			}
		}
	}
	// function retuerner() {
	// 	return currentDrug.filter((drug) => drug.id != drugId);
	// }

	// console.log(retuerner());
</script>
