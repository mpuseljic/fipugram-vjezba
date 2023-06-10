<template>
  <div class="row">
    <div class="col-8">
      <instagram-card
        v-for="card in filteredCards"
        :key="card.url"
        :info="card"
      />
    </div>
    <div class="col-4">Sidebar</div>
  </div>
</template>

<script>
// @ is an alias to /src
import InstagramCard from "@/components/InstagramCard.vue";
import store from "@/store";

let cards = [];
cards = [
  {
    url: "https://picsum.photos/id/1/200/300",
    description: "laptop",
    time: "few minutes ago...",
  },
  {
    url: "https://picsum.photos/id/2/200/300",
    description: "laptop #2",
    time: "hour ago...",
  },
  {
    url: "https://picsum.photos/id/3/200/300",
    description: "laptop #3",
    time: "few hours ago...",
  },
];

export default {
  name: "HomeView",
  data() {
    return {
      //kljuc vrijednost
      cards,
      store,
    };
  },
  components: {
    InstagramCard,
  },
  computed: {
    //navodimo kao objekt, unutra navodimo nekakve funckije koje nam služe za obradu podataka
    // filteredCards() {
    // let termin = this.store.searchTerm;
    //   let newCards = [];

    //   for (let card of this.cards) {
    //     if (card.description.indexOf(termin) >= 0) {
    //       newCards.push(card);
    //     }
    //   }
    //   return newCards;
    // },
    filteredCards(){
      let termin = this.store.searchTerm;
      return this.cards.filter(card => card.description.includes(termin))
    }
  },
};
</script>
