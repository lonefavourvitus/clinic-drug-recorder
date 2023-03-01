<script>
	import { slide } from 'svelte/transition';

	import Button from '$lib/Button.svelte';
	import { doubleLinerValue, fillColour } from '../stores';
	import { scrollBehaviourProperty } from '$lib/Func.svelte';
	import SettingsIcon from '$lib/SettingsIcon.svelte';
	import AngleIcon from '$lib/angle.svelte';
	// import { darkyNav, darkyLi, DarkyP } from '../stores';
	import { menuCompDarkProps } from '../stores';
	// import { current } from '$lib/Button.svelte';

	let hh = 'on';
	let mm = 'terent';
	let cc = 'single line';

	let smoothScrollToggler = () => (
		(scrollBehaviourProperty.behavior =
			scrollBehaviourProperty.behavior === 'smooth' ? 'auto' : 'smooth'),
		hh === 'on' ? (hh = 'off') : (hh = 'on'),
		console.log('The button has been set to', hh)
		// (activeButton = !activeButton)
	);
	let hhh = () =>
		mm === 'terent' ? ((mm = 'treesha'), console.log(mm)) : ((mm = 'terent'), console.log(mm));
	function nicey() {
		$doubleLinerValue === 15.3 + 'rem';
		$fillColour === 'hsla(222, 50%, 85%, 1)'
			? (($doubleLinerValue = 'max-content'), console.log($doubleLinerValue), (cc = 'single line'))
				? (($fillColour = 'hsla(222, 50%, 25%, 1)'), console.log($fillColour), (cc = 'single line'))
				: (($doubleLinerValue = 15.3 + 'rem'), console.log($doubleLinerValue), (cc = 'break line'))
			: (($fillColour = 'hsla(222, 50%, 85%, 1)'), console.log($fillColour), (cc = 'break line'));
		console.log($doubleLinerValue);
	}
	let isExpanded = false;
	// let activeButton = false;
	// let activeButton = false;

	function clickHandler() {
		isExpanded = !isExpanded;
	}
</script>

<nav class:darkyNav={$menuCompDarkProps.darkyNav}>
	<!-- <div>rrr</div> -->
	<main>
		<!-- <Button varButton={'settings'} onClick={clickHandler}>Menu</Button> -->
		<SettingsIcon onClick={clickHandler} />
		<AngleIcon />
		<!-- <img {soc} alt="yetye" /> -->
	</main>
	<!-- <img alt="settings icon" src="/../settings-icon.svg" />
	<div><img class="blog2-svg" src="$lib/settings-icon.svg" alt="business-man-icon" /></div> -->

	{#if isExpanded}
		<ul transition:slide>
			<li class:darkyLi={$menuCompDarkProps.darkyLi}>
				<p class:darkyP={$menuCompDarkProps.darkyP}>smooth scroll</p>
				<Button varButton={hh} onClick={smoothScrollToggler} />
			</li>

			<li class="parent" class:darkyLi={$menuCompDarkProps.darkyLi}>
				<p class:darkyP={$menuCompDarkProps.darkyP}>drug unit line</p>
				<Button class="childclass" varButton={cc} onClick={nicey} />
			</li>
		</ul>
	{/if}
</nav>

<style>
	main {
		display: flex;
		align-items: center;
		justify-content: space-between;
		/* margin-top: -10px; */
		/* padding-top: 33px; */
	}
	nav {
		display: flex;
		flex-direction: column;
		width: 17vw;
		margin-right: 1rem;

		border: 1.5px solid hsla(222, 50%, 85%, 1);
		border-radius: 5px;
		/* box-shadow: 1px 1px 10px 1px grey; */
		height: fit-content;
		align-self: center;
		justify-self: center;
	}
	.darkyNav {
		border: 1.5px solid hsla(222, 50%, 15%, 1);
	}
	ul {
		/* padding: -22px; */
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
		/* background: lightsalmon; */
		width: 100%;
		margin: 0;
		padding: 0;
	}

	p {
		display: flex;
		align-items: center;
		justify-content: center;
		/* padding: 0 !important; */
		margin: 0 !important;
		color: hsla(0, 0%, 40%, 1);
		letter-spacing: 0.3px;
		/* font-size: 0.rem; */
	}

	li {
		margin: 0.1rem 0;
		/* background: lightgreen; */
		background: hsla(222, 50%, 95%, 1);
		font-size: 0.8rem;
		color: hsla(0, 0%, 25%, 1);
		display: flex;
		width: 100%;

		padding: 6px 0;
		justify-content: space-around;
	}

	.darkyLi {
		background: hsla(222, 50%, 15%, 1);
		color: hsla(0, 0%, 100%, 1);
	}
	ul li {
		list-style: none;
		display: flex;
	}
	.darkyP {
		color: hsla(0, 0%, 90%, 1);
		/* color: hsla(0, 0%, 40%, 1); */
	}
</style>
