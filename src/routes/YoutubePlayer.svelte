<script lang="ts">
  import { onMount, tick } from "svelte";

  export function delayed(value, ms = 500) {
    return new Promise((f) => {
      setTimeout(() => f(value), ms);
    });
  }

  let { player = $bindable() } = $props();

  onMount(async () => {
    await delayed(null, 1000);
    onYouTubeIframeAPIReady();
  });
  function onPlayerStateChange(event) {}
  function onPlayerReady(event) {
    // onYouTubeIframeAPIReady();
  }

  function onYouTubeIframeAPIReady() {
    player = new YT.Player("player", {
      videoId: "M7lc1UVf-VE",
      playerVars: {
        playsinline: 1,
      },
      events: {
        onReady: onPlayerReady,
        onStateChange: onPlayerStateChange,
      },
    });
  }
</script>

<div class="flex-1 xl:col-span-2 row-span-1 col-span-1">
  <iframe
    loading="lazy"
    class="w-full h-full"
    title="ytiframe"
    id="player"
    src="https://www.youtube.com/embed/M7lc1UVf-VE?enablejsapi=1"
    frameborder="0"
  ></iframe>
</div>
