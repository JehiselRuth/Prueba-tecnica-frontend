import { defineStore } from "pinia";

export const usePodcastStoreDetail = defineStore({
  id: "podcastdetail",
  state: () => ({
    podcastDetail: [],
  }),
  actions: {
    async fetchDetail() {
      await fetch(`https://api.allorigins.win/get?url=${encodeURIComponent('https:// itunes.apple.com/lookup?id={podcastId}')}`)
      .then(response => {
        if (response.ok) return response.json()
        throw new Error('Network response was not ok.')
      })
      .then(data => console.log(data.contents))
      .then((data) =>  {this.podcastsDetail = data;
      console.log(response);
     })
      .catch((err) => {
        console.log(err);
      })
 },
  },
});