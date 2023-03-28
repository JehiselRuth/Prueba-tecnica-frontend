import { defineStore } from "pinia";

export const usePodcastStore = defineStore({
  id: "podcasts",
  state: () => ({
    podcasts: [],
  }),
  actions: {
    async fetchPodcasts() {
      await fetch("https://itunes.apple.com/us/rss/toppodcasts/limit=100/genre=1310/json")
        .then((response) => response.json())
        .then((data) => {
          // console.log(data.feed.entry);
          this.podcasts = data.feed.entry;
        })
        .catch((err) => {
          console.log(err);
        })
    },
  },
});