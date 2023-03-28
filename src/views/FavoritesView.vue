<script setup>
import { usePodcastFavoriteStore } from "@/stores/storeFavorites";
import CardDetail from "../components/CardDetail.vue";
import CardItem from "../components/CardItem.vue";
const favoriteStore = usePodcastFavoriteStore();
const props = defineProps({
  podcast: {
    type: Object,
  },
});
</script>

<template>
  <div class="title">
    <h1>Podcast detail</h1>
  </div>
  <main>
    <div v-for="podcast in favoriteStore.podcastsFavorites" :key="podcast">
      <CardDetail :podcast="podcast" />
    </div>
    
  </main>
</template>

<style>
h1  {
  color: gray;
  font-size: 2em;
  margin-left: 3em;
}
@media (min-width: 1024px) {
  .about {
    min-height: 100vh;
    display: flex;
  
  }
}
</style>
