<script lang="ts">
  import favicon from "$lib/assets/favicon.svg";
  import "virtual:uno.css";
  import "../app.css";

  let { children } = $props();
</script>

<svelte:head>
  <link rel="icon" href={favicon} />
  <title>chillstreams</title>
</svelte:head>

<div
  class="grid grid-rows-2 xl:flex-row h-full dark:text-white text-black xl:grid-cols-3 xl:grid-rows-1"
>
  {@render children?.()}
</div>
