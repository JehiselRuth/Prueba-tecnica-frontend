<script setup>
import { usePodcastFavoriteStore } from "@/stores/storeFavorites";
import CardDetail from "../components/CardDetail.vue";

const favoriteStore = usePodcastFavoriteStore();

const props = defineProps({
  podcast: {
    type: Object,
  },
});
</script>

<template>
  <div
    class="container1"
    v-for="podcast in favoriteStore.podcastsFavorites"
    :key="podcast"
  >
    <CardDetail :podcast="podcast" />
  </div>
</template>

<style scoped>
@media (min-width: 1024px) {
  .container1 {
    min-width: 20em;
    justify-content: space-around;
  }
}
</style>
