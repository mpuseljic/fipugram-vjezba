<template>
    <div id="app">
        <nav id="nav" class="navbar navbar-expand-md navbar-light">
            <router-link to="/" class="navbar-brand">
                <img src="@/assets/fipu_logo.png" height="40" class="d-inline-block align-top" alt="" loading="lazy" />
            </router-link>
            <button
                class="navbar-toggler"
                type="button"
                data-toggle="collapse"
                data-target="#navbarToggler"
                aria-controls="navbarToggler"
                aria-expanded="false"
                aria-label="Toggle navigation"
            >
                <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarToggler">
                <form id="search" class="navbar-form form-inline ml-auto">
                    <input
                        v-model="store.searchTerm"
                        class="form-control mr-sm-2"
                        type="search"
                        placeholder="Pretraga"
                        aria-label="Search"
                    />
                </form>
                <!-- Image and text -->
                <ul class="navbar-nav ml-auto">
                    <li v-if="!store.currentUser" class="nav-item">
                        <router-link to="/login" class="nav-link">Login</router-link>
                    </li>
                    <li v-if="!store.currentUser" class="nav-item">
                        <router-link to="/signup" class="nav-link">Sign up</router-link>
                    </li>
                    <li v-if="store.currentUser" class="nav-item">
                        <a href="#" @click.prevent="logout()" class="nav-link">Logout</a>
                    </li>
                </ul>
            </div>
        </nav>

        <div class="container">
            <router-view />
            <!-- tu router dinamicki ubaci screen -->
        </div>
    </div>
</template>

<script>
import store from '@/store';
import { firebase } from '@/firebase';
import router from '@/router';

firebase.auth().onAuthStateChanged((user) => {
    const currentRoute = router.currentRoute;

    //console.log('PROVJERA STANJA LOGINA!');
    if (user) {
        // User is signed in.
        console.log('*** User', user.email);
        store.currentUser = user.email;

        if (!currentRoute.meta.needsUser) {
            router.push({ name: 'home' });
        }
    } else {
        // User is not signed in.
        console.log('*** No user');
        store.currentUser = null;

        if (currentRoute.meta.needsUser) {
            router.push({ name: 'login' });
        }
    }
});

export default {
    name: 'app',
    data() {
        return {
            store,
        };
    },
    methods: {
        logout() {
            firebase
                .auth()
                .signOut()
                .then(() => {
                    this.$router.push({ name: 'login' });
                });
        },
    },
};
</script>

<style lang="scss">
#app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
}

#nav {
    padding: 30px;

    a {
        font-weight: bold;
        color: #2c3e50;

        &.router-link-exact-active {
            color: #42b983;
        }
    }
}

#search {
    display: block;
    text-align: center;
}
</style>