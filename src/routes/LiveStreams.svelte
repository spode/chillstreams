<script lang="ts">
  let { onclick, currentVideoId = $bindable() } = $props();
  import type { PlaylistItem } from "$lib";
  import { getLivestreamsByChannel } from "./data.remote";

  let items: PlaylistItem[] =
    (await getLivestreamsByChannel("UCSJ4gkVC6NrvII8umztf0Ow")).items;
</script>

<div
  class="overflow-auto flex-1 row-span-1 grid grid-cols-[repeat(auto-fit,minmax(300px,1fr))] gap-2"
>
  {#each items as item}
    <button
      class="cursor-pointer {currentVideoId == item.id.videoId ? "dark:bg-gray-700 bg-orange-200" : "dark:bg-gray-800 bg-orange-300"} flex flex-row items-center gap-2 lg:text-xl text-left h-24 xl:h-32 rounded-lg"
      onclick={() => {
        currentVideoId = item.id.videoId;
        onclick(item);
      }}
    >
      <img
        class="h-full aspect-square object-cover rounded"
        src={item.snippet.thumbnails.medium.url}
        alt=""
      >
      <div>{item.snippet.title}</div>
    </button>
  {/each}
</div>
