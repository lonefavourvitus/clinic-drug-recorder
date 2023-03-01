<script>
	import Button from '$lib/Button.svelte';
	// import { darkyNav, darkyLi, darkyP } from '../stores';
	import { menuCompDarkProps } from '../stores';
	console.log($menuCompDarkProps);
	let ThemeToggler = () => {
		($menuCompDarkProps.darkyNav === 1
			? ($menuCompDarkProps.darkyNav = 0)
			: ($menuCompDarkProps.darkyNav = 1))(
			$menuCompDarkProps.darkyLi === 1
				? ($menuCompDarkProps.darkyLi = 0)
				: ($menuCompDarkProps.darkyLi = 1)
		)(
			$menuCompDarkProps.darkyP === 1
				? ($menuCompDarkProps.darkyP = 0)
				: ($menuCompDarkProps.darkyP = 1)
		);
	};
	// let ThemeToggler = () =>
	// 	($menuCompDarkProps.darkyNav === 1
	// 		? ($menuCompDarkProps.darkyNav = 0)
	// 		: ($menuCompDarkProps.darkyNav = 1))(
	// 		$menuCompDarkProps.darkyLi === 1
	// 			? ($menuCompDarkProps.darkyLi = 0)
	// 			: ($menuCompDarkProps.darkyLi = 1)
	// 	)(
	// 		$menuCompDarkProps.darkyP === 1
	// 			? ($menuCompDarkProps.darkyP = 0)
	// 			: ($menuCompDarkProps.darkyP = 1)
	// 	);
</script>

<Button onClick={ThemeToggler} />
