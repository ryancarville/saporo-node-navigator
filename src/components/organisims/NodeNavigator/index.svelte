<script lang="ts">
  // Node Navigator Component
  // This component contains all the sub components for the navigator
  import type { IHistoryNode, ILinkedListNode } from "../../../types/linkedListNode";
  import type { ILinkedList } from "../../../types/linkedList";
  import type { IMockData } from "../../../types/mockData";
  import { LinkedListNode } from "../../../utils/linkedListNode";
	import NodeList from '../../molecules/nodeList/index.svelte';
	import Navigator from '../../molecules/navigator/index.svelte';
	import NodeDetails from '../../molecules/nodeDetails/index.svelte';

	// props
	export let nodes: IMockData[];
	export let historyList: ILinkedList<IHistoryNode>;

  // local vars
	let currentNodes: IMockData[] = nodes;
	let currentNode: IMockData = undefined;

	// set the current node if id is passed and its connections
	// else reset to original state
	function setNodes(id?: string) {
		if (id) {
			currentNode = nodes.find(node => node.id === id);
			currentNodes = [...nodes.filter(node => currentNode.connections.includes(node.id))];
		} else {
			currentNode = undefined;
			currentNodes = nodes;
		}
	}

  // add the selected node is to the history list, set the state for the current node
	function handlAddNode(event: any): void {
		const {id, name} = event.detail;
		const newNode: ILinkedListNode<IHistoryNode> = new LinkedListNode({id, name});
		historyList.addNode(newNode);
		historyList = historyList;
		setNodes(id);
	}

  // update the state when back event happens (single step or jump to)
	function handleOnBack(event: any): void {
		const {historyList} = event.detail;
		setNodes(historyList.isEmpty() ? undefined : historyList.getLast().value.id);
	}
</script>

<section class={'nodeNavigatorWrapper'}>
  <Navigator
		bind:historyList
		on:onBack={handleOnBack}
	/>
	{#if currentNode}
  	<NodeDetails bind:node={currentNode} />
	{/if}
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
		on:addNode={handlAddNode}
	/>
</section>

<style>
  .nodeNavigatorWrapper h3 {
    margin: 0;
  }
</style>
