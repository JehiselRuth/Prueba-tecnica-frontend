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
  
};

const podcastinfo = [
  {
    title: props.podcast.id.label,
    date: 159,
    duration: 1,
  },
];
</script>

<template>
  <main>
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
            <div class="imgPodcast">
              <v-avatar color="grey" size="150" rounded="0">
                <v-img cover :src="`${podcast['im:image'][1].label}`"></v-img>
              </v-avatar>
            </div>

            <div class="titleCard">
              <v-list-item
                :elevation="isHovering ? 24 : 1"
                align="left"
                class="text-black"
                >{{ podcast["im:name"].label }}</v-list-item
              >
            </div>
            <div class="subtitleCard">
              <v-list-item
                align="left"
                class="text-grey"
                :elevation="isHovering ? 24 : 1"
                >Authors: {{ podcast["im:artist"].label }}</v-list-item
              >
            </div>
            <div class="descriptionCard">
              <v-list-item align="left" class="text-grey"
                ><p>Description:</p>
                {{ podcast.summary.label }}</v-list-item
              >
            </div>
          </v-img>
        </v-card>
      </v-layout>
    </div>

    <v-table
      id="table-content"
      :class="`elevation-${isHovering ? 24 : 6}`"
      class="mx-auto"
      max-width="434"
      height="545"
      rounded="0"
    >
      <thead>
        <tr>
          <th class="text-left" style="font-weight: bold; font-size: larger">
            Episodes:
          </th>
        </tr>
      </thead>
      <tbody style="m-4">
        <th class="text-left" style="font-size: smaller">Title</th>
        <th class="text-left" style="font-size: smaller">Date</th>
        <th class="text-left" style="font-size: smaller">Duration</th>
        <tr v-for="item in podcastinfo" :key="item.podcast">
          <td>{{ item.title }}</td>
          <td>{{ item.date }}</td>
          <td>{{ item.duration }}</td>
        </tr>
      </tbody>
    </v-table>
  </main>
</template>

<style>
main {
  column-count: 2;
}
.wrapper {
  margin-bottom: 2em;
  flex-wrap: wrap;
}
.imgPodcast {
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
.descriptionCard {
  align-items: flex-start;
  justify-content: flex-start;
}
td {
  color: rgb(129, 172, 228);
}
p {
  font-weight: bolder;
  color: rgb(48, 48, 48);
}
#table-content {
  min-width: 12vh;
}
.text-left {
  padding: 1em;
}
</style>
