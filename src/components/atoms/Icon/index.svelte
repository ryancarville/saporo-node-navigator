<script lang="ts">
  import { Icon as SvelteIcon } from "svelte-awesome";
  export let data: any;
  export let style: string | undefined = undefined;
  export let scale: number | undefined = undefined;
</script>

<SvelteIcon {data} {style} {scale}/>