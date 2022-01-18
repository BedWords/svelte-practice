<script>
	//import Key from './Key.svelte';
	import Game from "./Game.svelte";
	export let name;
	let correctWord = 'midna';
</script>

<main>
	<h1>Cello {name}!</h1>
	<Game {correctWord}/>
</main>



<style>
	main {
		text-align: center;
		padding: 1em;
		max-width: 640px;
		margin: 0 auto;
	}

	h1 {
		color: #ff3e00;
		text-transform: none;
		font-size: 6em;
		font-weight: 100;
	}

	@media (min-width: 640px) {
		main {
			max-width: none;
		}
	}
</style>