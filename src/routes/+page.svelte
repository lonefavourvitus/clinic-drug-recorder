<script>
	import DrugList from '$lib/DrugList.svelte';
	import DrugsInputForm from '$lib/DrugsInputForm.svelte';
	let darkyMain = 1;
</script>

<main class:darkyMain>
	<div>
		<DrugsInputForm />
	</div>

	<DrugList />
</main>

<!-- <style>
	:global(body) {
		
		background: hsla(240, 50%, 7%, 1);
		color: red;
		font-size: 22rem;
	}
</style> -->
<style>
	main {
		height: 100vh;
	}
	.darkyMain {
		background: hsla(222, 100%, 10%, 1);
	}
</style>
