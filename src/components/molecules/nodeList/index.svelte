<script lang="ts">
  // Node List Component
  // This component will render a list of the node passed from props
  // The expantion of a row and the addtion of a node to the navigator happens here
  import Icon from 'svelte-awesome';
	import { quintOut } from 'svelte/easing';
  import { slide, fade, fly } from 'svelte/transition';
  import { createEventDispatcher } from "svelte";
  import { shareAlt, plus, minus } from 'svelte-awesome/icons';
  import type { IMockData } from "../../../types/mockData";
  import type { IHistoryNode } from '../../../types/linkedListNode';
  import { Writable, writable } from 'svelte/store';

  // props
  export let nodes: IMockData[];

  // local vars
  const dispatch = createEventDispatcher();
  let exapndedNodeIdx: Writable<number> = writable(undefined);

  // reset open row and disatch action to add selected to to navigator
  function handlOpenNode(value: IHistoryNode) {
    dispatch('addNode', { id: value.id, name: value.name });
  };

  // if the row that is click is open, close it.  Else open it
  function handleExpand(idx: number) {
    exapndedNodeIdx.update((currIdx: number) => {
      if (currIdx === idx) currIdx = -1;
      else { currIdx = idx; }
      return currIdx;
    });
  }
</script>

{#if nodes.length}
  <section transition:fly="{{ delay: 200, y: 400, duration: 400 }}" >
    <h3>Nodes:</h3>
    <table class="nodeTableWrapper">
      {#each nodes as node, idx (node.id)}
        <tr
          class="nodeTableRow"
          on:click={() => handleExpand(idx)}
          title={$exapndedNodeIdx === idx ? `Close ${node.name}` : `Expand ${node.name}`}
        >
          <th>
            {#if $exapndedNodeIdx === idx}
              <Icon data={minus} style={'margin-right: 0.5em'} />
            {:else}
              <Icon data={plus} style={'margin-right: 0.5em'} />
            {/if}
            {node.name}
          </th>
          {#if $exapndedNodeIdx === idx}
            <td transition:slide="{{delay: 100, duration: 350, easing: quintOut }}">
              <p>{node.summary}</p>
              <span>Number of connected nodes: {node.connections.length}</span>
              <button
                type={'button'}
                on:click={() => handlOpenNode({id: node.id, name: node.name})}
                class="openNodeBtn"
                aria-label={`Open ${node.name}`}
                title={`Open ${node.name}`}
              >
                <Icon data={shareAlt} scale={1.2}/>
              </button>
            </td>
          {/if}
        </tr>
      {/each}
    </table>
  </section>
{:else}
  <section transition:fade="{{delay: 400,  duration: 300 }}" >
    <h3>No Connected Nodes</h3>
  </section>
{/if}

<style>
  section h3 {
    margin: 0;
  }
  .nodeTableWrapper {
    width: 100%;
    margin: 0 auto 0 auto;
    list-style: none;
    padding: 1em;
  }
  .nodeTableRow {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    padding: .5em;
    border-radius: .3em;
    cursor: pointer;
    margin: 0.2em 0 0 0;
  }
  .nodeTableRow:nth-child(even) {
    background-color: #f8f8ff;
    color: rgb(154, 154, 154);
  }
  .nodeTableRow:nth-child(odd) {
    color: rgb(255, 255, 255);
  }
  .nodeTableRow th {
    min-width: 5em;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  .openNodeBtn {
    float: right;
    width: 3em;
    height: 3em;
    cursor: pointer;
    border: none;
    background-color: var(--primary-color);
    border-radius: .3em;
    padding: .5em;
    text-align: center;
  }
  .openNodeBtn:hover {
    color: var(--primary-color);
    background-color: black;
  }
</style>
