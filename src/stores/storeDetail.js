import { defineStore } from "pinia";

export const usePodcastStoreDetail = defineStore({
  id: "podcastdetail",
  state: () => ({
    podcastDetail: [],
  }),
  actions: {
    async fetchDetail() {
      await fetch(`https://api.allorigins.win/get?
      url=${encodeURIComponent('https:// itunes.apple.com/lookup?id={podcastId}')}`)
      .then((response) => response.json())
      .then((data) => {
        this.podcastDetail = data;
        console.log(data);
      })
      .catch((err) => {
        console.log(err);
      })
  },
},
});