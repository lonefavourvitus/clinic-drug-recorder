<script context="module">
	import {
		drugStore,
		drugStore_hydracP,
		drugStore_jawasil,
		drugStore_emtrisil,
		newone
	} from '../stores';
	export let unit;
	export let n = 1;

	export function handleDrugRemoval(drugId) {
		function drugSpecifier(drugToBeRemoved) {
			if (
				drugToBeRemoved.update((currentDrug) => {
					return currentDrug.filter((drug) => drug.id != drugId);
				})
			);
		}
		let drugToBeRemovedArray = [
			drugSpecifier(drugStore),
			drugSpecifier(drugStore_hydracP),
			drugSpecifier(drugStore_jawasil),
			drugSpecifier(drugStore_emtrisil),
			drugSpecifier(newone)
		];
	}
</script>
