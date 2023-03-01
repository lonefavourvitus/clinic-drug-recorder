<script context="module">
	export let time;
	export const nodeUnitFunction = smoothAutoScrollToggler;
	export const scrollBehaviourProperty = { behavior: 'smooth' };
	console.log(scrollBehaviourProperty);

	function smoothAutoScrollToggler(node, options = {}) {
		time = new Date().toLocaleTimeString();

		const nodeId = node.getAttribute('id');

		const scrollOptions = {
			behavior: scrollBehaviourProperty.behavior || 'smooth',
			...options
		};

		node.scrollIntoView(scrollOptions);

		node.style.backgroundColor = 'hsla(250, 50%, 50%, 1)';
		setTimeout(() => {
			node.style.backgroundColor = '';
		}, 4000);
		console.log(nodeId);
		console.log('Node', nodeId, 'is mounted');
		console.log(new Date().toLocaleTimeString());

		return {
			destroy() {
				console.log(
					'Alert!, Node',
					nodeId,
					'just got unmounted, removed from the DOM and destroyed😊'
				);
			}
		};
	}
</script>
