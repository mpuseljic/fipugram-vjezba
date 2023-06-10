<template>
  <div class="row">
    <div class="col-8">
      <instagram-card />
      <instagram-card />
    </div>
    <div class="col-4">Sidebar {{ hello }} {{ lista }}</div>
  </div>
</template>

<script>
// @ is an alias to /src
import InstagramCard from "@/components/InstagramCard.vue";

let lista = [1,2,3,4,"ij"]

export default {
  name: "HomeView",
  data(){
    return{
      //kljuc vrijednost
      hello: "world",
      lista

    }
  },
  components: {
    InstagramCard,
  },
};
</script>
