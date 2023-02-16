<script>
	import Button from '$lib/Button.svelte';
	import { gg } from '$lib/Func.svelte';
	export let varButton = 'smooth scroll true';
	export let mm = 'terent';
	let smoothScrollToggler = () => (
		(gg.behavior = gg.behavior === 'smooth' ? 'auto' : 'smooth'),
		varButton == 'smooth scroll true'
			? (varButton = 'smooth scroll false')
			: (varButton = 'smooth scroll true'),
		console.log('The button has been set to', varButton)
	);
</script>

<nav>
	<!-- {#each buttons as button} -->
	<!-- {/each} -->
	<!-- <Button Button={'Button2'} />
	<Button Button={'Button3'} />
	<Button Button={'Button4'} />
	<Button Button={'Button5'} /> -->
	<Button {varButton} onClick={smoothScrollToggler} />
	<Button
		varButton={'tester'}
		onClick={() =>
			mm === 'terent' ? ((mm = 'treesha'), console.log(mm)) : ((mm = 'terent'), console.log(mm))}
	/>
</nav>
