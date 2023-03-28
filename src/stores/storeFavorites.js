import { defineStore } from "pinia";

export const usePodcastFavoriteStore = defineStore({
  id: "favPodcasts",
  state: () => ({
    podcastsFavorites: [],
  }),
  actions: {
    showPodcasts(podcast) {
        if(this.podcastsFavorites.indexOf(podcast) === -1){
            this.podcastsFavorites.push(podcast)
        }
// console.log(podcast);
    },
  },
});