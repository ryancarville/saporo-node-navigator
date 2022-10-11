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
  import { LinkedList } from "../../../utils/linkedList";
	import { getContext } from 'svelte';

	// nodes from context
	let nodes: IMockData[] = getContext('nodes');

  // local vars
	let historyList: ILinkedList<IHistoryNode> = new LinkedList<IHistoryNode>();
	let currentNodes: IMockData[] = nodes;
	let currentNode: IMockData = undefined;

	// set the current node and its connections if id is passed
	// else reset to original state
	function handelSetNodes(event: any): void {
		const { id } = event.detail;
		if (id) {
			currentNode = nodes.find(node => node.id === id);
			currentNodes = [...nodes.filter(node => currentNode.connections.includes(node.id))];
		} else {
			currentNode = undefined;
			currentNodes = nodes;
		}
	}

  // add the selected node to the history list then set the state for the current node
	function handelAddNode(event: any): void {
		const {id, name} = event.detail;
		const newNode: ILinkedListNode<IHistoryNode> = new LinkedListNode({id, name});
		historyList.addNode(newNode);
		historyList = historyList;
		handelSetNodes(event);
	}
</script>

<section>
  <Navigator
		bind:historyList
		on:onBack={handelSetNodes}
	/>
	{#if currentNode}
  	<NodeDetails bind:node={currentNode} />
	{/if}
  <NodeList
		bind:nodes={currentNodes}
		on:addNode={handelAddNode}
	/>
</section>
