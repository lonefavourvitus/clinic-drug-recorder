<script>
	export let varButton;
	export let onClick = () => {};
	export let current = 'foo';
	let dark = true;

	function handleClick() {
		onClick();
		current === 'foo' ? (current = 'bar') : (current = 'foo');
	}
</script>

<button class={($$props.class, current === 'foo' ? 'selected' : '')} on:click={handleClick}
	>{varButton}</button
>

<style>
	button {
		background: hsla(222, 50%, 85%, 1);
		border: none;
		padding: 5px 3px;
		letter-spacing: 0.5px;
		width: 75px;
		/* padding: 8px; */

		border-radius: 5px;
		transition: all ease-in-out 0.3s;
		margin-left: 0.5rem;
	}
	/* button:hover {
		background: hsla(222, 50%, 80%, 1);
		transition: all ease-in-out 0.3s;
	} */

	.dark {
		background: hsla(222, 40%, 30%, 1);
		color: red;
	}
	.selected {
		background: hsla(222, 40%, 30%, 1);
		color: white;
	}
</style>
