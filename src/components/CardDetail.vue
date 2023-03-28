<script setup>
import { usePodcastFavoriteStore } from "@/stores/storeFavorites";
import { ref } from "vue";
import { RouterLink } from "vue-router";

const favoriteStore = usePodcastFavoriteStore();

const props = defineProps({
  podcast: {
    type: Object,
  },
});

const podcast1 = ref({});

const sendPodcastFavorite = () => {
  favoriteStore.showPodcasts(props.podcast);
};


const podcastinfo = [
  {
    name: props.podcast.id.label,
    calories: 159,
  },
  // {
  //   name: 'KitKat',
  //   calories: 518,
  // },
]


</script>

<template>
  
  <div class="wrapper">
    <v-layout>
      <v-card
        v-on:click="sendPodcastFavorite" 
        to="/about"
        class="mx-auto"
        max-width="434"
        height="545"
        rounded="0"
        :elevation="isHovering ? 24 : 6"
      >
        
        <v-img width="18em" height="100%" align="center">
          <div class="imgPodcast" >
          <v-avatar color="grey" size="150" rounded="0" >
            <v-img cover :src="`${podcast['im:image'][1].label}`" ></v-img>
          </v-avatar>
          </div>

          <div class="titleCard" >
            <v-list-item :elevation="isHovering ? 24 : 1" align="left" class="text-black" >{{
              podcast["im:name"].label
            }}</v-list-item>
          </div>
          <div class="subtitleCard">
            <v-list-item align="left" class="text-grey" :elevation="isHovering ? 24 : 1" 
              >Authors: {{ podcast["im:artist"].label }}</v-list-item
            >
          </div>
          <div class="descriptionCard">
            <v-list-item align="left" class="text-grey" 
              >Description: 
              {{ podcast.summary.label }}</v-list-item
            >
          </div>
        </v-img>
      </v-card>
    </v-layout>

    <v-table>
    <thead>
      <tr>
        <th class="text-left">
          Title
        </th>
        <th class="text-left">
          Date
        </th>
      </tr>
    </thead>
    <tbody>
      <tr
        v-for="item in podcastinfo"
        :key="item.podcast"
      >
        <td>{{ item.name }}</td>
        <td>{{ item.calories }}</td>
      </tr>
    </tbody>
  </v-table>

  </div>


  
</template>

<style>
.wrapper {
  margin: 2em;
  
}
.imgPodcast  {
  margin: 1em;
}
.titleCard {
  font-size: larger;
  margin: 0.6em;
}
.subtitleCard {
  font-size: smaller;
  margin: 0.6em;
}
.descriptionCard  {
  align-items: flex-start;
  justify-content: flex-start;
}
</style>
