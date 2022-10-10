<script lang="ts">
  // Node Navigator Component
  // This component contains all the sub components for the navigator
  import type { IMockData } from "../../../types/mockData";
	import Navigator from '../../molecules/navigator/index.svelte';
	import NodeDetails from '../../molecules/nodeDetails/index.svelte';
	import NodeList from '../../molecules/nodeList/index.svelte';
  import type { ILinkedListNode } from "../../../types/linkedListNode";
  import type { ILinkedList } from "../../../types/linkedList";
  import { LinkedListNode } from "../../../utils/linkedListNode";

	// props
	export let nodes: IMockData[];
	export let historyList: ILinkedList;

  // local vars
	let currentNodes: IMockData[] = nodes;
	let currentNode = undefined;
	let closeAllRows: boolean = true;

  // add the selected node is to the history list, set the state for the current node and filter all nodes for its connections
	function handleCurrentId(event: any) {
		closeAllRows = true;
		const {id, name} = event.detail;
		const newNode: ILinkedListNode = new LinkedListNode({id, name});
		historyList.addNode(newNode);
		historyList = historyList;
		currentNode = nodes.find(node => node.id === newNode.value.id);
		currentNodes = [...nodes.filter(node => currentNode.connections.includes(node.id))];
	}

  // update the state when back event happens (single step or jump to)
  // will reset to the orignal state if no nodes are in the history list
	function handleOnBack(event: any) {
		closeAllRows = true;
		const {historyList} = event.detail;
		currentNode = historyList.isEmpty() ? undefined : nodes.find(node => node.id === historyList.getLast().value.id);
		currentNodes = historyList.isEmpty() ? nodes : [...nodes.filter(node => currentNode.connections.includes(node.id))];
	}
</script>

<section class={'nodeNavigatorWrapper'}>
  <Navigator
		bind:historyList
		on:onBack={handleOnBack}
	/>
  <NodeDetails bind:node={currentNode} />
  {#if historyList.isEmpty()}
		<h3>Nodes:</h3>
	{:else}
		{#if currentNode.connections.length}
    	<h3>Connected Nodes:</h3>
		{:else}
			<h3>No Connected Nodes</h3>
		{/if}
  {/if}
  <NodeList
		bind:nodes={currentNodes}
		on:newId={handleCurrentId}
	/>
</section>

<style>
  .nodeNavigatorWrapper h3 {
    margin: 0;
  }
</style>
