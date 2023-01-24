<script>
	import DrugList from '$lib/DrugList.svelte';
	// import DrugList_hydracP from '$lib/DrugList_hydracP.svelte';
	import DrugsInputForm from '$lib/DrugsInputForm.svelte';
	// // Function to format 1 in 01
	// var zeroFill = (n) => {
	// 	return ('0' + n).slice(-2);
	// };

	// // Creates interval
	// const interval = setInterval(() => {
	// 	// Get current time
	// 	const now = new Date();

	// 	// Format date as in mm/dd/aaaa hh:ii:ss
	// 	const dateTime =
	// 		zeroFill(now.getMonth() + 1) +
	// 		'/' +
	// 		zeroFill(now.getUTCDate()) +
	// 		'/' +
	// 		now.getFullYear() +
	// 		' ' +
	// 		zeroFill(now.getHours()) +
	// 		':' +
	// 		zeroFill(now.getMinutes()) +
	// 		':' +
	// 		zeroFill(now.getSeconds());

	// 	// Display the date and time on the screen using div#date-time
	// 	// 	document.getElementById('date-time').innerHTML = dateTime;
	// }, 1000);
	// let time = newDate();
</script>

<main>
	<!-- <div>{timae}</div> -->
	<DrugList />
	<!-- <DrugList_hydracP /> -->
	<DrugsInputForm />
</main>
