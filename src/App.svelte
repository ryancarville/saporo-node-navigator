<script lang="ts">
  // Main app entry point
	import NodeNavigator from '../src/components/organisims/NodeNavigator/index.svelte';
  import { fade } from "svelte/transition";
	import { data } from './data';
	import { setContext } from 'svelte';

	// set the context for the app
	setContext('nodes', data);
</script>

<main transition:fade="{{delay: 1000, duration: 500}}">
	<header class={'headerWrapper'}>
		<h1>Node Navigator</h1>
		<img
			src={'https://global-uploads.webflow.com/604461bb39ddee57e19874b2/604461bb39ddee741a987696_White%20logo%20-%20no%20background.svg'}
			alt={'Saporo - Order In Chaos'}
			title={'Saporo - Order In Chaos'}
			class={'saporoLogo'}
		/>
	</header>
	<NodeNavigator />
</main>

<style>
	main {
		width: 100vw;
		height: auto;
		padding: 0 1em;
		margin: 0 auto 0 auto;
		background-image: linear-gradient(90deg, var(--primary-color), var(--secondary-color));
		overflow: auto;
		display: flex;
		flex-direction: column;
	}
	.headerWrapper {
		width: 90vw;
		display: flex;
		justify-content: space-between;
		align-items: center;
	}
	.saporoLogo {
		max-width: 10em;
	}
	@media (min-width: 700px) {
		main {
			border-radius: 0.3em;
			max-width: 40vw;
			box-shadow: 0em 0em 1.3em rgb(173, 172, 172);
			height: 90vh;
		}
		.headerWrapper {
			width: 100%;
		}
	}
</style>
