<script lang="ts">
  // Curent Node Details Component
  // This component displays the details of the current selected node
  // Only render if there is a node to display
  import type { IMockData } from "../../../types/mockData";

  // props
  export let node: IMockData;
</script>

{#if node}
  <article class="detailsWrapper">
    <h2>{node.name}</h2>
    {node.description}
  </article>
{/if}

<style>
  .detailsWrapper {
    width: 80%;
    display: flex;
    flex-direction: column;
    margin: 0 auto 2em auto;
  }
</style>
