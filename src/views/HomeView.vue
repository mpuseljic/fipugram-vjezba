<template>
  <div class="row">
    <div class="col-8">
      <!-- nova forma za post -->
      <form
        v.if="!loading"
        @submit.prevent="postNewImage"
        class="form-inline mb-5"
      >
        <div class="form-group">
          <croppa
            :width="400"
            :height="400"
            placeholder="učitaj sliku..."
            v-model="imageReference"
          ></croppa>
        </div>
        <div class="form-group">
          <label for="imageDescription">Description</label>
          <input
            v-model="newImageDescription"
            type="text"
            class="form-control ml-2"
            placeholder="Enter the image description"
            id="imageDescription"
          />
        </div>
        <button type="submit" class="btn btn-primary ml-2">Post image</button>
      </form>
      <img
        v-if="loading"
        class="loading"
        :src="require('@/assets/loading.gif')"
      />
      <!-- listanje kartica -->
      <instagram-card
        v-for="card in filteredCards"
        :key="card.id"
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
import { firebase, db, storage } from "@/firebase";

// cards = [
//   {
//     url: "https://picsum.photos/id/1/200/300",
//     description: "laptop",
//     time: "few minutes ago...",
//   },
//   {
//     url: "https://picsum.photos/id/2/200/300",
//     description: "laptop #2",
//     time: "hour ago...",
//   },
//   {
//     url: "https://picsum.photos/id/3/200/300",
//     description: "laptop #3",
//     time: "few hours ago...",
//   },
// ];

export default {
  name: "HomeView",
  data() {
    return {
      //kljuc vrijednost
      cards: [],
      store,
      newImageUrl: "", // <-- url nove slike
      newImageDescription: "", // <-- opis nove slike
      imageReference: null,
      loading: false,
    };
  },
  mounted() {
    // <- daje točan trenutak kada se komponenta prikaze na ektran
    console.log("mounted");
    //dohvat iz firebasea
    this.getPosts();
  },
  methods: {
    getPosts() {
      console.log("firebse dohvat...");

      db.collection("posts")
        .orderBy("posted_at", "desc")
        .limit(10)
        .get()

        .then((query) => {
          query.forEach((doc) => {
            this.cards = [];
            const data = doc.data();

            this.cards.push({
              id: doc.id,
              time: data.posted_at,
              description: data.desc,
              url: data.url,
            });
          });
        });
    },
    getImage() {
      // promise based, omotač oko callbacka
      // moramo vratiit novi promise

      return new Promise((resolveFn, errorFn) => {
        this.imageReference.generateBlob((data) => {
          resolveFn(data);
        });
      });
    },
    async postNewImage() {
      try {
        this.loading = true;
        let blobDara = await this.getImage();
        let imageName =
          "posts/" + store.currentUser + "/" + Date.now() + ".png";
        let result = await storage.ref(imageName).put(blobData);
        let url = await result.ref.getDownloadURL();

        console.log("javni link", url);

        const imageDescription = this.newImageDescription;

        let doc = await db.collection("posts").add({
          url: imageUrl,
          desc: imageDescription,
          email: store.currentUser,
          posted_at: Date.now(),
        });

        console.log("Spremljeno ", doc);
        this.newImageDescription = "";

        this.getPosts();
      } catch (e) {
        console.error("greška ", e);
      }
      this.loading = false;
    },
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
    filteredCards() {
      let termin = this.store.searchTerm;
      return this.cards.filter((card) => card.description.includes(termin));
    },
  },
};
</script>

<style>
.loading {
  width: 400px;
}
</style>