<script lang="ts">
  // Navigator Component
  // This component renders the history navigator for the selected nodes
  import Icon from 'svelte-awesome';
  import { createEventDispatcher } from "svelte";
  import { arrowRight, backward } from 'svelte-awesome/icons';
  import type { ILinkedList } from '../../../types/linkedList';
  import type { IHistoryNode } from '../../../types/linkedListNode';

  // props
  export let historyList: ILinkedList<IHistoryNode>;

  // local var
  const dispatch = createEventDispatcher();

  // remove nodes from the linked list and dispatch updated history list
  function handleBack() {
    const idx: number = historyList.size === 1 ? 0 : historyList.size - 1;
    historyList.removeNodes(idx);
    historyList = historyList;
    dispatch('onBack',{ historyList });
  }

  // when a node in the history tree is clicked, clear history up to that node and dispatch the updated history list
  function handleDirectNodeClick(idx: number) {
    historyList.removeNodes(idx);
    historyList = historyList;
    dispatch('onBack',{ historyList });
  }
</script>

<nav>
  {#if !historyList.isEmpty()}
    <button
      type={'button'}
      on:click={handleBack}
      disabled={historyList.isEmpty()}
      aria-label={'Back'}
      title={'Back one node'}
      class={'backBtn'}
    >
      <Icon data={backward} scale={1.3}/>
    </button>
  {/if}
  {#if !historyList.isEmpty()}
    {#each historyList.listAllValues() as value, idx}
      <button
        type={'button'}
        on:click={() => handleDirectNodeClick(idx)}
        class={"linkedNode"}
        title={`Back to node ${value.name}`}
        disabled={historyList.size - 1 === idx}
      >
        {value.name} <Icon data={arrowRight} scale={1.3}/>
      </button>
    {/each}
  {/if}
</nav>

<style>
  nav {
    padding: 0.4em;
    display: flex;
    justify-content: flex-start;
    flex-wrap: wrap;
    width: auto;
    line-height: 2em;
  }
  .backBtn {
    cursor: pointer;
    background-color: transparent;
    border: none;
    color: white;
  }
  .backBtn:hover {
    color: rgb(70, 70, 70);
  }
  .linkedNode {
    min-width: 5.8em;
    cursor: pointer;
    background-color: transparent;
    border: none;
    color: white;
    display: flex;
    justify-content: space-around;
    font-size: 1.1em;
  }
  .linkedNode:last-child {
    text-decoration: underline;
    font-weight: 800;
    cursor: auto;
  }
  .linkedNode:last-child:hover {
    color: white;
  }
  .linkedNode:hover {
    color: rgb(255, 164, 85);
  }
</style>
