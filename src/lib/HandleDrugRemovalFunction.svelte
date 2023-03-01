<script context="module">
	import { drugStore } from '../stores';

	export function handleDrugRemoval(drugId) {
		drugStore.update((currentDrugs) => {
			return currentDrugs.map((drug) => {
				return [drug[0], drug[1], drug[2].filter((entry) => entry.id !== drugId)];
			});
		});
	}
</script>
