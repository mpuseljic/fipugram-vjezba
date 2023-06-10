<template>
  <div class="row">
    <div class="col-8">
      <instagram-card v-for="card in cards" :key="card" :info="card"/>
    </div>
    <div class="col-4">Sidebar</div>
  </div>
</template>

<script>
// @ is an alias to /src
import InstagramCard from "@/components/InstagramCard.vue";

let cards = []
cards = [
"https://picsum.photos/id/1/200/300",
"https://picsum.photos/id/2/200/300",
"https://picsum.photos/id/3/200/300",
"https://picsum.photos/id/4/200/300"


]

export default {
  name: "HomeView",
  data(){
    return{
      //kljuc vrijednost
      cards: cards

    }
  },
  components: {
    InstagramCard,
  },
};
</script>
