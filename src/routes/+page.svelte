<script lang="ts">
  import type { PlaylistItem } from "$lib";
  import LiveStreams from "./LiveStreams.svelte";
  import YoutubePlayer from "./YoutubePlayer.svelte";
  let player = $state();
  let currentVideoId: PlaylistItem | undefined = $state();
</script>

<svelte:boundary>
  <LiveStreams
    bind:currentVideoId
    onclick={(item: PlaylistItem) => {
      player.loadVideoById(item.id.videoId);
    }}
  />

  {#snippet pending()}
    <p>loading items...</p>
  {/snippet}
</svelte:boundary>

<svelte:boundary>
  <YoutubePlayer bind:player />

  {#snippet pending()}
    <p>loading player...</p>
  {/snippet}
</svelte:boundary>

<svelte:head>
  <script src="https://www.youtube.com/iframe_api"></script>
</svelte:head>
