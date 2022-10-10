<script lang="ts">
  // Node List Component
  // This component will render a list of the node passed from props
  // The expantion of a row and the addtion of a node to the navigator happens here
  import Icon from 'svelte-awesome';
	import { quintOut } from 'svelte/easing';
  import { slide } from 'svelte/transition';
  import { createEventDispatcher } from "svelte";
  import { shareAlt, plus, minus } from 'svelte-awesome/icons';
  import type { IMockData } from "../../../types/mockData";
  import type { IHistoryNode } from '../../../types/linkedListNode';

  // props
  export let nodes: IMockData[];

  // local vars
  const dispatch = createEventDispatcher();
  let exapndedNodeIdx: number = undefined;

  // reset open row and disatch action to add selected to to navigator
  function onOpenConnection(value: IHistoryNode) {
    exapndedNodeIdx = undefined;
    dispatch('newId', { id: value.id, name: value.name })
  };

  // if the row that is click is open, close it.  Else open it
  function handleExpand(idx: number) {
    if (exapndedNodeIdx === idx) exapndedNodeIdx = undefined;
    else { exapndedNodeIdx = idx; }
  }
</script>

{#if nodes.length}
  <section>
    <table class="nodeTableWrapper">
      {#each nodes as node, idx}
        <tr
          class="nodeTableRow"
          on:click={() => handleExpand(idx)}
          title={exapndedNodeIdx === idx ? `Close ${node.name}` : `Expand ${node.name}`}
        >
          <th>
            {#if exapndedNodeIdx === idx}
              <Icon data={minus} style={'margin-right: 0.5em'} />
            {:else}
              <Icon data={plus} style={'margin-right: 0.5em'} />
            {/if}
            {node.name}
          </th>
          {#if exapndedNodeIdx === idx}
            <td transition:slide="{{delay: 100, duration: 350, easing: quintOut }}">
              <p>{node.summary}</p>
              <span>Number of connected nodes: {node.connections.length}</span>
              <button
                type={'button'}
                on:click={() => onOpenConnection({id: node.id, name: node.name})}
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
{/if}

<style>
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
    background-color: #ef4236;
    border-radius: .3em;
    padding: .5em;
    text-align: center;
  }
  .openNodeBtn:hover {
    color: #ef4236;
    background-color: black;
  }
</style>
