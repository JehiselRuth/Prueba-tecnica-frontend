<script setup>
import CardItem from "../components/CardItem.vue";

import { onBeforeMount } from "vue";
import { usePodcastStore } from "../stores/store.js";
import { ref, onBeforeUnmount } from "vue";

const podcastStore = usePodcastStore();

onBeforeMount(() => {
  getPodcast();
});

const getPodcast = async () => {
  await podcastStore.fetchPodcasts();
};

const search = "";
const headers = [
  {
    align: "start",
    key: "podcast",
    sortable: false,
    title: "authors",
  },
  { key: "authors" },
];
</script>

<template>
  <header>
    <v-text-field
      class="search"
      v-model="search"
      append-icon="mdi-magnify"
      label="Filter podcast"
      single-line
      hide-details
    ></v-text-field>
  </header>

  <main>
    <CardItem
      v-for="podcast in podcastStore.podcasts.splice(2, 20)"
      :key="podcast"
      :podcast="podcast"
    />
  </main>
</template>
<style scoped>
.search {
  max-width: 24em;
}
main {
  border-radius: 10px;
  width: 100%;
  column-count: 4;
}
</style>
