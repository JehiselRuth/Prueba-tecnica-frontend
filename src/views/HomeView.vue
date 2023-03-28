<script setup>
import CardItem from "../components/CardItem.vue";

import { onBeforeMount } from "vue";
import { usePodcastStore } from "../stores/store.js";
import { ref, onBeforeUnmount } from 'vue'

const podcastStore = usePodcastStore();

onBeforeMount(() => {
  getPodcast();
});

const getPodcast = async () => {
  await podcastStore.fetchPodcasts();

  }

</script>

<template>
 
  <main>
   
    <CardItem 
      v-for="podcast in podcastStore.podcasts.splice(2, 20)"
      :key="podcast"
      :podcast="podcast"
    />


  </main>
</template>
<style>
main {
  border-radius: 10px;
  width: 100%;
  margin: 1em;
  column-count: 4;
}


@media (max-width: 1200px) {
  main {
    width: 100%;
    grid-template-columns: repeat(3, 1fr);
  }
}

@media (max-width: 400px) {
  main {
    width: 100%;
    grid-template-columns: 1fr;
  }
}
</style>