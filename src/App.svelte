<script lang="ts">
  // Main app entry point
	import type { IMockData } from "./types/mockData";
	import NodeNavigator from '../src/components/organisims/NodeNavigator/index.svelte';
  import { LinkedList } from "./utils/linkedList";
  import type { ILinkedList } from "./types/linkedList";

	// props
	export let nodes: IMockData[];
	export let historyList: ILinkedList = new LinkedList();
</script>

<main>
	<header class={'headerWrapper'}>
		<img
			src={'https://global-uploads.webflow.com/604461bb39ddee57e19874b2/604461bb39ddee741a987696_White%20logo%20-%20no%20background.svg'}
			alt={'Saporo Logo'}
			title={'Saporo: Order In Chaos'}
			class={'saporoLogo'}
		/>
	</header>
	<NodeNavigator {nodes} bind:historyList />
</main>

<style>
	main {
		width: 100vw;
		height: auto;
		padding: 1em;
		margin: 0 auto 0 auto;
		background-image: linear-gradient(90deg, #ef4136, #fbb040);
		overflow: auto;
		display: flex;
		flex-direction: column;
	}
	.headerWrapper {
		width: 90vw;
	}
	.saporoLogo {
		float: right;
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
