<script setup>
import { usePodcastFavoriteStore } from "@/stores/storeFavorites";
import { ref } from "vue";

const favoriteStore = usePodcastFavoriteStore();

const props = defineProps({
  podcast: {
    type: Object,
  },
});

const podcast1 = ref({});

const sendPodcastFavorite = () => {
  favoriteStore.showPodcasts(props.podcast);

  alert("Para volver a la lista haz click en PODCASTER");
};
</script>

<template>
  <div class="wrapper">
    <v-layout>
      <v-card
        v-on:click="sendPodcastFavorite"
        to="/about"
        class="mx-auto"
        max-width="434"
        height="270"
        rounded="0"
      >
        <v-img width="18em" height="100%" align="center">
          <v-avatar color="grey" size="150" rounded="10">
            <v-img cover :src="`${podcast['im:image'][2].label}`"></v-img>
          </v-avatar>
          <div class="titleCard">
            <v-list-item align="center" class="text-black">{{
              podcast["im:name"].label
            }}</v-list-item>
          </div>
          <div class="subtitleCard">
            <v-list-item align="center" class="text-grey"
              >Authors: {{ podcast["im:artist"].label }}</v-list-item
            >
          </div>
        </v-img>
      </v-card>
    </v-layout>
  </div>
</template>

<style>
.wrapper {
  margin-bottom: 2em;
}

.titleCard {
  font-size: larger;
}
.subtitleCard {
  font-size: smaller;
}
</style>
