<script context="module">
	export const qq = aa;
	export const gg = { behavior: 'smooth' };
	console.log(gg);

	function aa(node, options = {}) {
		const nodeId = node.getAttribute('id');

		const scrollOptions = {
			behavior: gg.behavior || 'smooth',
			...options
		};

		node.scrollIntoView(scrollOptions);

		node.style.backgroundColor = 'hsla(250, 50%, 50%, 1)';
		setTimeout(() => {
			node.style.backgroundColor = '';
		}, 4000);
		console.log(nodeId);
		console.log('Node', nodeId, 'is mounted');

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
