<script>
	export let varButton;
	export let onClick = () => {};

	function handleClick() {
		onClick();
	}
</script>

<button on:click={handleClick}>{varButton}</button>
