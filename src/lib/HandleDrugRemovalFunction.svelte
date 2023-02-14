<script context="module">
	import { drugStorem } from '../stores';

	export function handleDrugRemoval(drugId) {
		drugStorem.update((currentDrugs) => {
			return currentDrugs.map((drug) => {
				// return [drug[0], drug[1], drug[2].filter((entry) => entry.id !== drugId)];
				return [drug[0], drug[1], drug[2].filter((entry) => entry.id !== drugId)];
			});
		});
	}
</script>

<!-- <script context="module">
	import { drugStorem } from '../stores';
	export let unit;
	export let n = 1; -->
